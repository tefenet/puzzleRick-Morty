import React, { Fragment } from "react";
import {Grid,Container,Typography,Divider  } from "@material-ui/core";

export interface IFilter{
  chars: boolean, loc: boolean, eps: boolean
}


export const Filter=({getFilter}: { getFilter: (f:React.ChangeEvent<HTMLInputElement>) => void; })=>{       

    return (
    <Grid
        container={true}
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        xs={2}
        
      >          
        <Container style={{minHeight:'calc(90vh - 30px)', backgroundColor:'#2a6a9e'}} >            
            <Fragment>
        <Typography variant="h6" noWrap style={{minWidth:'20%', color:'white',paddingTop:'4vh', margin:'4vh'}}>
            Filters
          </Typography>
        <Divider variant="middle"/>
        <Typography variant="subtitle1" noWrap style={{minWidth:'20%', color:'white'}}>
          <input type='checkbox' value="ch" onChange={getFilter} />  Characters
        </Typography>
        <Divider variant="middle"/>
        <Typography variant="subtitle1" noWrap style={{minWidth:'20%', color:'white'}}>
        <input type='checkbox' value="loc" onChange={getFilter} />  Locations
        </Typography>
        <Divider variant="middle"/>
        <Typography variant="subtitle1" noWrap style={{minWidth:'20%', color:'white'}}>
        <input type='checkbox' value="eps" onChange={getFilter} />  Episodes
        </Typography>
        </Fragment>
        </Container>  
      </Grid>

    )
}