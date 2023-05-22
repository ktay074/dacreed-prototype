import { useRouter } from "next/router";
import LeftNavBar from "~/components/prototype1/leftsidenav";
import Image from "next/image";
import loadingGif from "../../images/prototype1/waveloading.gif";

export default function LoadingPage() {
  const router = useRouter();
  
  // wrap in useEffect and have arrow function before setTimeout
  // 
  setTimeout(() => {  
    void router.push("/prototype1/courseeditor");
  }, 12000);

  return (
    <div className="flex items-center">
      <div className="flex-grow">
        <LeftNavBar></LeftNavBar>
      </div>
      <div className="mr-20 bg-white">
        <Image
          src={loadingGif}
          alt="loading"
          width={1000}
          height={1000}
        ></Image>
      </div>
    </div>
  );
}
