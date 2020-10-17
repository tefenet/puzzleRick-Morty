import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

export interface ILocation{
    name:string,
    dimension:string
}

function renderCard(e: ILocation) {
  return (
  <Card>         
    <CardContent style={{ height:"20vh"}}>
        <Typography  style={{marginTop:"4vh"}} variant="subtitle1" align="center">
          {e.dimension}
          </Typography>
          <Typography style={{marginBottom:"4vh", textSizeAdjust:"auto"}} variant="subtitle1" align="center">
            {e.name} 
          </Typography>
    </CardContent>
  </Card>);
}
  
export const Location =({prop}: {prop:ILocation}) =>  {
    return(
      <Fragment>
        {renderCard(prop)}
      </Fragment>
    )
}