import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import MoreOptionsIcon from "../../images/prototype1/moreoptionsicon.png";
import EditingIcon from "../../images/prototype1/editingicon.png"
import 'react-quill/dist/quill.snow.css';

interface SectionsProp {
    title: string; 
    description: string; 
    onPublish: (title: string, description: string) => void; 
}

// False SSR means that the 'react-quill' module is not rendered on the server during SSR and instead rendered on the client-side
const ReactQuillEditor = dynamic (() => import ('react-quill'), { ssr: false})

const Section: React.FC<SectionsProp> = ({ title, description, onPublish }) => {
    const [editingState, setEditingState] = useState(false); 
    const [editableTitle, setEditableTitle] = useState(title);
    const [editableDescription, setEditableDescription] = useState(description);
    
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'], // inline styles
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // header styles
        [{ list: 'ordered' }, { list: 'bullet' }], // lists
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // indentation
        [{ color: [] }, { background: [] }], // color pickers
        ['link', 'image'], // links and images
        ['clean'], // remove formatting
      ];
    

    const handleTitleChange = (value: string) => {
        setEditableTitle(value)
    }

    const handleDescriptionChange = (value: string) => {
        setEditableDescription(value)
    }

    const handleEditButtonClick = () => {
        setEditingState(true); 
        console.log('Add Content Button Clicked')
    }
    
    const handleSaveButtonClick = () => {
        setEditingState(false);
        onPublish(editableTitle, editableDescription)
    }
      
    return(
        <div className="mx-10 px-10 mt-10 font-sans ">
            <div className="bg-[#393DE3] px-8 py-4 flex">

                <div className="">
                    {editingState ? (
                    <ReactQuillEditor value={editableTitle} onChange={handleTitleChange} modules={{ toolbar: toolbarOptions}}/>
                    ): (
                     <h3 className="text-[#ECECEC] mt-2 mr-60" dangerouslySetInnerHTML={{ __html: editableTitle}}></h3>
                    )}
                     
                    {/* <input value={editableTitle} onChange={(e) => handleTitleChange(e.target.value)}/> */}
                </div>


                <div className="justify-end items-end flex ml-60">
                    
                    {editingState ? (
                        <button onClick={handleSaveButtonClick} className="bg-[#FFF8ED] text-black rounded-lg mr-7 px-6 py-2 border-2 border-black">
                            <p>SAVE CONTENT</p>  
                        </button>) 
                        :      
                        (<button onClick={handleEditButtonClick} className="bg-[#FFF8ED] text-black rounded-lg mr-7 px-6 py-2 border-2 border-black">
                            <p>ADD CONTENT</p>  
                        </button> 
                    )}
                    <button className="bg-[#FFF8ED] rounded-lg p-2 border-2 border-black"><Image src={MoreOptionsIcon} alt="more options"></Image></button>
                </div>

            </div>
            <div className="border-[#D0D0D0] border-2 bg-[#F6F2FF] px-4 py-4">
                
                {editingState ? (
                    <ReactQuillEditor value={editableDescription} onChange={handleDescriptionChange} modules={{ toolbar: toolbarOptions}}/>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: editableDescription}}></p>

                )}
                <button><Image src={EditingIcon} alt="editing icon"></Image></button>
            </div>
        </div>
    )
}

export default Section            