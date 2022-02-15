import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './assets/css/app.css';
import useAuth from './hooks/useAuth';
import PrivateRoute from './routes/PrivateRoute';

import LazyLoading from './utils/lazyLoading';

// Pages
const SignInPage = LazyLoading(() => import('./pages/SignInPage'));
const SignUpPage = LazyLoading(() => import('./pages/SignUpPage'));
const BrowsePage = LazyLoading(() => import('./pages/BrowsePage'));

const App = () => {
    const { user } = useAuth();
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute user={user}>
                            <BrowsePage />
                        </PrivateRoute>
                    }
                />
                <Route path="login" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

export default App;
