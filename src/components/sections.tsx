import React, {useState} from "react";

import { 
    ChevronDownIcon,
    ChevronUpDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/solid';

interface SectionsProps {
    title: string;
    description: string;
  }

const Sections: React.FC<SectionsProps> = ({ title, description }) => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);

    const toggleSection = () => {
        setIsSectionOpen(!isSectionOpen);
      };
    return(
        <div>
            <div className="flex justify-between px-4 py-2 bg-indigo-100">
            <h3>{title}</h3>
            <button
     className={`bg-transparent `}
      onClick={toggleSection}
    >
        {isSectionOpen ? (
        <ChevronUpIcon className="w-6 h-6  " />
      ) : (
        <ChevronDownIcon className="w-6 h-6" />
      )}
    </button>
            </div>
        <div className={`${isSectionOpen ? 'block' : 'hidden'}`}>
            <p className="px-10 py-6">
                {description}
            </p>
        </div>
</div>
  )
}

export default Sections