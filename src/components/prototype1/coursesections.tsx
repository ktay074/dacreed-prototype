import Image from "next/image";
import MoreOptionsIcon from "../../images/prototype1/moreoptionsicon.png";

interface SectionsProps {
    title: string; 
    description: string; 
}

const Sections: React.FC<SectionsProps> = ({ title, description }) => {
    return(
        <div className="mr-80 mt-5 font-sans">
            <div className="bg-[#393DE3] px-8 py-4 flex">
                <div className="mr-60">
                <h3 className="text-[#ECECEC] mt-2">{title}</h3>
                </div>
                <div className="justify-end items-end flex ml-80">
                    <button className="bg-[#FFF8ED] text-black rounded-lg mr-7 px-6 py-2 border-2 border-black">
                      <p>ADD CONTENT</p>  
                    </button>
                    <button className="bg-[#FFF8ED] rounded-lg p-2 border-2 border-black"><Image src={MoreOptionsIcon} alt="more options"></Image></button>
                </div>
            </div>
            <div className="border-[#D0D0D0] border-2 bg-[#F6F2FF] px-4 py-4">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Sections            