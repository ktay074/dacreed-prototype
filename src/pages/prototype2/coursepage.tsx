import React, { useState, useEffect } from 'react';
import { 
    ChevronLeftIcon, 
    ChevronRightIcon} from '@heroicons/react/24/solid';

import type {RouterOutputs} from "~/utils/api"
import { api } from "~/utils/api";

    import RightMainMenu from '~/components/rightmainmenu'
    import LeftMainMenu from '~/components/leftmainmenu'
    import Sections from '~/components/sections';
    import { LoadingPage } from "../../components/loading";

    type CourseWithNodes = RouterOutputs["courses"]["getAll"];

    const CourseView = (props: CourseWithNodes[number] & {courseTitle: (title: string) => void }) => {
      const course = props;
      const { courseTitle } = props;
    
      useEffect(() => {
        if (course.title === "course 1") {
          courseTitle(course.title);
        }
      });
    
      if (course.title === "course 1") {
        return (
          <div className="flex flex-col">
            {course.nodes.map((node: any, index:any) => (
              <div key={index}>
                <div className="container">
                  <Sections title={node.title} description={node.description} />
                </div>
              </div>
            ))}
          </div>
        );
      }
    
      return null;
    };

const CourseInfoPage: React.FC = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(true);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen);
  };

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen);
  };

  const ShowCourse = () => {
    const {data, isLoading: coursesLoading} = api.courses.getAll.useQuery();
    
    if (coursesLoading) return <LoadingPage/>;
    
    if (!data) return <div>Something went wrong!</div>;

    if (localStorage.getItem('course title') === null){
        localStorage.setItem('course title', courseTitle)
    }
    
    console.log("course data" , data)
    return (
        <div className="flex flex-col">
          {data.map((fullCourse: any) => fullCourse && (
            <CourseView {...fullCourse} key={fullCourse.id} courseTitle={setCourseTitle} />
          ))}
        </div>
      );
      
  };

  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">

      {/* Left Menu */}
      <div className='col-span-2 flex'>
        
<LeftMainMenu isLeftMenuOpen={isLeftMenuOpen} courseTitle={courseTitle} />
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
        <h1 className="text-3xl font-bold mb-4 text-center">{courseTitle}</h1>
        <div className='border-2 border-black'>
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
  
    <RightMainMenu isRightMenuOpen={isRightMenuOpen}  />

    
  </div>

</div>
  )
}
export default CourseInfoPage

