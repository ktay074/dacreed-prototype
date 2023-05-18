import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { ChakraProvider } from "@chakra-ui/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
