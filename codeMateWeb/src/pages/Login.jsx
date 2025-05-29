import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest, signupRequest } from '../store/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.auth);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        gender: 'male',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(loginRequest({
                email: formData.email,
                password: formData.password
            }));
        } else {
            dispatch(signupRequest(formData));
        }
    };

    useEffect(() => {
        // Redirect to feed page if user is already logged in
        if (user || localStorage.getItem('token')) {
            navigate('/feed', { replace: true });
        }
    }, [user, navigate]);

    // If user is already logged in, don't render the login form
    if (user || localStorage.getItem('token')) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                        CodeMate
                    </h1>
                    <p className="text-gray-500 mt-2">
                        {isLogin ? "Welcome back!" : "Create your account"}
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="input input-bordered w-full"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="input input-bordered w-full"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    className="input input-bordered w-full"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                    min="18"
                                />
                            </div>

                            <div className="form-control">
                                <select
                                    name="gender"
                                    className="select select-bordered w-full"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </>
                    )}

                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-gradient-to-r from-pink-500 to-orange-500 border-none hover:from-pink-600 hover:to-orange-600 text-white"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            isLogin ? "Login" : "Sign Up"
                        )}
                    </button>
                </form>

                {/* Toggle between Login and Sign Up */}
                <div className="text-center mt-6">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-pink-500 hover:text-orange-500 transition-colors"
                        disabled={loading}
                    >
                        {isLogin
                            ? "Don't have an account? Sign Up"
                            : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
