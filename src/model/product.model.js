import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = mongoose.Schema(
    {
        id: Number,
        image: String,
        name: String,
        description: String,
        price: Number,
        color: String,
    },
    { collection: 'shoes' },
);

const shoes = mongoose.model('shoes', productSchema);

export default shoes;
