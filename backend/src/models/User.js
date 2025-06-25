const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 100,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
    },
    bio: {
        type: String,
        required: true,
        maxlength: 500,
        default: 'I am a default user bio.'
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{10}$/,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    profilePicture: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        },
        default: 'https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.methods.getJWT = async function() {
    const token = jwt.sign({ id: this._id },process.env.JWT_SECRET,{ 
        expiresIn: '1y' 
    });
    return token;
}

userSchema.methods.validatePassword = async function(password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}

const User = mongoose.model('User', userSchema);
module.exports = User;