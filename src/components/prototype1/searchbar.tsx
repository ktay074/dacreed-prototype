import React from "react"

export default function SearchBar () {
    return (
        <div className="font-sans text-black bg-[#FFF8ED] flex items-center justify-center my-10 mx-40 border rounded overflow-hidden w-200px">
            
            <input className="ml-10 mr-10 mt-2 mb-2 w-50 bg-[#FFF8ED]" type="text" placeholder="Search"></input>
            <svg className="h-4 w-4 text-grey-dark mr-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            
        </div>
        
    )
}