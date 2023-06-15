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

const ProficiencySelectorRow: React.FC<SelectorProps & {selectedOption: string, onOptionClick: (option: string) => void}> = ({ selectedOption, onOptionClick}) => {
    
    const handleOptionClick = (option: string) => {
        onOptionClick(option)
        
    }

    return (
        <div>
            <div>
                <p className='ml-20 mb-2 text-[#1B1C46] font-semibold'>Proficiency</p>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-bold px-2 py-2'>
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

const VisibilitySelectorRow: React.FC<SelectorProps & {selectedOption: string, onOptionClick: (option: string) => void}> = ({ selectedOption, onOptionClick}) => {
    
    const handleOptionClick = (option: string) => {
        onOptionClick(option)
    }

    return (
        <div>
            <div>
                <p className='ml-20 mb-2 text-[#1B1C46] font-semibold'>Visibility</p>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-bold px-2 py-2'>
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

const FormalitySelectorRow: React.FC<SelectorProps & {selectedOption: string, onOptionClick: (option: string) => void}> = ({ selectedOption, onOptionClick }) => {
    

    const handleOptionClick = (option: string) => {
        onOptionClick(option)
    }

    return (
        <div>
            <div>
                <p className='ml-20 mb-2 text-[#1B1C46] font-semibold'>Formality</p>
            </div>
            <div className='flex flex-row justify-center items-center rounded-lg bg-[#B0B1F4] text-[#1B1C46] font-bold px-2 py-2'>
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