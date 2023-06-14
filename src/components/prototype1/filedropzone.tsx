/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import FileUploadWindow from "./fileuploadwindow";


export interface FileContent {
  filename: string;
  rawtext: string;
}

interface FileDropzoneProps { 
  onFileChange(file: File): void
}

export default function FileDropzone(props: FileDropzoneProps) {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [org_content, setOrg_content] = useState("");
  const [fileSize, setFileSize] = useState(0);

  

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Drop", e.dataTransfer.files);
    const files = Array.from(e.dataTransfer.files);

    setDroppedFiles(files);

    files.forEach((file) => {
      console.log(file.name);
      console.log(file.type);
      props.onFileChange(file);
    });

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;

        setOrg_content(fileContent as string); // Do something with the file content
      };

      let result = null;

    if (file?.type.startsWith("text/")) {
        // Text file
        result = reader.readAsText(file);
      } else {
        console.log(`Unsupported file type: ${file ? file.type : "undefined"}`);
      }
      console.log(result);
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      {droppedFiles.length === 0 ? (
        <FileUploadWindow></FileUploadWindow>
      ) : (
        <ul
          className="text-black-300 flex flex-col items-center justify-center rounded-xl border-2 bg-[#FFF8ED] align-middle text-lg"
          style={{
            boxShadow: "-2px 2px 2px 0px rgba(0,0,0,0.3)",
            height: "501px",
            width: "592px",
          }}
        >
          {droppedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
