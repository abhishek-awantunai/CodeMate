import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './pages/Login';
import Feed from './pages/Feed';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Help from './pages/Help';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Chat from './pages/Chat';
import Connections from './pages/Connections';
import Playground from './pages/Playground';
import Memo from './pages/Memo';
import Resume from './pages/Resume';
import Algo from './pages/Algo';
import Akshay from './pages/Akshay';
import Udemy from './pages/Udemy';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/feed" replace />} />
                <Route
                    path="/feed"
                    element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/chat" element={<Chat />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/help" element={<Help />} />
                <Route path="/algo" element={<Algo />} />
                <Route path="/askhay" element={<Akshay />} />
                <Route path="/udemy" element={<Udemy />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Provider>
    );
}

export default App;
