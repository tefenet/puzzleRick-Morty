import { Grid } from '@material-ui/core';
import React from 'react';


export default function GridRow({cards}: {cards:JSX.Element[]|null}) {  
  function frag(items:JSX.Element[]){    
    return(
      <Grid container item spacing={4}
      xs={12}            
      wrap="nowrap"    
    >
        {items.map(item=> 
        <Grid item xs={3} zeroMinWidth>
          {item}
        </Grid>)}
      </Grid>
    )    
  }
  const divide =
    () => {
    let fragments: JSX.Element[]=[]
    let temp: JSX.Element[]=[];    
    temp.push(cards![0])
    for (let i=1 ; i < cards!.length ;i++){    
      if (i%4===0){
        fragments.push(frag(temp))
        temp=[]
      }
      temp.push(cards![i])
    }
    if (temp.length>0){
      fragments.push(frag(temp))
    }
    return fragments
  }  

  return (
    <Grid container spacing={4}>        
            {divide()}
      </Grid>    
  )
}