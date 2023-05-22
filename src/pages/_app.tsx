import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { api } from "~/utils/api";


import "~/styles/globals.css";
import { CacheProvider } from "@chakra-ui/next-js";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
};

export default api.withTRPC(MyApp);
