import UploadIcon from "../../images/prototype1/cloud-upload-icon.png"
import Image from "next/image"

export default function FileUploadWindow() {

    return (
        <div>
            <div
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2"
                style={{
                boxShadow: "-2px 2px 2px 0px rgba(0,0,0,0.3)",
                height: "28rem",
                width: "28rem"
                }}
            >
                <p className="text-lg text-black-300 ">To rewrite text, enter and paste it here or upload a doc and customise and press create course.</p>
                 
                <Image src={UploadIcon} alt="UploadIcon"></Image>
            </div>
        </div>
    ); 
}