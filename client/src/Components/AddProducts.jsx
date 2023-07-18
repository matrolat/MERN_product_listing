import React,{useState,Fragment} from 'react'

import { FormGroup, FormControl, InputLabel, Input, Typography,Button,iconButtonClasses,Icon,styled } from '@mui/material';
import { addproducts } from '../Service/api';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useNavigate } from "react-router-dom";
const FormGrp = styled(FormGroup)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        minHeight:"100vh"
    }
}));

export default function AddProducts() {
    const navigate = useNavigate();

    const Default = {
        title:'',
        price:'',
        description:'',
        imageUrl:''
    }
    const [prod,SetProd] = useState(Default)
    const [imageUrl,SetImageUrl] = useState("")

    const handleChange =(e)=>{
        SetProd({...prod,[e.target.name]:e.target.value});
      
        console.log(prod);
    }
    const Submit = async()=>{
        // SetImageUrl(e.target.files[0].name)
        console.log(prod);
        await addproducts(prod);
        navigate("/");

    }
    function onChange(e){
        console.log(e.target.files[0])
        SetImageUrl(e.target.files[0].name)
        SetProd({...prod,['imageUrl']:e.target.files[0]});
    }
    return (
        <div style={{background:"white",textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>

            <FormGrp style={{ minWidth: "40%", display: "flex", justifyContent: 'space-around',minHeight:'80vh',margin:20 }}>
                <Typography variant='h4'>Add Product</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name='title' onChange={handleChange}/>
                </FormControl>
                
                <FormControl>
                    <InputLabel htmlFor="my-input">Price</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name='price' onChange={handleChange} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Description</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name='description' onChange={handleChange}/>
                </FormControl>


                <Fragment>
                    Upload Image
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
            {imageUrl}
        </label>
      </Fragment>

                <FormControl>
                   <Button variant='contained' onClick={Submit}>Add Product</Button>
                   
                </FormControl>
            </FormGrp>

        </div>
    )
}
