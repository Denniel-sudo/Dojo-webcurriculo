import { createContext, useState } from "react";


export const UserContext = createContext({});

export function UserProvider({children}){

  const [name, setName] = useState("");


  function setUsername(name){
    setName(name);
  }

  return(
    <UserContext.Provider
      value={{name,setUsername}}
    >
      {children}
    </UserContext.Provider>
  );
}