import Head from "next/head";
import Script from "next/script";
import Header from "../components/base/Header";
import SlideInit from "../components/homepage/Slide";
import DescWithTitle from "../components/base/DescWithTitle";
import SwiperSlider from "../components/base/SwiperSlider";
import DividerSection from "../components/base/DividerSection";
import IconAndText from "../components/base/IconAndText";
import Card from "../components/base/Card";
import Link from "next/link";
import Contatti from "../components/homepage/Contatti";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle";
import NewsCard from "../components/base/NewsCard";
import Divider from "../components/base/Divider";
import Footer from "../components/base/Footer";
import StrapiClient from "../lib/strapi-client";
import NestedList from "../components/NestedList";
import SearchIcon from '@mui/icons-material/Search';
import Paginate from "../components/Paginate";
import Router from "next/router";
import { useEffect, useState } from "react";
import Articoli from "../components/Articoli";

export default function Category(){

    const [isLoading, setLoading] = useState(false);
    const [articoli, setArticoli] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    
    const [current_page, setCurrentPage] = useState(0);
    //Categorie finte
    let categorie = {
        data : [
             {
                 attributes: {
                id : 1,
                nome: 'CAT 1 FINTA',
                 }
            } ,

             {
                 attributes: {
                id: 2,
                nome: 'CAT 2 FINTA',
                 }
            },
        ],
    }


    //Qui andrebbero presi per categoria /category?c=id
    //quindi lanciare la query back-end filtrando per articoli che hanno ID della categoria come chiave esterna.

    useEffect(() => {
        let url = new URL(window.location.href);
        

        //Servirà a lanciare la query all'endpoint
        const id = url.searchParams.get('c');
       
        //Per ora diamo qualsiasi id per buono, visto che non abbiamo le categorie nel back-end
        

        //COL BACK-END:
        //IF ID ESISTE
        //FAI TUTTO
        //ELSE
        //TORNA ALLA HOME


        setLoading(true)
        
        fetch('https://altera.consulting/api/articoli')
          .then((res) => res.json())
          .then((data) => {
            
            
           
            
            if(data.meta.pagination.total > 0 ) {
            
            setArticoli(data.data);
            setPageCount(data.meta.pagination.pageCount);
            setCurrentPage(data.meta.pagination.page);

            }
            else{
               Router.push('/');
            }

            setLoading(false);
            
        
          })

          
        
      },[1])
    
    return (<div>
                 <Header position="fixed" />
                 <SlideInit />


                 <div className="main-category">


                     <div className="category" id="category">
                               
                            
                       

                        {articoli == null ? null : <><Articoli articoli={articoli}/><Paginate currentP={current_page} max={pageCount}/></> }


                      
                        
                    


        


                        
                    
                    
                     </div>

        
                     <div className="container_index">

                         <div className="ricerca">
                            <input type="text" placeholder="Cerca articolo"/>
                            <button type="button"><SearchIcon/></button>
                         </div>
                        
                        <div className="indice_articoli">
                            <h4 className="text-lg">CATEGORIE</h4>
                            <span className="divider-articoli"></span>

                            {articoli == null ? null : <NestedList  articoli={articoli} categorie={categorie}/>}
                           
                         </div>

                        
                     </div>


                     
                     
                     
                 </div>

                 

                 <Footer/>
    </div>)
}





