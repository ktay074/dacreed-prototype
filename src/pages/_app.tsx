import { type AppType } from "next/app";
import { ClerkProvider } from '@clerk/nextjs';
import { api } from "~/utils/api";
import { useUserActivity } from "../utils/analytics";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
useUserActivity();
  
  return (
    <ClerkProvider {...pageProps} >
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
