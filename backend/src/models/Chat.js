const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    senderId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
    } 
}, {
    timestamps: true
});

const chatSchema = new Schema({
    participants: [{
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    }],
    messages: [messageSchema],
}, {
    timestamps: true
});

const Chat = mongoose.model('chat', chatSchema);
module.exports = Chat;