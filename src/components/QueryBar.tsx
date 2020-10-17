import React from "react";
import {AppBar,Toolbar,Typography,Input  } from "@material-ui/core";



export const QueryBar=({setQuery}:{setQuery: (query:string)=>void})=>{   
    
    return(
        <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{minWidth:'20%'}}>
            toolbar
          </Typography>
          <Input style={{ background: "white" }} fullWidth={true} type='text' onChange={event => setQuery(event.target.value)}></Input>
        </Toolbar>
      </AppBar>
    )
}