import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import createPalette from '@material-ui/core/styles/createPalette';
 
const themePalette=createPalette(
  {
  primary: {
    main: "#2a6a9e"
  },
  secondary: {
    main: "#ebebeb"
  }
})

export const mortyTheme = createMuiTheme({
    palette: themePalette,    
    shape: {
      borderRadius: 30
    },
    spacing: 4,
    overrides: {      
      MuiCard:{
        root:{maxHeight:"30vh"}
      },
      MuiCardContent:{
        root:{
          padding:0,
        }
      },
      MuiButton: {
        root: {
          textTransform: "none",
          padding: 0,          
          border:"none",
          margin:0,          
          lineHeight:1                    
        },
        textPrimary:{
          color: themePalette.secondary.main,
          fontSize: "16px"          
        },
        fullWidth: {
          maxWidth: "300px"
        },        
      },
      MuiContainer:{        
        root:{
          
          color:themePalette.primary.main,
          
          fontSize: "1em",
          lineHeight: 1.6,
          letterSpacing: "0px",
          paddingTop: "0px",          
          paddingBottom: "0px",          
          marginTop: "0px",
          marginRight: "0px",
          marginBottom: "0px",
          marginLeft: "0px",
        },      
      },
      MuiGrid:{
        "spacing-xs-1":{
          margin:"0px",
          zIndex: 100
        },
        "spacing-xs-2":{
          margin:"10px",          
        }
      }      
    },
    props: {      
      MuiIconButton:{
        color:"primary",
        disableRipple: true,              
      },      
      MuiButton: {
        disableRipple: true,
        variant: "contained",
        color: "primary"
      },    
}});