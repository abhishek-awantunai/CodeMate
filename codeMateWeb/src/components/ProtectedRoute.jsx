import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const storedUser = localStorage.getItem('user');

    if (!user && !storedUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute; 