import Profile from "../../images/prototype1/profileicon-prototype1.png"
import Dashboard from "../../images/prototype1/dashboardicon-prototype1.png"
import Company from "../../images/prototype1/companyicon-prototype1.png"
import Calendar from "../../images/prototype1/calendaricon-prototype1.png"
import Courses from "../../images/prototype1/coursesicon-prototype1.png"
import Reports from "../../images/prototype1/reportsicon-prototype1.png"
import Image from "next/image"
import React from "react"

export default function LeftNavBar() {
    return (
      <div className="h-screen max-w-xs bg-[#DBCAFF] font-sans font-bold text-[#4E4E52]">
        <div className="pt-40">
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Profile} alt="Profile icon"></Image>
            PROFILE
          </a>
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Dashboard} alt="Dashboard icon"></Image>
            DASHBOARD
          </a>
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Company} alt="Company icon"></Image>
            COMPANY
          </a>
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Calendar} alt="Calendar icon"></Image>
            CALENDAR
          </a>
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Courses} alt="Courses icon"></Image>
            COURSES
          </a>
          <a href="" className="mb-8 flex pl-20">
            <Image className="mr-3" src={Reports} alt="Reports icon"></Image>
            REPORTS
          </a>
        </div>
      </div>
    );
  }