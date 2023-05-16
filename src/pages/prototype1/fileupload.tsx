// import { type NextPage } from "next"; 
// import Head from "next/head"; 
// import { api } from "~/utils/api"; 
import LeftNavBar from "~/components/prototype1/leftsidenav";
import FileDropzone from "~/components/prototype1/filedropzone";
import React from "react";


export default function FileUpload () {

    return (
        <div className="flex">
            <div className="mr-10">
            <LeftNavBar/>
            </div>
            <div>
                
                <div className="bg-[#F1F2FF]">
                <FileDropzone/>
                </div>
        
            </div>            
        </div>

    );
}