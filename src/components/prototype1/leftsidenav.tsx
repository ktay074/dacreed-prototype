import Profile from "../../images/prototype1/profileicon-prototype1.png"
import Dashboard from "../../images/prototype1/dashboardicon-prototype1.png"
import Company from "../../images/prototype1/companyicon-prototype1.png"
import Calendar from "../../images/prototype1/calendaricon-prototype1.png"
import Courses from "../../images/prototype1/coursesicon-prototype1.png"
import Reports from "../../images/prototype1/reportsicon-prototype1.png"
import Image from "next/image"
import React from "react"

const DashboardLinks = [
  { src: Profile, alt: "Profile Icon", text: "PROFILE"},
  { src: Dashboard, alt: "Dashboard Icon", text: "DASHBOARD"},
  { src: Company, alt: "Company Icon", text: "COMPANY"},
  { src: Calendar, alt: "Calendar Icon", text: "CALENDAR"},
  { src: Courses, alt: "Courses Icon", text: "COURSES"},
  { src: Reports, alt: "Reports Icon", text: "REPORTS"},
]  

export default function LeftNavBar() {
  
  
  return (
      <div className="flex flex-column h-screen max-w-xs bg-[#393DE3] font-sans font-bold text-[#F1F2FF]">
        
        {/* Dropdown menu admin toggle */}
        
        {/* User Avatar */}

        {/* Dashboard links */}
        <div>
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