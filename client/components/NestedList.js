import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRight from '@mui/icons-material/ChevronRight';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function NestedList (props){

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [Loading, setLoading] = useState(false);
    const [articoli, setArticoli] = useState(null);
    let categorie = props.categorie;
    let v = -1;
    const router = useRouter();

  

   
    const OpenCat1 = () => {
      setOpen(!open);
    };
    const OpenCat2 = () => {
        setOpen2(!open);
      };

     
      
     
       
        
        
    return(

        <List
        sx={{ marginTop: '30px' , width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            
          </ListSubheader>
        }
      >
     
        {

          //Si dovrebbe dare una call per stampare gli articoli poi collegati alla categoria
          //Non c'è il backend attualmente, quindi uso un oggettino falso, affido entrambi gli articoli
          //Uno per ogni categoria
          categorie.data.map((categoria, indice) => {
            
            return(

              <>
            <ListItemButton sx={{ display: 'flex', flexDirection: 'row-reverse'}} onClick={() => OpenCat1()}>
            <ListItemText sx={{marginLeft: '5px'}} secondary={categoria.attributes.nome} />
            {open ? <ExpandMore /> : <ChevronRight />}
          </ListItemButton>
            
          <Collapse in={open} timeout="auto" unmountOnExit>


          <List component="div" disablePadding>
              
                {
                  
                 props.articoli.map((articolo, index, row) => {
                   v = -1;
                   
                  return(
                    <>
                    <ListItemButton key={index} sx={{ pl: 4 }}>
                    
                    <a href={"/single?a="+articolo.id+"#articolo"}><ListItemText primary={articolo.attributes.Titolo} /></a> 
                    
                   
                    
                   
                    
                  
                  </ListItemButton>

                  {index +1 === row.length ? <a href="/category?c=1"><ListItemText primary={'More'} /></a> : null}
                  </>
                  )
                })
              }
             
            

          </List>
        </Collapse>
            </>
          )

         


          })
          
        }
        
       


       


        
      </List>

    )
}
