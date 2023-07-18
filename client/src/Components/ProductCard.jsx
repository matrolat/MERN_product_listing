import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../Service/api';

export default function ProductCard({product}) {
const baseUrl = "http://localhost:8000/";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={baseUrl+product.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <div style={{display:"flex",justifyContent:"space-around",marginTop:20}}>

        <Button variant="contained" component={Link} to={`/editproducts/${product._id}`} style={{minWidth:100,backgroundColor:"#4BB543"}}>Edit</Button>
        <Button variant="contained" onClick={(e)=>{ deleteProduct(product._id) }} style={{minWidth:100,backgroundColor:"#D11A2A"}}>Delete</Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}