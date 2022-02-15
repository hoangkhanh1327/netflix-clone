const { Suspense, lazy } = require('react');

const LazyLoading = (component) => {
    const LazyComponent = lazy(component);
    return (props) => (
        <Suspense fallback={<h1>Getting Data</h1>}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

export default LazyLoading;
