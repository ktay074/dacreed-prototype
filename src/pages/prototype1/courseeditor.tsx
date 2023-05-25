import LeftNavBar from "~/components/prototype1/leftsidenav";
import { api } from "~/utils/api"; 
import Sections from "~/components/prototype1/coursesections";
import type { RouterOutputs } from "~/utils/api";
import { useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "~/components/prototype1/buttons";

  
const CoursesPage: React.FC = () => {
    
    
    const retrieveCourses = api.courses.getAll.useQuery(); 
        
    if (retrieveCourses.data === undefined) {
        return <div className="ml-80 mt-80 justify-center items-center text-xl">loading..</div>
    }
          
      
    console.log(retrieveCourses.data)

    return (
        <div className="flex bg-[#F1F2FF]">
            {/* Left container */}
            <div className="flex">
                <div className="h-full">
                <LeftNavBar></LeftNavBar>
                </div>
            </div>

            {/* Middle container */}
            <div className="flex-grow flex-row">
                {/* Publish / Preview Buttons */}
                <div className="flex mb-20 mt-10 mr-60 justify-end">
                <div><PrimaryButton text="PUBLISH"></PrimaryButton></div>
                <div><SecondaryButton text="PREVIEW"></SecondaryButton></div>
                </div>


                {/* Course sections */}
                <div className="ml-20 pb-20">
                    {/* {retrieveCourses.map((fullCourse) => fullCourse)} */}
                  
                    {retrieveCourses.data.map((node, index) => (<div key={index}>
                        <Sections title={node.nodes[index]?.title??""} description={node.nodes[index]?.description??""}/>
                        </div>)
                        )}

                    <Sections title={"Whistle blowing"} description="The purpose of this policy is to set out the processes by which suspected serious wrongdoing can be reported, within the framework of protection provided by the Protected Disclosures Act 2000.
                    Reporting serious wrongdoing assists with managing risk (including health and safety risk), promotes openness and transparency and protects our business reputation." />

                    <Sections title="Policy Statement" description="We encourage our staff to use the whistleblower process when they suspect serious wrongdoing. The business acknowledges that whistle-blowers or employees making internal disclosures may be concerned about reprisals, discrimination, harassment or retribution in making an internal disclosure. we are committed to minimizing those possibilities with the following:"/>

                    <Sections title="Reporting under the policy" description="For the purposes of making a report under this Policy, matters may include, but are not limited to, any factual or suspected:
                    " />

                    <Sections title="Question 1" description="What are the discolours to which the Act applies?" />

                </div>
                
            </div>

                {/* Right Menu */}
            <div className="bg-white flex-grow-[0.25] pl-40">
                    <div>
                    Right Menu    
                    
                    </div>
            </div>
        </div>    
    )
    
  }

export default CoursesPage