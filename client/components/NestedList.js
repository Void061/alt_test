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
    const [openx, setOpenX] = React.useState([false, false]);




    
    let categorie = props.categorie;
    
    let articoli = props.articoli;

    let temp_array = [];


  
    
    
    
    //console.log(articoli);
    //console.log(categorie);

    const router = useRouter();

  

  
     

     const OpenCatX = (id) => {
       
      let temp = [];
      temp = openx;

      temp[id] = !temp[id];
       
      
       setOpenX(openx => [...temp]);


     }
      
     
       
        
        
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
      
      categorie.map((categoria, i) => {
        let art = articoli.find(elemento => elemento.id === categoria.attributes.id)
        let articles = [];
        articles.push(art);
        
        return(
          <>
            <ListItemButton sx={{ display: 'flex', flexDirection: 'row-reverse'}} onClick={() => OpenCatX(i)}>
            <ListItemText sx={{marginLeft: '5px'}} secondary={categoria.attributes.nome} />
            {openx[i] ? <ExpandMore /> : <ChevronRight />}
          </ListItemButton>
            {art != undefined && art != null ? 
            
           
            <Collapse in={openx[i]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {console.log(i)}
                <ListItemButton onClick={ props.page == 'news' ? () => UpdateArticle(router, art, props.setTitolo, props.setContent, props.setDataPub, props.setCopertina, props.setAutore, props.setAvatar) : () => router.push('/news/'+art.id+"#articolo")} key={i} sx={{ pl: 4 }}>
                    
                    <ListItemText primary={art.attributes.Titolo} />
                    
                  </ListItemButton>
                  <ListItemButton onClick={props.page == 'news' ? () => router.push('/category/'+categoria.attributes.id+"#category") : () => UpdateCategory(articles, props.setArticoli)} key={i+1} sx={{ pl: 4 }}>
                    
                    <ListItemText primary={"MORE"} />
                    
                  </ListItemButton>
                  
              
              </List>
            </Collapse>
            
            
            : null}
          </>
        )
        

           
      })

     }
        
       


       


        
      </List>

    )
}


function UpdateArticle(router, art, setTitolo, setContent, setData, setCopertina, setAutore, setAvatar){
  setTitolo(art.attributes.Titolo);
  setContent(art.attributes.content);
  setData(art.attributes.publishedAt);
  setCopertina('../images/prova2.png');
  setAutore('Ercole sarno');
  setAvatar('https://media-exp2.licdn.com/dms/image/C4D03AQGUjvJEgZ8hQA/profile-displayphoto-shrink_200_200/0/1612909250179?e=1659571200&v=beta&t=6BfdxgOhQRxl0TlqieUZvWTJjqPh3MMpQZFt89jogqc');
  router.push('/news/'+art.id+"#articolo");
}



function UpdateCategory(art, setArticoli){
  console.log(art);
  setArticoli(art);
}