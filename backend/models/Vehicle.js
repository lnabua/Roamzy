import mongoose, { mongo } from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;