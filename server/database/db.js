import mongoose from 'mongoose';

const connection =()=>{
    // mongoose.connect("mongodb+srv://sameerswankar96:sourabh123@ezshop.rcu2wl5.mongodb.net/",{}).then(
    mongoose.connect("mongodb://0.0.0.0:27017/Mern_product",{}).then(
        (data)=>{
            console.log(`mongodb connected with server ${data.connection.host}`)
        }
    ).catch(
    
        (err)=>{
            console.log(err);
        }
    )
}
export default connection;