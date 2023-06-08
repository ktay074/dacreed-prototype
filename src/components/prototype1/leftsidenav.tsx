import Dashboard from "../../images/prototype1/dashboardicon-midfi.png"
import Company from "../../images/prototype1/companyicon-midfi.png"
import Calendar from "../../images/prototype1/calendaricon-midfi.png"
import Courses from "../../images/prototype1/coursesicon-midfi.png"
import Report from "../../images/prototype1/reporticon-midfi.png"
import Review from "../../images/prototype1/reviewicon-midfi.png"
import Logout from "../../images/prototype1/logouticon.png"
import { UserAvatar } from "./useravatar"
import Dropdown from "./dropdown"
import Image from "next/image"
import React from "react"


const DashboardLinks = [
  { src: Dashboard, alt: "Dashboard Icon", text: "DASHBOARD"},
  { src: Company, alt: "Company Icon", text: "COMPANY"},
  { src: Calendar, alt: "Calendar Icon", text: "CALENDAR"},
  { src: Courses, alt: "Courses Icon", text: "COURSES"},
  { src: Report, alt: "Report Icon", text: "REPORT"},
  { src: Review, alt: "Review Icon", text: "REVIEW"},
]  

export default function LeftNavBar() {
  
  
  return (
      <div className="h-full pt-10 pb-40 px-10 bg-[#393DE3] font-sans font-bold text-[#F1F2FF]">
        
        {/* Dropdown menu admin toggle */}
        <Dropdown/>
        {/* User Avatar */}
        <div className="pt-10">
          <UserAvatar/>
        </div>

        {/* Dashboard links */}
        <div className="pt-20">
        {DashboardLinks.map((link, index) => (
          <a key={index} className="flex mb-6 cursor-pointer">
              <Image src={link.src} alt={link.alt} className="mr-3"></Image>
              {link.text}
          </a>
        ))}
        </div>
        
        <div className="flex mt-60 cursor-pointer">
          <Image src={Logout} alt="logout" className="mr-4"></Image>
          <a className="underline">Logout</a>
        </div>
      
      </div>
    );
  }