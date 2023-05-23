import LeftNavBar from "~/components/prototype1/leftsidenav";
import { api } from "~/utils/api"; 
import Sections from "~/components/prototype1/coursesections";


const CoursesPage: React.FC = () => {
    const retrieveCourses = api.courses.getAll.useQuery(); 
    
    return (
        <div className="flex">
            <div className="flex-grow">
            <LeftNavBar></LeftNavBar>
            </div>

            <div className="mr-80">
            {/* Course sections */}
                <div>
                    {/* {retrieveCourses.map((fullCourse) => fullCourse)} */}
                    <Sections title={"Whistle Blowing"} description="The purpose of this policy is to set out the processes" />
                </div>
            </div>
        </div>    
    )
    
  }

export default CoursesPage