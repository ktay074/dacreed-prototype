import React from "react"

export default function SearchBar () {
    return (
        <div className="font-sans text-black bg-white flex items-center justify-center m-10 border rounded overflow-hidden">
            
            <input className="ml-10 mr-10 mt-2 mb-2 "type="text" placeholder="Search by course name or category"></input>
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
            
        </div>
        
    )
}