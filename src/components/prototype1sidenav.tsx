import Profile from "../images/profileicon-prototype1.png"
import Dashboard from "../images/dashboardicon-prototype1.png"
import Company from "../images/companyicon-prototype1.png"
import Calendar from "../images/calendaricon-prototype1.png"
import Courses from "../images/coursesicon-prototype1.png"
import Reports from "../images/reportsicon-prototype1.png"
import Image from "next/image"

export default function LeftNavBar () {
    
    return (
    <div>
        <div className="bg-[DBCAFF] font-sans text-[#4E4E52]">
            <a href="" className="mb-24"><Image src={Profile} alt="Profile icon"></Image>PROFILE</a>
            <a href="" className="mb-24"><Image src={Dashboard} alt="Dashboard icon"></Image>DASHBOARD</a>
            <a href="" className="mb-24"><Image src={Company} alt="Company icon"></Image>COMPANY</a>
            <a href="" className="mb-24"><Image src={Calendar} alt="Calendar icon"></Image>CALENDAR</a>
            <a href="" className="mb-24"><Image src={Courses} alt="Courses icon"></Image>COURSES</a>
            <a href=""><Image src={Reports} alt="Reports icon"></Image>REPORTS</a>
        </div>
    </div>

    );
}