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

const VisibilityOptions = [
    { alt:"ORGANISATION", text:"ORGANISATION" },
    { alt:"TEAM", text:"TEAM" },
    { alt:"INDIVIDUAL", text:"INDIVIDUAL" }
]   

const ProficiencySelectorRow: React.FC<SelectorProps> = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>(''); 

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div>
            <div>
                <h3>Proficiency</h3>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-semibold px-2 py-2'>
                {ProficiencyOptions.map((option) => (
                    <div 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-20 py-2 bg-[#D7D8F9] rounded-lg hover:cursor-pointer' : 'px-20 py-2 hover:bg-[#D7D8F9] rounded-lg hover:cursor-pointer' }`}
                    > 
                        {option.text}
                    </div>
                ))}
            </div>

        </div>
    )
}

const VisibilitySelectorRow: React.FC<SelectorProps> = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>(''); 

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div>
            <div>
                <h3>Visibility</h3>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-semibold px-2 py-2'>
                {VisibilityOptions.map((option) => (
                    <div 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-20 py-2 bg-[#D7D8F9] rounded-lg hover:cursor-pointer' : 'px-20 py-2 hover:bg-[#D7D8F9] rounded-lg hover:cursor-pointer' }`}
                    > 
                        {option.text}
                    </div>
                ))}
            </div>

        </div>
    )
}

const FormalitySelectorRow: React.FC<SelectorProps> = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>(''); 

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <div>
            <div>
                <h3>Formality</h3>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-semibold px-2 py-2'>
                {FormalityOptions.map((option) => (
                    <div 
                    key={option.alt}
                    onClick={() => handleOptionClick(option.alt)}
                    className={`${option.alt === selectedOption ? 'px-20 py-2 bg-[#D7D8F9] rounded-lg hover:cursor-pointer' : 'px-20 py-2 hover:bg-[#D7D8F9] rounded-lg hover:cursor-pointer' }`}
                    > 
                        {option.text}
                    </div>
                ))}
            </div>

        </div>
    )
}

export { ProficiencySelectorRow, FormalitySelectorRow, VisibilitySelectorRow }