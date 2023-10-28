import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDb conectada, felicitaciones crack');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbname: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB conectado')
    } catch (error) {
       console.log(error); 
    }
}