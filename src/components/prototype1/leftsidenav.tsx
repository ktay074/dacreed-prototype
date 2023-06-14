import Dashboard from "../../images/prototype1/dashboardicon-midfi.png"
import Company from "../../images/prototype1/companyicon-midfi.png"
import Calendar from "../../images/prototype1/calendaricon-midfi.png"
import Courses from "../../images/prototype1/coursesicon-midfi.png"
import Report from "../../images/prototype1/reporticon-midfi.png"
import Review from "../../images/prototype1/reviewicon-midfi.png"
import Logout from "../../images/prototype1/logouticon.png"
import { UserAvatar } from "./useravatar"
import { Dropdown } from "./dropdown"
import Image from "next/image"
import React from "react"


const DashboardLinks = [
  { src: Dashboard, alt: "Dashboard Icon", text: "DASHBOARD", href:"/prototype1/creatordashboard"},
  { src: Company, alt: "Company Icon", text: "COMPANY", href:"/"},
  { src: Calendar, alt: "Calendar Icon", text: "CALENDAR", href:"/"},
  { src: Courses, alt: "Courses Icon", text: "COURSES", href:"/"},
  { src: Report, alt: "Report Icon", text: "REPORT", href:"/"},
  { src: Review, alt: "Review Icon", text: "REVIEW", href:"/"},
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
        <div className="pt-10">
        {DashboardLinks.map((link, index) => (
          <a key={index} href={link.href} className="flex mb-6 cursor-pointer hover:bg-slate-100 hover:text-[#393DE3]">
              
              <Image src={link.src} alt={link.alt} className="mr-3"></Image>
              {link.text}
          </a>
        ))}
        </div>
        
        <div className="flex mt-60 cursor-pointer hover:text-[#d0d0d8]">
          <Image src={Logout} alt="logout" className="mr-4"></Image>
          <a className="underline">Logout</a>
        </div>
      
      </div>
    );
  }