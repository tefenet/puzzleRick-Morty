import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';


export interface ICharacter {
  name: string,
  image: string
}

function renderCard(char: ICharacter) {
  return (<Card>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={char.name}
        height="140"
        style={{ objectFit: "contain", paddingTop: "3vh" }}
        width="50%"
        image={char.image} />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="h2" align="center">
          {char.name}
        </Typography>
      </CardContent>
    </CardActionArea></Card>);
}


export const Character = ({prop}: {prop:ICharacter}) => {  
    return (   
        renderCard(prop)    
  )
}