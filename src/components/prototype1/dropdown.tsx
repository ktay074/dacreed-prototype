import { useState } from 'react'
import Image from 'next/image';
import DropdownIcon from '../../images/prototype1/dropdown-chevron.png'

const Dropdown: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false); 
    
    return (
        <div>
            <button onClick={() => setIsExpanded(true)}
                className="flex text-[#1B1C46] bg-[#FFF8ED] px-2 py-2 rounded-lg">
                Pick User Type

                <Image src={DropdownIcon} alt='Dropdown Icon' width={20} className='ml-4'></Image>
            </button>
            {isExpanded && 
                <div 
                onClick={() => setIsExpanded(false)}
                className='text-[#1B1C46] bg-[#FFF8ED] px-2 py-2 rounded-lg hover:bg-slate-300'>
                    Administrator
                </div>
                
            }
        </div>
    )
}

export default Dropdown