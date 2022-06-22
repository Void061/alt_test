import Header from "../../components/base/Header";
import SlideInit from "../../components/homepage/Slide";
import Footer from "../../components/base/Footer";
import NestedList from "../../components/NestedList";
import SearchIcon from '@mui/icons-material/Search';
import Paginate from "../../components/Paginate";
import Router from "next/router";
import { useEffect, useState } from "react";
import Articoli from "../../components/Articoli";

export default function Category(props) {

    const [isLoading, setLoading] = useState(false);

    const [pageCount, setPageCount] = useState(0);

    const [current_page, setCurrentPage] = useState(0);

    const [articoli, setArticoli] = useState(props.articoli.data);


    /*
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
        */


    return (<div>
        <Header position="fixed" />
        <SlideInit />


        <div className="main-category">


            <div className="category" id="category">




                <Articoli articoli={articoli} />

                {props.articoli.meta.pagination.total > 0 ? <Paginate currentP={props.articoli.meta.pagination.page} max={props.articoli.meta.pagination.pageCount} /> : null}

            </div>


            <div className="container_index">

                <div className="ricerca">
                    <input type="text" placeholder="Cerca articolo" />
                    <button type="button"><SearchIcon /></button>
                </div>

                <div className="indice_articoli">
                    <h4 className="text-lg">CATEGORIE</h4>
                    <span className="divider-articoli"></span>

                    <NestedList page="category" setArticoli={setArticoli} articoli={props.articoli_totali.data} categorie={props.categorie.data} />

                </div>


            </div>





        </div>



        <Footer />
    </div>)
}



export async function getServerSideProps(context) {

    //Parametro (ID CATEGORIA)
    const { id } = context.query;

    //Qui andrebbe messo prendi gli articoli che hanno categoria uguale a
    //TIPO:
    //https://altera.consulting/api/articoli?filters[category][$eq]="+id
    //In questo caso non c'è il back-end quindi faccio il controllo tramite id degli articoli
    const articoli = await fetch("https://altera.consulting/api/articoli?filters[id][$eq]=" + id).then(r => r.json());


    //Dovremmo prendere le categorie, non abbiamo il back-end quindi devo immaginare un json categorie
    //Questo json dovrebbe in teoria essere preso da
    //https://altera.consulting/api/categorie - che non abbiamo per ora 
    const categorie = {
        data: [
            {
                attributes: {
                    id: 1,
                    nome: 'CATEGORIA 1'
                }
            },
            {

                attributes: {
                    id: 2,
                    nome: 'CATEGORIA 2'
                }
            },
        ]
    }


    //Articoli totali, solo perchè sono pigro
    //Per la nested list
    const articoli_totali = await fetch("https://altera.consulting/api/articoli").then(r => r.json());


    return {
        props: {
            articoli: articoli,
            categorie: categorie,
            articoli_totali: articoli_totali
        },
    }
}