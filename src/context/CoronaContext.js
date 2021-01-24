import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

export const CoronaContext = createContext();
export const StepContext = createContext(0);

const INITIAL_STATE = [
    {
      color: "#ECB613",
      type: "cases",
      name: "Global Cases",
      cases: null,
      countries: null,
    },
    {
      color: "#B1361E",
      type: "deaths",
      name: "Global Deaths",
      cases: null,
      countries:null,
    },
    
    {
      color: "#8AAC4C",
      type: "recovered",
      name: "Global Recovered",
      cases: null,
      countries: null,
    },
    {
      color: "#3C7EBB",
      type: "active",
      name: "Global Active",
      cases: null,
      countries: null,
    },
  ];

function CoronaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(()=>{
      const getData = async () => {
        try{
            if(state.some(el => el.cases === null)) {
            
                const res = await fetch('https://corona.lmao.ninja/v3/covid-19/all');
                const data = await res.json();
                dispatch({type:"UPDATE_GLOBAL_VALUE",payload: data});
            }
        }catch(e) {
            console.log(e)
        }
      }

      getData();
      
      
  },[state])



  return (
    <CoronaContext.Provider value={{ state, dispatch }}>
      {children}
    </CoronaContext.Provider>
  );
}

export default CoronaProvider;