import React, { useState } from 'react';
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    InformationCircleIcon } from '@heroicons/react/24/solid';

    import RightMainMenu from '~/components/rightmainmenu'
    import LeftMainMenu from '~/components/leftmainmenu'

import { PrimaryButton, SecondaryButton} from '~/components/button'

const CourseInfoPage: React.FC = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
  };

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">

      {/* Left Menu */}
      <div className='col-span-2 flex'>
        
<LeftMainMenu isLeftMenuOpen={isLeftMenuOpen} toggleLeftMenu={toggleLeftMenu}/>
        {/* Left Menu Toggle Button */}
        <button
          className={` h-10 p-1 mt-20 bg-amber-400  rounded-r text-slate-200 `}
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
     className={`bg-amber-400   h-10 p-1 mt-20 rounded-l text-slate-200`}
      onClick={toggleRightMenu}
    >
      {isRightMenuOpen ? (
        <ChevronRightIcon className="w-6 h-6  " />
      ) : (
        <ChevronLeftIcon className="w-6 h-6" />
      )}
    </button>
  
    <RightMainMenu isRightMenuOpen={isRightMenuOpen} toggleRightMenu={toggleRightMenu} />

    
  </div>

</div>
  )
}
export default CourseInfoPage