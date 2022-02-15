import { useEffect, useState } from 'react';

import useContent from '../hooks/useContent';
import selectionMap from '../utils/selectionMap';

import BrowseContainer from '../containers/BrowseContainer';

const BrowsePage = () => {
    const { films } = useContent('films');
    const { series } = useContent('series');
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        if (films?.length > 0 && series?.length > 0) {
            const mappedData = selectionMap({ series, films });
            setSlides(mappedData);
        }
    }, [films, series]);

    return <BrowseContainer slides={slides} />;
};

export default BrowsePage;
