import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb+srv://anhvu6288:oRd1S2UX0bc6iYOn@cluster0.eigpmsx.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, { 
      useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

export default connectDB;