import React, {useState} from "react";
import { 
    InformationCircleIcon } from '@heroicons/react/24/solid';

import { PrimaryButton} from '~/components/button'
import Image from "next/image";

import logo from "~/images/teamspluslogo.svg"

interface LeftMainMenuProps {
    isLeftMenuOpen: boolean;
    courseTitle: string;
  }

const RightMainMenu: React.FC<LeftMainMenuProps> = ({ isLeftMenuOpen, courseTitle }) => {
    const [activeButton, setActiveButton] = useState('');
      
    const handleButtonClick = (buttonTitle: string) => {
        if(activeButton === buttonTitle) {
        setActiveButton("");
    }else 
    setActiveButton(buttonTitle);
      };
    
    return (
        <div className={`bg-gray-200 w-full h-screen ${isLeftMenuOpen ? 'block' : 'hidden'}`}>
          
     {/* Left Menu Content */}
     <div className="w-full bg-indigo-50  h-full ">
     <div className='px-4 flex'>
         <Image src={logo} alt='teams plus logo'></Image>
         <h3>Hi, Saskia</h3>
     </div>
     <div className='px-4'>
         <h2 className='text-center font-bold'>{courseTitle}</h2>
         <div className='progressbar bg-slate-200 h-2 rounded mx-4 my-4 '></div>
         <h3 className='mb-4 font-semibold'>Progress 0%</h3>
     </div>
     <hr/>
     <div className='sections font-semibold px-4'>
         <h3 className='mb-4 mt-2'>[section 1]</h3>
         <h3 className='mb-4'>[section 2]</h3>
         <h3 className='mb-4'>[section 3]</h3>
         <h3 className='mb-4'>[section 4 - Test]</h3>
     </div>
     <hr/>
     
     <h3 className='p-4 font-semibold'>Learning preference settings</h3>
     <div className="flex">
     <p className='px-4 font-medium '>
         Adjust the settings to personalise this course to your learning needs... 
     </p><InformationCircleIcon className='w-1/4'/></div>
     <div className='flex flex-col text-slate-200'>
     <PrimaryButton 
     title={"Visual"}
     isActive={activeButton === 'Visual'}
     onClick={() => handleButtonClick('Visual')}
     />
     <PrimaryButton 
     title={"Auditory"}
     isActive={activeButton === 'Auditory'}
     onClick={() => handleButtonClick('Auditory')}
     />
     <PrimaryButton 
     title={"Tactile"}
     isActive={activeButton === 'Tactile'}
     onClick={() => handleButtonClick('Tactile')}
     />
     <PrimaryButton 
     title={"Kinaesthetic"}
     isActive={activeButton === 'Kinaesthetic'}
     onClick={() => handleButtonClick('Kinaesthetic')}
     />
     <PrimaryButton 
     title={"Global"}
     isActive={activeButton === 'Global'}
     onClick={() => handleButtonClick('Global')}
     />
     <PrimaryButton 
     title={"Interpersonal"}
     isActive={activeButton === 'Interpersonal'}
     onClick={() => handleButtonClick('Interpersonal')}
     />
     <PrimaryButton 
     title={"Intrapersonal"}
     
     isActive={activeButton === 'Intrapersonal'}
     onClick={() => handleButtonClick('Intrapersonal')}
     />
     <PrimaryButton 
     title={"Analytical"}
     
     isActive={activeButton === 'Analytical'}
     onClick={() => handleButtonClick('Analytical')}
     />
     </div>
     <div className='font-bold flex flex-col text-slate-200 text-center'>
     <div className='bg-amber-400 p-4 '>Save my preferences</div>
     <div className='bg-indigo-700 p-2 '>Save for all courses</div>
     <div className='bg-indigo-300 p-2 '>Revert changes</div>
   </div>
   </div>

   </div>
    )
}

export default RightMainMenu