import React,{useEffect,Image} from 'react'
import { getProducts } from '../Service/api';
import Commerce from '@chec/commerce.js'
import {hero} from '@chec/commerce.js';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from './ProductCard';
export default function AllProducts() {
    // let products = [];
    const [product, setProd] = React.useState([]);
    const [del, setDel] = React.useState(false);

    function toggleDel()
    {
        console.log("toggle");
        setDel(true);
        window.location.reload(false);
    }

    useEffect(() => {
        let prod = getProducts().then(
            (res) =>{

                console.log(res.data.length);
                // if(res.data.legnth != prod.length)
                // {
                    setProd(res.data);
                // }
            }
        );
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));



  return (
    <div style={{display:"flex",}}>
        <br />
        {
            product[0]==null ?
            <h5>No products found</h5>
            :
            <Box sx={{ flexGrow: 1,margin:4  }}>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {product.map((data, index) => (
                    <Grid xs={1} sm={4} md={4} key={index}>
                        <ProductCard toggleDel={toggleDel} product={data}/> 
                    </Grid>
                    ))}
                </Grid>
                </Box>
        }



    </div>
  )
}
