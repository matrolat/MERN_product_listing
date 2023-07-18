import React,{useState,Fragment,useEffect} from 'react'

import { FormGroup, FormControl, InputLabel, Input, Typography,Button,iconButtonClasses,Icon ,styled} from '@mui/material';
import {  updateProduct } from '../Service/api';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Service/api';
import { useNavigate } from "react-router-dom";



const StyledInput = styled(Input)(({ theme }) => ({
    // padding: '30px 135px',
    // display: 'flex',
    [theme.breakpoints.down('sm')]: {
        height: '30px',
        margin:"10px"
    }
}));
const Heading = styled(Typography)(({ theme }) => ({
    // padding: '30px 135px',
    // display: 'flex',
    [theme.breakpoints.down('sm')]: {
        margin:"10px"
    }
}));


export const EditProducts = () => {

    const navigate = useNavigate();

    const baseUrl = "https://mern-product-listing.onrender.com/";
    const Default = {
        title:'',
        price:'',
        description:'',
        imageUrl:''
    }
    const [prod,SetProd] = useState(Default)
    const {id} = useParams();


    useEffect(() => {
        loadProductDetails(id);
    }, []);


    const [imageUrl,SetImageUrl] = useState("")
    const [image,SetImage] = useState("")
    const handleChange =(e)=>{
        SetProd({...prod,[e.target.name]:e.target.value});
      
        console.log(prod);
    }


    const Submit = async()=>{
        console.log(prod);
        await updateProduct(prod,id);
        navigate("/");
    }


    function onChange(e){
        console.log(e.target.files[0])
        SetImageUrl(e.target.files[0].name)

        const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    SetImage(imageURL);
        // SetImage(URL.createObjectURL(e.target.files[0]))
        SetProd({...prod,['imageUrl']:e.target.files[0]});
    }

    const loadProductDetails= async(id)=>{
        const res = await getProductById(id);
        console.log(res.data.imageUrl);
        SetProd(res.data);

        const img = baseUrl+res.data.imageUrl;
        SetImage(img);
    }
  return (
        <div style={{background:"white",textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>

            <FormGroup style={{ minWidth: "40%", display: "flex", justifyContent: 'space-around',minHeight:'90vh',margin:20 }}>
                <Heading variant='h4'>Edit Product</Heading>
                <FormControl>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <StyledInput id="my-input" aria-describedby="my-helper-text" name='title' value={prod.title} onChange={handleChange}/>
                </FormControl>
                
                <FormControl>
                    <InputLabel htmlFor="my-input">Price</InputLabel>
                    <StyledInput id="my-input" aria-describedby="my-helper-text" name='price' value={prod.price} onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Description</InputLabel>
                    <StyledInput id="my-input" aria-describedby="my-helper-text" name='description' value={prod.description} onChange={handleChange}/>
                </FormControl>


                <Fragment>
                    <br />
                    Edit Image
                    <br />
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={image} alt="" height={150} width={150} style={{margin:15}}/>

                    </div>
                        <input
                        color="primary"
                        type="file"
                        onChange={onChange}
                        id="icon-button-file"
                        style={{ display: 'none', }}
                        />
                        <label htmlFor="icon-button-file">
                        <Button
                            variant="contained"
                            component="span"
                            // className={classes.button}
                            size="large"
                            color="primary"
                        >
                            <UploadFileIcon/>
                        </Button>
                        <br />
                        <br />
                            
                        </label>
                        </Fragment>

                <FormControl>
                <Button variant='contained' onClick={Submit}>Edit Product</Button>
                
                </FormControl>
            </FormGroup>

        </div>
  )
}
