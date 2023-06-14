/* eslint-disable @typescript-eslint/no-misused-promises */
import LeftNavBar from "~/components/prototype1/leftsidenav";
import FileDropzone from "~/components/prototype1/filedropzone";
import SparkleIcon from "~/images/prototype1/sparkle-icon.png";
import Image from "next/image";
import { ProficiencySelectorRow, FormalitySelectorRow, VisibilitySelectorRow} from "~/components/prototype1/preferenceselector-rows";
import { PrimaryButton } from "~/components/prototype1/buttons";
import { api } from "~/utils/api";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
 
export default function NewFileUpload () {
    const [storedFile, setStoredFile] = useState<File>()
   
    const ctx = api.useContext(); 
    const createDocumentMutation = api.uploadfile.create.useMutation({
        onSuccess: () => {
          void ctx.courses.getAll.invalidate(); 
        }
      })
    
    
    // Handles the uploading of file   
    const handleGenerate = async () => {
        if (storedFile === undefined) return 
        
        // an id is generated using uuid
        const generatedId = uuidv4();
        createDocumentMutation.mutate (
            {
              id: generatedId, 
              file_name: storedFile.name,
              file_type: storedFile.type, 
              file_content: await readFileContent(storedFile),
              file_size: storedFile.size
            }
          )
        
        console.log(await readFileContent(storedFile))
      }

    const onFileChange = (file: File) => {
        console.log(file)
        setStoredFile(file)
    }
    
    

    return (
        <div className="flex bg-[#F1F2FF] space-x-20">
            <div>
                <LeftNavBar/> 
            </div>

            <div className="flex space-x-20 mt-40">
                <div>
                    <FileDropzone onFileChange={onFileChange}></FileDropzone>
                </div>
                <div className="space-y-10">
                    <div className="flex items-center space-x-3">
                        <Image src={SparkleIcon} alt="sparkle icon"></Image>
                        <h1 className="font-bold text-5xl text-[#4E4E52]">AI Course Creator</h1>
                    </div>
                    
                    <ProficiencySelectorRow/>
                    <FormalitySelectorRow/>
                    <VisibilitySelectorRow/>
                    
                    <div className="flex flex-col justify-center items-center">
                        <a className="font-semibold cursor-pointer text-decoration-line: underline underline-offset-4 hover:text-[#393DE3]">
                            Advanced Settings
                        </a>
                        <div className="flex justify-center items-center mt-10">
                            <PrimaryButton text="GENERATE" onClick={handleGenerate}></PrimaryButton>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

async function readFileContent(file: File) {
    return new Promise<string>((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsText(file);
    });
  }