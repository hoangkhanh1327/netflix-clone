import LazyLoading from '../utils/lazyLoading';
const HomePage = LazyLoading(() => import('../pages/HomePage'));

const PrivateRoute = ({ user, children }) => {
    //const location = useLocation();

    // if (loading) {
    //     return <p>Checking auth...</p>;
    // }

    if (!user) {
        return <HomePage />;
    }

    return children;
};

export default PrivateRoute;
