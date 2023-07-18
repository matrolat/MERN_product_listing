import axios from 'axios';



const URL ="https://mern-product-listing.onrender.com";
export const addproducts = async (data)=>{

    const formdata = new FormData();
    formdata.append('title',data.title);
    formdata.append('price',data.price);
    formdata.append('description',data.description);
    formdata.append('imageUrl',data.imageUrl);
    console.log("form:")
    console.log(formdata);
    try{
       return await axios.post(`${URL}/addproducts`,formdata,{
        headers: {
            "Content-Type": "multipart/form-data"
       }}
     
       )
    }
    catch(error){
        console.log(" Error in Add Prod API : "+error);
    }
}
export const updateProduct = async (data,id)=>{
    // const URL ="http://localhost:8000";

    console.log("data");
    console.log(data);
    const formdata = new FormData();
    formdata.append('title',data.title);
    formdata.append('price',data.price);
    formdata.append('description',data.description);
    formdata.append('imageUrl',data.imageUrl);
    try{
       return await axios.post(`${URL}/updateproducts/${id}`,formdata,{
        headers: {
            "Content-Type": "multipart/form-data"
       }}
     
       )
    }
    catch(error){
        console.log(" Error in update Prod API : "+error);
    }
}
export const deleteProduct = async (id)=>{
    // const URL ="http://localhost:8000";
    try{
       return await axios.post(`${URL}/deleteproducts/${id}`,{
        headers: {
            "Content-Type": "multipart/form-data"
       }}
     
       )
    }
    catch(error){
        console.log(" Error in update Prod API : "+error);
    }
}
export const getProductById = async (id)=>{
    try{
        console.log("success");
        return await axios.get(`https://mern-product-listing.onrender.com/getproduct/${id}`);
    }
    catch(error){
         console.log("fail");
         console.log(" Error in addProduct API : "+error);
     }
}

export const getProducts = async ()=>{
    // const URL ="http://localhost:4000";

    try{
       return await axios.get(`https://mern-product-listing.onrender.com/products`);
    }
    catch(error){
        console.log(" Error in addProduct API : "+error);
    }
}