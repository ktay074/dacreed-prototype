import { useRouter } from "next/router";
import Image from "next/image";
import loadingGif from "../../images/prototype1/newwaveloading-cropped.gif";

export default function LoadingPage() {
  const router = useRouter();
  
  // wrap in useEffect and have arrow function before setTimeout
  // 
  setTimeout(() => {  
    void router.push("/prototype1/courseeditor");
  }, 8000);

  return (
    <div className="bg-[#1B1C46] flex items-end justify-center">
        

          <Image
            src={loadingGif}
            alt="loading"
            width={1550}
            height={1550}
          />
        
    </div>
  );
}
