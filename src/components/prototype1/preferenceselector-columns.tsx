
import {useState} from 'react'; 

interface SelectorProps { 
    isActive?: boolean;
    onClick?: () => void; 
}

const ProficiencyOptions = [
    { alt:"Beginner", text:"BEGINNER" },
    { alt:"Intermediate", text:"INTERMEDIATE" },
    { alt:"Expert", text:"EXPERT" }
]

const FormalityOptions = [
    { alt:"Casual", text:"CASUAL" },
    { alt:"Neutral", text:"NEUTRAL" },
    { alt:"Professional", text:"PROFESSIONAL" }
]

const ProficiencySelector: React.FC<SelectorProps> = () => {

    const [selectedOption, setSelectedOption] = useState<string>(''); 

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div className='border-2 border-[#DBCAFF] rounded-lg px-2 py-4 text-[#1B1C46]'>
            <div>
                <h5 className='flex justify-center items-center font-sans font-bold mb-4 '>Proficiency</h5>
            </div>
            <div className='flex flex-col'>
                {ProficiencyOptions.map((option) => (
                    <button 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-4 py-2 bg-[#D7D8F9] rounded-md font-bold' : 'px-4 py-2 hover:bg-[#D7D8F9] font-bold rounded-md' }`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

const FormalitySelector: React.FC<SelectorProps> = () => {

    const [selectedOption, setSelectedOption] = useState<string>(''); 

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div className='border-2 border-[#DBCAFF] rounded-lg px-2 py-4 text-[#1B1C46]'>
            <div className=''>
                <h5 className='flex justify-center items-center mb-4 font-bold'>Formality</h5>
            </div>
            <div className='flex flex-col'> 
                {FormalityOptions.map((option) => (
                    <button 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-4 py-2 bg-[#D7D8F9] rounded-md font-bold' : 'px-4 py-2 hover:bg-[#D7D8F9] font-bold rounded-md' }`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export { ProficiencySelector, FormalitySelector }