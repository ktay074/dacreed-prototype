import React, { useState } from 'react';
import { 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    InformationCircleIcon } from '@heroicons/react/24/solid';

import type {RouterOutputs} from "~/utils/api"
import { api } from "~/utils/api";

    import RightMainMenu from '~/components/rightmainmenu'
    import LeftMainMenu from '~/components/leftmainmenu'
    import Sections from '~/components/sections';
    import { LoadingPage } from "../components/loading";

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
  type CourseWithNodes = RouterOutputs["courses"]["getAll"];

  const CourseView = (props: CourseWithNodes[number]) => {
    const course = props;
    return (
      <div 
        className="p-4 border-b border-slate-400 flex gap-3" 
        key={course.id}
      >
        <div className="flex flex-col">
          <span className="text-xl">{course.title}</span>
          {course.nodes.map((node, index) => (
          <div key={index}><div className="container">
          {React.createElement("span", {}, node)}
        </div></div>
        ))}
        </div>
      </div>
    )
  }
  

  const ShowCourse = () => {
    const {data, isLoading: coursesLoading} = api.courses.getAll.useQuery();
    
    if (coursesLoading) return <LoadingPage/>;
    
    if (!data) return <div>Something went wrong!</div>;
    
    return (
        <div className="flex flex-col">
          {data.map((fullCourse) => fullCourse && (
            <CourseView {...fullCourse} key={fullCourse.id} />
          ))}
        </div>
      );
      
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
        <Sections title={"[Section1]"} description={'this a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a description'}/>
        <Sections title={"[Section2]"} description={'this a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a description'}/>
        <Sections title={"[Section3]"} description={'this a description this a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a description'}/>
        <Sections title={"[Section4-test]"} description={'this a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a descriptionthis a description'}/>
        <ShowCourse/>
        </div>
          </div>
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

