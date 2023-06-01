import LeftNavBar from "~/components/prototype1/leftsidenav";
import { api } from "~/utils/api"; 
import Section from "~/components/prototype1/coursesection";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "~/components/prototype1/buttons";
import { ProficiencySelector, FormalitySelector } from "~/components/prototype1/preferenceselector";
import QuestionSlider from "~/components/prototype1/questions-slider";
import { title } from "process";




const CourseEditorPage: React.FC = () => {
    
    const [questionsValue, setQuestionsValue] = useState([5]); 
    const retrieveCourses = api.courses.getAll.useQuery(); 
    
    
    const ctx = api.useContext(); 
    const updateNode = api.courses.updateNode.useMutation({
    onSuccess: async () => {
        await ctx.courses.getAll.invalidate(); 
        // invalidates the fetching of the data so that the courses are fetched again after node is updated
    }
    })

    const handleCourseNodePublish = (nodeId: string) => (title: string, description: string) => {
    updateNode.mutate({ nodeId: nodeId, title: title, description: description })
    }

    
        
    if (retrieveCourses.data === undefined) {
        return <div className="ml-80 mt-80 justify-center items-center text-xl">loading..</div>
    }
          
    
    
    return (
        <div className="flex bg-[#F1F2FF]">
            {/* Left container */}
            <div className="flex">
                <div className="h-full">
                <LeftNavBar></LeftNavBar>
                </div>
            </div>

            {/* Middle container */}
            <div className="w-full flex-row justify-center items-center">
                
                {/* Publish / Preview Buttons */}
                <div className="flex mb-20 mt-10 mr-40 justify-end">
                    <div><PrimaryButton text="PUBLISH"></PrimaryButton></div>
                    <div><SecondaryButton text="PREVIEW"></SecondaryButton></div>
                </div>


                {/* Course sections */}
                <div className="ml-20 pb-20 r">
                    {retrieveCourses.data.map((course, index) => (
                    <div key={index}>
                        {course.nodes.map((node) => (
                            <Section key={node.id} title={node.title} description={node.description} onPublish={handleCourseNodePublish(node.id)}/>
                        ))}
                    </div>)

                    )}
                </div>
                
            </div>

                {/* Right Menu */}
            <div className="bg-[#F6F2FF] flex-grow-[0.25] px-20 border-l-2 border-r-2">
                    <div className="mt-20">
                    <ProficiencySelector/>    
                    </div>

                    <div className="mt-6">
                    <FormalitySelector/>
                    </div>

                    <div className="mt-10">
                        <QuestionSlider title={"Questions"} min={0} max={10} step={1} values={questionsValue} onChange={setQuestionsValue}></QuestionSlider>
                    </div>

                    <div className="mt-40">
                        <SecondaryButton text="REGENERATE"/>
                    </div>
            </div>
        </div>    
    )
    
  }

export default CourseEditorPage