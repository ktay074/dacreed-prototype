
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
        <div className='border-2 border-[#DBCAFF] rounded-sm px-2 py-4'>
            <div>
                <h5 className='ml-4 mb-2 font-sans font-bold'>Proficiency</h5>
            </div>
            <div>
                {ProficiencyOptions.map((option) => (
                    <button 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-4 py-2 bg-[#D7D8F9] rounded-md' : 'px-4 py-2' }`}
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
        <div className='border-2 border-[#DBCAFF] rounded-sm px-2 py-4'>
            <div>
                <h5 className='ml-4 mb-2'>Formality</h5>
            </div>
            <div>
                {FormalityOptions.map((option) => (
                    <button 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-4 py-2 bg-[#D7D8F9] rounded-md' : 'px-4 py-2' }`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export { ProficiencySelector, FormalitySelector }