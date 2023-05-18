import contentContainer from "../../images/prototype1/content-container.png";
import courseNavigation from "../../images/prototype1/course-navigation.png";
import Image from "next/image";

export default function CourseEditor() {
  return (
    <div>
      <div className="w-full bg-[#393DE3] px-20 py-12">
        <h1 className="text-semibold text-white hover:cursor-pointer">
          BACK TO COURSES
        </h1>
      </div>

      <div className="flex">
        <Image
          src={courseNavigation}
          alt="courseNavigation"
          className="hover:cursor-pointer"
        ></Image>
        <Image
          src={contentContainer}
          alt="contentContainer"
          width={600}
          height={700}
          className="mx-10 my-40 items-center hover:cursor-pointer"
        ></Image>
      </div>
    </div>
  );
}
