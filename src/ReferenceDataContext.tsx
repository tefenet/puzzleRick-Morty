import React, { createContext, useReducer, useState } from "react";

const reducer = (state: any, pair: any) => ({ ...state, ...pair })
const initialState = {
	filterElements:{chars: false, loc: false, eps: false}
}
const ReferenceDataContext = createContext({
    state:{filterElements:{chars: false, loc: false, eps: false}},
    update: (state:{filterElements:{chars: boolean, loc: boolean, eps: boolean}})=>{},
    query: "",
    setQuery: (query:string)=>{}
});

const ReferenceDataContextProvider = (props: { children: React.ReactNode; }) => {    
    const [state, update] = useReducer(reducer,initialState)
    const [query,setQuery]=useState("")
  return (
    <ReferenceDataContext.Provider value={{ state, update,query,setQuery }}>
      {props.children}
    </ReferenceDataContext.Provider>
  );
};

export { ReferenceDataContext, ReferenceDataContextProvider };