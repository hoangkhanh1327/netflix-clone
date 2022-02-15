import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../contexts/FirebaseContext';
import Fuse from 'fuse.js';

// Components
import { AppHeader } from '../components/Headers';
import { LandingFooter } from '../components/Footers';
import Loading from '../components/Loading';
import Cards from '../components/Cards';

// Container
import SelectProfile from './SelectProfile';

const BrowseContainer = ({ slides }) => {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (
            slideRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
        <>
            {loading ?? <Loading />}
            <AppHeader
                user={user}
                category={category}
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <Cards slideRows={slideRows} category={category} />
            <LandingFooter />
        </>
    ) : (
        <SelectProfile user={user} setProfile={setProfile} />
    );
};

export default BrowseContainer;
