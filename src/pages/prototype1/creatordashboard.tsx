import LeftNavBar from "~/components/prototype1/leftsidenav";
import SearchBar from "~/components/prototype1/searchbar";
import { PrimaryButton } from "~/components/prototype1/buttons";
import CourseCard from "~/components/prototype1/coursecard";
import Link from "next/link";
import Image from "next/image";
import RecentActivity from "~/images/prototype1/recentactivity.png"
import { api } from "~/utils/api";


const CreatorDashboardPage: React.FC = () => {
    const CourseGalleryOptions = [
        {text: "PUBLISHED"},
        {text: "PENDING"},
        {text: "DRAFTS"},
        {text: "ARCHIVED"}
    ]
    
    const RetrieveUploadedCourses = api.uploadfile.getUploadedCourses.useQuery()

    if (RetrieveUploadedCourses === null){
        return <div>Loading Courses..</div>
    } 

    return (
        <div className="flex bg-[#F1F2FF] space-x-10">
            <div>
                <LeftNavBar/>
            </div>

            
            <div className="px-20 justify-center items-center">
                <SearchBar/>
                <div className="flex w-full font-bold justify-start space-x-20 border-b-2 border-[#1B1C46] py-2">
                    {CourseGalleryOptions.map((options, index) => (
                        <div className="text-[#1B1C46] hover:text-[#393DE3] cursor-pointer" key={index}>
                            {options.text}
                        </div>
                    ))}
                    <div className="pr-80">
                    </div>
                </div>
                <div className="py-6 flex justify-end items-center">
                    <Link href={"./newfileupload"}>
                        <PrimaryButton text="CREATE NEW"></PrimaryButton>
                    </Link>
                </div>
                <div className="flex space-x-6 mt-6">
                    {RetrieveUploadedCourses.data?.map(course => 
                        <CourseCard 
                        key={course.id} 
                        file_name={course.file_name} 
                        file_content={course.file_content}/>
                    )}
                </div>
            </div>

            <div className="bg-[#D7D8F9] items-center cursor-pointer">
                <Image src={RecentActivity} alt="recent activity feed" className="pt-40 px-2"></Image>
            </div>
        </div>
    )
}

export default CreatorDashboardPage