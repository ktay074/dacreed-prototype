import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import UserContext from "~/pages/usercontext"; 
import { createContext, useState } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [userContext, setUserContext] = useState("Pick User Type")
  
  return (
      <UserContext.Provider value={{userContext, setUserContext}}>
        <Component {...pageProps} />
      </UserContext.Provider>
   
  );
};

export default api.withTRPC(MyApp);
