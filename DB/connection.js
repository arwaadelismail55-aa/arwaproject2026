import mongoose from 'mongoose'
const connectDB  = async ()=>{
    
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(res=>console.log(`DB Connected successfully on .........`))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
}
//mongodb+srv://<db_username>:nCcmorSSGxsStF7R@cluster0.2skpdug.mongodb.net/
//mongodb+srv://arwaadel:01002367427@clustero.2pxcoag.mongodb.net
export default connectDB;