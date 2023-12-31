import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {

    try {
        await mongoose.connect(<string>process.env.CONNECTION);

        console.log('Connected to MongoDb'); 

    } catch (error) {
        console.log('MongoDB connection error:', error )
    }   
}
