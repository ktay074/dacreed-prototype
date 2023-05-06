import React, {useState} from "react";
import { 
PencilIcon,
TrashIcon,
ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import jsPDF from "jspdf";

interface RightMainMenuProps {
    isRightMenuOpen: boolean;
  }

const RightMainMenu: React.FC<RightMainMenuProps> = ({ isRightMenuOpen }) => {
    const [notepadInput, setNotepadInput] = useState('');
    const [downloadNotepadType, setDownloadNotepadType] = useState(false);

    const handleTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotepadInput(event.target.value);
      };
    
      const handleClearNotepad = () => {
        const confirmed = window.confirm("Are you sure you want to clear the Notepad?");
        if (confirmed) {
          setNotepadInput("");
        }
    }
    const handleDownloadTxtNotepad = () => {
      
  const filename = prompt("Please enter the filename for the PDF", "notepad.pdf");
        if(filename) {
        const blob = new Blob([notepadInput], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        }
      };
      
      const handleDownloadPDFNotepad = () => {
        
  const filename = prompt("Please enter the filename for the PDF", "notepad.pdf");
        if (filename) {
            const pdf = new jsPDF();
            pdf.text(notepadInput, 10, 10); // Add text to the PDF document
            const pdfBlob = pdf.output('blob'); // Generate the PDF blob
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };
    const handleDownloadNotepad = () => {
        setDownloadNotepadType(!downloadNotepadType)
    }

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
        <div className={`flex justify-around ${downloadNotepadType ? 'block' : 'hidden'}`}>
          <button className="" onClick={handleDownloadTxtNotepad}>Txt</button>
          <button className="" onClick={handleDownloadPDFNotepad}>PDF</button>
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