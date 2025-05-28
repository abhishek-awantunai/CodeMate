const mongoose = require('mongoose');
const { Schema } = mongoose;

const connectionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    connectionId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['interested', 'accepted', 'rejected', 'ignored'],
    },
}, { timestamps: true });

connectionSchema.index({ userId: 1, connectionId: 1 }, { unique: true });

connectionSchema.pre('save', async function (next) {
    if (this.isNew) {
        if (this.userId.toString() === this.connectionId.toString()) {
            throw new Error('You cannot connect with yourself');
        }

        const existingConnection = await this.constructor.findOne({
            $or: [
                { userId: this.userId, connectionId: this.connectionId },
                { userId: this.connectionId, connectionId: this.userId }
            ]
        });

        if (existingConnection) {
            throw new Error('Connection already exists between these users');
        }
    }
    next();
}); 

const Connection = mongoose.model('Connection', connectionSchema);
module.exports = Connection;
