
import { useState } from "react"
export default function Articoli(props){

    const [articoli, setArticoli] = useState(props.articoli);
    
    return(
        <>
            {articoli.map((articolo, index) => {
                
                //5 articoli per pagina, bisogna vedere come ragiona strapi PER PAGE
                if(index > 5){return}
                
                return(
                    
                    
                    
                   
                <div key={index} className="article">
                <img className="anteprima-cat" src="images/prova3.png"/>
                    
                <div className="text-base mt-2 publication-date publication-date flex items-center content-center text-[#0cf]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-[#0cf] stroke-[2px] mr-[5px]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {articolo.attributes.publishedAt}
                </div>
        
                <h4 className="text-base">{articolo.attributes.Titolo}</h4>
                <p className="text-base overf">{articolo.attributes.content}</p>
        
                <div className="mt-2 author">
            <img src="https://media-exp2.licdn.com/dms/image/C4D03AQGUjvJEgZ8hQA/profile-displayphoto-shrink_200_200/0/1612909250179?e=1659571200&amp;v=beta&amp;t=6BfdxgOhQRxl0TlqieUZvWTJjqPh3MMpQZFt89jogqc" className="w-[50px] h-[50px] object-cover rounded-full inline-flex mr-2"/>
            by Ercole Sarno
        </div>
            </div>
            
                   
                )
            })}
        </>
        
    )
}