import { Card,CardContent,Typography } from '@material-ui/core';
import React from 'react';


export interface IEpisode extends JSX.Element{
    name:string,
    episode:string,
    id:string
  }

function renderCard(e: IEpisode){
    return (<Card>            
        <CardContent style={{ height:"20vh"}}>
        <Typography  style={{marginTop:"4vh"}} variant="subtitle1" align="center">
          {e.episode}
          </Typography>
          <Typography style={{marginBottom:"4vh", textSizeAdjust:"auto"}} variant="subtitle1" align="center">
            {e.name} 
          </Typography>
        </CardContent>
      </Card>);
}

export const Episode =({prop}: {prop:IEpisode}) =>  {       
      
    return(      
        renderCard(prop)      
    )
}