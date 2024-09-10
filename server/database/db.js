import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-lwvfjbd-shard-00-00.5td7xje.mongodb.net:27017,ac-lwvfjbd-shard-00-01.5td7xje.mongodb.net:27017,ac-lwvfjbd-shard-00-02.5td7xje.mongodb.net:27017/?ssl=true&replicaSet=atlas-12jdeu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log(' Database connected successfully ');
    } catch (error) {
        console.log(' Error while connecting to the database ', error);
    }
};

export default Connection;
