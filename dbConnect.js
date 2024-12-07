const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://krisndongo:07mai2003@cluster0.ztutr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');
mongoose.connect(MONGODB_URI, {
dbName: 'Finly',
bufferCommands: false,
});
console.log('Connected to MongoDB');