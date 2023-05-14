import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center py-8">
      {isLoading ? (
        <div className="flex justify-center py-8">
        <div className="spinner w-8 h-8 text-blue-500"></div>
      </div>
      
      ) : (
        <Link
        href="/prototype2/editcoursepage"
        >
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
        </Link>
      )}
    </div>
  );
};

export default LoadingPage;
