import React, { createContext, useState } from "react";



export const StepContext = createContext();


function StepProvider({ children }) {
  
    const [step, setStep] = useState(0) 

  return (
    <StepContext.Provider value={{ step,setStep }}>
      {children}
    </StepContext.Provider>
  );
}

export default StepProvider;