import React, {useState} from "react";
import { 
PencilIcon,
TrashIcon,
ArrowDownTrayIcon } from '@heroicons/react/24/solid';

interface RightMainMenuProps {
    isRightMenuOpen: boolean;
    toggleRightMenu: () => void;
  }

const RightMainMenu: React.FC<RightMainMenuProps> = ({ isRightMenuOpen, toggleRightMenu }) => {
    const [notepadInput, setNotepadInput] = useState('');

    const handleTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotepadInput(event.target.value);
      };
    
      const handleClearNotepad = () => {
        const confirmed = window.confirm("Are you sure you want to clear the Notepad?");
        if (confirmed) {
          setNotepadInput("");
        }
    }
    const handleDownloadNotepad = () => {
        const confirmed = window.confirm("Are you sure you want to download your Notepad?");
        if(confirmed) {
        const blob = new Blob([notepadInput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'notepad.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        }
      };
      

    return (
        
        
        <div className={`bg-indigo-50 w-full h-screen ${isRightMenuOpen ? 'block' : 'hidden'}`}>
      {/* Right Menu Content */}
      <div className="w-full h-full">
        <div>
        <h2 className='text-center'>
            Your Notepad
        </h2 >
        <p className='m-4'>Use this space to record your thoughts, questions, ideas... anything. <br/><br/>

You’ll be able to view them for the duration of this course, or you can download them as a pdf and keep them forever.</p>
      </div>
      <div className='m-4'>
        <div className='flex justify-between bg-indigo-300'>
            <div className='flex gap-2'>
                <PencilIcon className='w-4 cursor-pointer'/>
                <p className='cursor-pointer'>Aa</p>
            </div>
            <div className='flex'>
                <ArrowDownTrayIcon className='w-4 cursor-pointer'
            onClick={handleDownloadNotepad} />
                <TrashIcon className='w-4 cursor-pointer'
            onClick={handleClearNotepad}
                />
            </div>
        </div>
        <textarea
                  className="w-full h-full p-4 outline-none"
                  placeholder="Start typing..."
                  value={notepadInput}
                  onChange={handleTextInputChange}
                />
      </div>
      </div>
    </div>
    )
}

export default RightMainMenu