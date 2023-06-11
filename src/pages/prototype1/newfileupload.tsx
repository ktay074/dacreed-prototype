import LeftNavBar from "~/components/prototype1/leftsidenav";
import FileDropzone from "~/components/prototype1/filedropzone";
import { ProficiencySelectorRow, FormalitySelectorRow, VisibilitySelectorRow} from "~/components/prototype1/preferenceselector-rows";
import { PrimaryButton } from "~/components/prototype1/buttons";

export default function NewFileUpload () {

    return (
        <div className="flex bg-[#F1F2FF] space-x-28">
            <div>
                <LeftNavBar/> 
            </div>

            <div className="flex space-x-36 mt-40">
                <div>
                    <FileDropzone></FileDropzone>
                </div>
                <div className="space-y-10">
                    <ProficiencySelectorRow/>
                    <FormalitySelectorRow/>
                    <VisibilitySelectorRow/>
                    
                    <div className="flex flex-col justify-center items-center">
                        <a className="font-semibold cursor-pointer text-decoration-line: underline underline-offset-4 hover:text-[#393DE3]">
                            Advanced Settings
                        </a>
                        <div className="flex justify-center items-center mt-10">
                            <PrimaryButton text="GENERATE"></PrimaryButton>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}