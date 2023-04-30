import React, { useState } from 'react';
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    InformationCircleIcon,
PencilIcon,
TrashIcon,
ArrowDownTrayIcon } from '@heroicons/react/24/solid';

import { PrimaryButton, SecondaryButton} from '~/components/button'

const CourseInfoPage: React.FC = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(true);
  const [activeButton, setActiveButton] = useState('');

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
  };
  const handleButtonClick = (buttonTitle: string) => {
    if(activeButton === buttonTitle) {
    setActiveButton("");
}else 
setActiveButton(buttonTitle);
  };

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">

      {/* Left Menu */}
      <div className='col-span-2 flex'>
        <div className={`bg-gray-200 w-full h-screen ${isLeftMenuOpen ? 'block' : 'hidden'}`}>
          {/* Left Menu Content */}
          <div className="w-full bg-indigo-500 text-slate-200 h-full ">
            <div className='px-4'>
                <img src='' alt=''></img>
                <h3>Hi, Saskia</h3>
            </div>
            <div className='px-4'>
                <h2 className='text-center font-bold'>[Course Title]</h2>
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
            <p className='px-4 font-bold'>
                Adjust the settings to personalise this course to your learning needs... <InformationCircleIcon className='w-6'/>
            </p>
            <div className='flex flex-col'>
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
            <div className='font-bold flex flex-col text-center'>
            <div className='bg-indigo-800 p-4 '>Save my preferences</div>
            <div className='text-indigo-800 p-2 '>Save for all courses</div>
            <div className='bg-indigo-300 p-4 '>Revert changes</div>
          </div>
          </div>
        </div>

        {/* Left Menu Toggle Button */}
        <button
          className={` h-10 p-1 mt-20 bg-indigo-700 rounded-r text-slate-200 `}
          onClick={toggleLeftMenu}
        >
          {isLeftMenuOpen ? (
            <ChevronLeftIcon className="w-6 h-6 " />
          ) : (
            <ChevronRightIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Course Info */}
      <div className="col-span-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-center">Course Title</h1>
        <div className='border-2 border-black'>
        <p className="mb-4">This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.</p>
        <p className="mb-4">This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text.This is a bunch of random text. </p>
           </div> </div>
              {/* Right Menu */}
  <div className={`col-span-2 flex  ${isRightMenuOpen ? 'justify-start' : 'justify-end'}`}>
        {/* Right Menu Toggle Button */}
        <button
     className={`bg-indigo-700  h-10 p-1 mt-20 rounded-l text-slate-200`}
      onClick={toggleRightMenu}
    >
      {isRightMenuOpen ? (
        <ChevronRightIcon className="w-6 h-6  " />
      ) : (
        <ChevronLeftIcon className="w-6 h-6" />
      )}
    </button>
  <div className={`bg-indigo-50 w-full h-screen ${isRightMenuOpen ? 'block' : 'hidden'}`}>
      {/* Right Menu Content */}
      <div className="w-full h-full">
        <div>
        <h2 className='text-center'>
            Your Notepad
        </h2 >
        <p className='m-4'>Use this space to record your thoughts, questions, ideas... anything. <br/><br/>

You’ll be able to view them for the duration of this course, or you can download them as a pdf and keep them forever.</p>
      </div>
      <div className='m-4'>
        <div className='flex justify-between bg-indigo-300'>
            <div className='flex gap-2'>
                <PencilIcon className='w-4'/>
                <p>Aa</p>
            </div>
            <div className='flex'>
                <ArrowDownTrayIcon className='w-4' />
                <TrashIcon className='w-4'/>
            </div>
        </div>
        <div className='bg-white h-full'>
dfvdfv
        </div>
      </div>
      </div>
    </div>


    
  </div>

</div>
  )
}
export default CourseInfoPage