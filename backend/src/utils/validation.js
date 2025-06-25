const validateSignUpData = (obj) => {
    const { firstName, lastName, email, age, gender, password, phoneNumber, address, bio, profilePicture } = obj;
    const userData = {
        firstName, 
        lastName, 
        email, 
        age, 
        gender, 
        password, 
        phoneNumber, 
        address, 
        bio, 
        profilePicture
    }

    if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
        throw new Error('First name is required and must be a string.');
    }
    if (!lastName || typeof lastName !== 'string' || lastName.trim() === '') {
        throw new Error('Last name is required and must be a string.');
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Valid email is required.');
    }
    if (!age || typeof age !== 'number' || age < 18 || age > 100) {
        throw new Error('Age must be a number between 18 and 100.');
    }   

    return userData;
}

const validateEditProfileData = (obj) => {
    const allowedFields = ['firstName', 'lastName', 'age', 'gender', 'bio', 'phoneNumber', 'address', 'profilePicture'];

    const isEditAllowed =Object.keys(obj).every(field => allowedFields.includes(field));

    if (!isEditAllowed) {
        throw new Error(`Invalid fields in the request. Only ${allowedFields.join(', ')} can be edited.`);
    }

    return true;
}

module.exports = {
    validateSignUpData,
    validateEditProfileData,
};