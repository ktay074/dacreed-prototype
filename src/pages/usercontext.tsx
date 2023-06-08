/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext }  from "react";

const UserContext = createContext({ userContext: "", setUserContext: (usercontext: string) => {}});

export default UserContext