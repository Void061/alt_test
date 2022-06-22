
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from '@mui/material';
import L from 'next/link';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';



export default function Paginate(props){
    //Arrotondamento
    const [pageCount, setPageCount] = useState(props.max)
    const [current_page, setCurrentPage] = useState(props.currentP);

    
  
    

    return(
            
            <div className="pagination-container">
                
                {current_page > 0 ?           <Pagination count={props.max}
      page={current_page}
      color="primary"
    
      renderItem={(item, index) => (
          <L key={index} href={`/category/${item.page}`}>
        <PaginationItem
          component={'a'}
          to={`/category/${item.page === 1 ? '' : `${item.page}`}`}
          {...item}
        />
        </L>
      )}
      
    /> : null}
       

            </div>
       
        
    )


      }
