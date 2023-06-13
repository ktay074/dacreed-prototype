import { useState, useContext } from "react";
import Image from "next/image";
import DropdownIcon from "../../images/prototype1/dropdown-chevron.png";
import UserContext from "~/pages/usercontext";

const Dropdown: React.FC = () => {
  const { userContext, setUserContext } = useContext(UserContext);
  const [isExpanded, setIsExpanded] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (option: string) => {
    setUserContext(option);
    setIsExpanded(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsExpanded(true)}
        className="border-black-500 flex items-center rounded-lg border-2 bg-[#FFF8ED] px-2 py-2 text-[#1B1C46]"
      >
        {userContext || "Pick View Type"}

        <Image
          src={DropdownIcon}
          alt="Dropdown Icon"
          height={12}
          width={8}
          className="ml-4"
        ></Image>
      </button>
      {isExpanded && (
        <div className="absolute z-10 w-40 rounded-lg bg-[#FFF8ED] hover:cursor-pointer">
          <div
            onClick={() => handleSelection("Administrator")}
            className="rounded-md bg-[#FFF8ED] px-2 py-2 text-[#1B1C46] hover:bg-slate-300"
          >
            Administrator
          </div>
          <div
            onClick={() => handleSelection("User")}
            className="rounded-md bg-[#FFF8ED] px-2 py-2 text-[#1B1C46] hover:bg-slate-300"
          >
            User
          </div>
        </div>
      )}
    </div>
  );
};

const DomainDropdown: React.FC = () => {
  const DomainTypes = [
    { alt: "Finance", text: "Finance" },
    { alt: "Human Resources", text: "Human Resources" },
    { alt: "IT", text: "IT" },
  ];

  const [isExpanded, setIsExpanded] = useState(false)

  const handleSelection = () => {
    setIsExpanded(false)
  }
  return (
    <div>
      <div className="border-black-500 flex items-center rounded-lg border-2 bg-[#FFF8ED] px-2 py-2 text-[#1B1C46]">
        <div>Pick Domain</div>
        <Image
          src={DropdownIcon}
          alt="Dropdown Icon"
          height={12}
          width={8}
          className="ml-4"
        ></Image>
      </div>
      {isExpanded && (
        <div>
           

        </div>
      )}
    </div>
  );
};

export { Dropdown, DomainDropdown };
