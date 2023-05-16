// import { type NextPage } from "next"; 
// import Head from "next/head"; 
// import { api } from "~/utils/api"; 
import LeftNavBar from "~/components/prototype1/leftsidenav";
import FileDropzone from "~/components/prototype1/filedropzone";
import SearchBar from "~/components/prototype1/searchbar";
import React, { useState } from "react";
import Slider from "~/components/prototype1/slider";



export default function FileUpload () {
    const [proficiency, setProficiency] = useState([3])
    const [compress, setCompress] = useState([3])
    const [humor, setHumor] = useState([3])
    


    return (
        <div className="flex bg-[#F1F2FF] w-full h-full">
            <div className="mr-10">
            <LeftNavBar/>
            </div>
            <div>
                <SearchBar></SearchBar>
                
                <div>
                    <FileDropzone/>
                    <div>
                        {/* Sliders */}
                        <Slider title={"Proficiency"} min={1} max={5} step={1} values={proficiency} onChange={setProficiency}></Slider>
                        <Slider title={"Compress"} min={1} max={5} step={1} values={compress} onChange={setCompress}></Slider>
                        <Slider title={"Humor"} min={1} max={5} step={1} values={humor} onChange={setHumor}></Slider>
                    </div>
                </div>
        
            </div>            
        </div>

    );
}