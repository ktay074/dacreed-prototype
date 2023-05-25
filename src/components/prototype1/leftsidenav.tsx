import Dashboard from "../../images/prototype1/dashboardicon-midfi.png"
import Company from "../../images/prototype1/companyicon-midfi.png"
import Calendar from "../../images/prototype1/calendaricon-midfi.png"
import Courses from "../../images/prototype1/coursesicon-midfi.png"
import Report from "../../images/prototype1/reporticon-midfi.png"
import Review from "../../images/prototype1/reviewicon-midfi.png"

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
      <div className="flex flex-column h-full pr-20 bg-[#393DE3] font-sans font-bold text-[#F1F2FF]">
        
        {/* Dropdown menu admin toggle */}
        
        {/* User Avatar */}

        {/* Dashboard links */}
        <div className="pt-20">
        {DashboardLinks.map((link, index) => (
          <a key={index} className="flex mb-6 pl-20 cursor-pointer">
              <Image src={link.src} alt={link.alt} className="mr-3"></Image>
              {link.text}
          </a>
        ))}
        </div>
        
        
      
      </div>
    );
  }