import { useRouter } from "next/router";
import Image from "next/image";
import loadingGif from "../../images/prototype1/newwaveloading.gif";

export default function LoadingPage() {
  const router = useRouter();
  
  // wrap in useEffect and have arrow function before setTimeout
  // 
  setTimeout(() => {  
    void router.push("/prototype1/courseeditor");
  }, 12000);

  return (
    <div className="w-full h-full bg-[#1B1C46]">
        <div className="ml-40">

          <Image
            src={loadingGif}
            alt="loading"
            width={1300}
            height={1300}
          />
        </div>
    </div>
  );
}
