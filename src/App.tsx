import React from 'react';
import './App.css';
import {ReferenceDataContextProvider} from './ReferenceDataContext'
import Main from './components/Main';


function App() {
  return (
    <ReferenceDataContextProvider>          
      <Main></Main>      
    <footer style={{height:'30px', backgroundColor:'#2a6a9e'}}> wilson</footer>    
    </ReferenceDataContextProvider>
  );
}

export default App;
