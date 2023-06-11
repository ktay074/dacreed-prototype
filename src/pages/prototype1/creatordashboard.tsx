import LeftNavBar from "~/components/prototype1/leftsidenav";
import SearchBar from "~/components/prototype1/searchbar";
import { PrimaryButton } from "~/components/prototype1/buttons";
import CourseCard from "~/components/prototype1/coursecard";
import Link from "next/link";


const CreatorDashboardPage: React.FC = () => {
    const CourseGalleryOptions = [
        {text: "PUBLISHED"},
        {text: "PENDING"},
        {text: "DRAFTS"},
        {text: "ARCHIVED"}
    ]
    
    return (
        <div className="flex bg-[#F1F2FF]">
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
                    <Link href={"./fileupload"}>
                        <PrimaryButton text="CREATE NEW"></PrimaryButton>
                    </Link>
                </div>
                <div className="flex space-x-6">
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                </div>
            </div>

            
        </div>
    )
}

export default CreatorDashboardPage