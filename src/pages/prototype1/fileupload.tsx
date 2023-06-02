// import { type NextPage } from "next"; 
// import Head from "next/head"; 
// import { api } from "~/utils/api"; 
import LeftNavBar from "~/components/prototype1/leftsidenav";
import FileDropzone from "~/components/prototype1/filedropzone";
import SearchBar from "~/components/prototype1/searchbar";
import React, { useState, useEffect } from "react";
import Slider from "~/components/prototype1/slider";
import Link from "next/link";



export default function FileUpload () {
    const [proficiency, setProficiency] = useState([3])
    const [compress, setCompress] = useState([3])
    const [humor, setHumor] = useState([3])
    
    useEffect(() => {
        localStorage.setItem('proficiency rating', proficiency.toString());
        localStorage.setItem('compress rating', compress.toString());
        localStorage.setItem('humor rating', humor.toString());
    }, [proficiency, compress, humor])

    // const handle
    // push preferences to the next page 
    // store preferences in database 
    // extract text from file and send to API

    const handleCreateCourse = () => {
        console.log('Creating course..')

        const proficiencyRating = localStorage.getItem('proficiency rating');
        const compressRating = localStorage.getItem('compress rating');
        const humorRating = localStorage.getItem('humor rating');
        
        console.log("Proficiency Rating:", proficiencyRating)
        console.log("Compress Rating:", compressRating)
        console.log("Humor Rating:", humorRating)

    }


    return (
        <div className="bg-[#F1F2FF] text-sans">
            <div className="flex">

                    <div className="">
                        <div className="h-full">
                            <LeftNavBar></LeftNavBar>

                        </div>
                    </div>                                        
                    <div className="flex flex-col items-center flex-grow mr-20">

                        <div className="mb-20">
                        <SearchBar></SearchBar>
                        </div>
                        <div className="flex">
                            {/* File Dropzone */}
                            <div className="mr-20">
                            <FileDropzone/>
                            </div>
                            <div className="ml-10 mt-15">
                                <div className="text-5xl text-bold mb-20">Customise the course</div>

                                {/* Sliders */}
                                <div>
                                <Slider title={"Proficiency"} min={1} max={5} step={1} values={proficiency} onChange={setProficiency}></Slider>
                                <Slider title={"Compress"} min={1} max={5} step={1} values={compress} onChange={setCompress}></Slider>
                                <Slider title={"Humor"} min={1} max={5} step={1} values={humor} onChange={setHumor}></Slider>
                                </div>

                                {/* Create Course button */}
                                <div>
                                    <Link href={"./loadingpage"}>
                                    <button className="text-black-500 font-bold font-sans rounded-2xl px-10 py-2 ml-40 mt-20 bg-yellow-400 hover:cursor-pointer" 
                                    
                                    onClick={handleCreateCourse}
                                    >Create Course</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>            

            </div>
        
    
    );
}