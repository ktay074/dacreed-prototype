import Link from 'next/link';
import Slider from '~/components/slider';
import { api } from "~/utils/api";
import { useState } from 'react';
import { read } from "docx";

export default function UploadPage() {
const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
const [professionalPreference, setProfessionalPreference] = useState([1])
const [humourPreference, sethumorPreference] = useState([1])
const [simplicityPreference, setSimplicityPreference] = useState([1])

const ctx = api.useContext();

//call API to save the preferences to DB
const {mutate} = api.preferences.create.useMutation({
  onSuccess: () => {
    void ctx.courses.getAll.invalidate();
  }
});




const handleSimplicityChange = (newSimplicityValue: number[]) => {
  setSimplicityPreference(newSimplicityValue);
  console.log(simplicityPreference)
};
const handleHumourChange = (newHumourValue: number[]) => {
  sethumorPreference(newHumourValue);
};
const handleProfessionalismChange = (newProffesionalismValue: number[]) => {
  setProfessionalPreference(newProffesionalismValue);
};

// const handleSavePreferences = () => {
//   const simplicityPref: string = simplicityPreference.toString();
//   const humourPref: string = humourPreference.toString();
//   const professionalismPref: string = professionalPreference.toString();


//     localStorage.setItem("Simplicity Preference", simplicityPref)
//     localStorage.setItem("Humour Preference", humourPref)
//     localStorage.setItem("Proffesionalism Preference", professionalismPref)

//       // should contain the created CoursePref object

//       return (
//         <div className="flex gap-3 w-full">
//           <button onClick={() => mutate({ simplicityPref: simplicityPreference, humourPref: humourPreference, professionalismPref: professionalPreference})}>Post</button>
//         </div>)

// };

const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  const files = e.dataTransfer.files;

  // Set the dropped files to state
  setDroppedFiles(Array.from(files));

  // Read the contents of the dropped files
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = async () => {
      const fileContent = reader.result;
      console.log(fileContent); // Do something with the file content
      

    };
    
    if (file?.type === "application/msword" || file?.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      // Word document
      reader.readAsArrayBuffer(file);
    } else if (file?.type.startsWith("image/")) {
      // Image file
      const fileUrl = URL.createObjectURL(file);
      const img = document.createElement("img");
      img.src = fileUrl;
      document.body.appendChild(img);
      reader.readAsDataURL(file);
    } else if (file?.type.startsWith("text/")) {
      // Text file
      reader.readAsText(file);
    } else {
      console.log(`Unsupported file type: ${file?.type}`);
    }
  }
};



droppedFiles.forEach((file) => {
  console.log('Name:', file.name);
  console.log('Type:', file.type);
});


  return (
    <div className=' sm:my-10 md:mx-32 '>
      <div className='flex' >
        <div 
        className="m-10 bg-indigo-500 text-slate-100 rounded-full flex flex-col justify-center items-center w-2/4"
        onDrop={handleDrop} 
        onDragOver={(e)=>e.preventDefault()}
        >
             {droppedFiles.length === 0 ? (
          <div className="text-center">
            <p className='mb-5 text-xl'>Drag and drop files here</p>
            <p className='text-2xl underline'>Click to Upload</p>
            <p className='text-base underline pt-10'>How to?</p>
            </div>
        ) : (
          <ul>
            {droppedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
        </div>
        <div className='flex flex-col w-2/4 mb-20'>
            <h1 className='font-bold text-5xl pb-10'>Course Name</h1>
            <p className='text-indigo-700 font-semibold pb-6'>Dial your preferences</p>
            
            <Slider title={"Simplicity"} min={1} max={5} step={1} values={simplicityPreference} onChange={handleSimplicityChange}/>
            <Slider title={"Humour"} min={1} max={5} step={1} values={humourPreference} onChange={handleHumourChange}/>
            <Slider title={"Professionalism"} min={1} max={5} step={1} values={professionalPreference} onChange={handleProfessionalismChange}/>
            
            <div className='w-4/5 flex flex-col '>
            <Link href="/coursepage">
            <button className='text-2xl text-slate-100 bg-indigo-700 rounded-3xl px-4 py-2 mt-5 w-2/4 self-end'>Generate</button>
            </Link>

            <button 
            className='text-2xl text-slate-100 bg-indigo-700 rounded-3xl px-4 py-2 mt-5 w-2/4 self-end'
            onClick={() => mutate({ simplicityPref: simplicityPreference, humourPref: humourPreference, professionalismPref: professionalPreference})}
            >Save Preferences</button>
            <div className='w-full bg-red-200'></div>
            </div>
        </div>
      </div>
      <div className='flex w-full bg-indigo-700 justify-around h-20 items-center text-slate-100'>
        <div className='flex gap-3'>
            <div className='bg-indigo-400 px-4 py-2 rounded-full'>1</div>
            <div className='self-center'>Upload</div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-indigo-300 px-4 py-2 rounded-full'>2</div>
            <div className='self-center '>Generate</div>
        </div>
        <div className='flex gap-3'>
            <div className='bg-indigo-200 px-4 py-2 rounded-full'>3</div>
            <div className='self-center'>Edit</div>
        </div>
      </div>

    </div>
  );
}