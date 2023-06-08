import { useState, useContext } from 'react'
import Image from 'next/image';
import DropdownIcon from '../../images/prototype1/dropdown-chevron.png'
import UserContext from '~/pages/usercontext';

const Dropdown: React.FC = () => {
    
    const { userContext, setUserContext } = useContext(UserContext)
    

    const [isExpanded, setIsExpanded] = useState(false); 
    // const [selectedOption, setSelectedOption] = useState('');     

    const handleSelection = (option: string) => {
        setUserContext(option);
        setIsExpanded(false)
    }

    return (
        <div>
            <button onClick={() => setIsExpanded(true)}
                className="flex items-center text-[#1B1C46] bg-[#FFF8ED] px-2 py-2 rounded-lg">
                {userContext || "Pick View Type"}

                <Image src={DropdownIcon} alt='Dropdown Icon' height={12} width={8} className='ml-4'></Image>
            </button>
            {isExpanded && 
                <div className='w-40 absolute z-10 bg-[#FFF8ED] rounded-lg hover:cursor-pointer'>
                    <div 
                    onClick={() => handleSelection('Administrator')}
                    className='text-[#1B1C46] bg-[#FFF8ED] px-2 py-2 rounded-md hover:bg-slate-300'>
                        Administrator
                    </div>
                    <div 
                    onClick={() => handleSelection('User')}
                    className='text-[#1B1C46] bg-[#FFF8ED] px-2 py-2 rounded-md hover:bg-slate-300'>
                        User
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown