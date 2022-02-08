import React, { createContext, useContext, useState } from 'react';

interface IDarkmodeContext {
  useDarkmode: boolean;
  setUseDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkmodeContext = createContext<IDarkmodeContext|undefined>(undefined);

export const useDarkmodeContext = () => {
    const context = useContext(DarkmodeContext);

  if (context === undefined) {
    throw new Error('Call "useDarkmodeContext" only inside a DarkmodeContextProvider');
  }

  return context;
}
const DarkmodeContextProvider: React.FC = ({children}) => {

  const [useDarkmode, setUseDarkmode] = useState<boolean>(false);
  
  return (
    <DarkmodeContext.Provider value={{useDarkmode: useDarkmode, setUseDarkmode: setUseDarkmode}}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeContextProvider;