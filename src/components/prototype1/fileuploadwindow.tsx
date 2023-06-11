import UploadIcon from "../../images/prototype1/cloud-upload-icon.png"
import Image from "next/image"

export default function FileUploadWindow() {

    return (
        <div>
            <div
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 bg-white"
                style={{
                boxShadow: "-2px 2px 2px 0px rgba(0,0,0,0.3)",
                height: "501px",
                width: "592px"
                }}
            >
                <p className="text-lg text-black-300 p-10 mb-12">Drag and drop file here</p>
                 
                <Image src={UploadIcon} alt="UploadIcon"></Image>
            </div>
        </div>
    ); 
}