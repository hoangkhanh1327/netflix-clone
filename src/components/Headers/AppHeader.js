import { Link } from 'react-router-dom';

// Logo
import logo from '../../assets/images/logos/logo.svg';

// Components
import Profile from '../Profiles';
import Banner from '../Banner';
import Search from '../SearchBar';

const AppHeader = ({
    category = 'series',
    user,
    setCategory,
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <header className="flex flex-col bg-none md:bg-home-joker bg-left-top bg-no-repeat bg-cover">
            <div className="flex justify-between items-center mx-8 md:mx-14 h-24">
                <div className="flex items-center">
                    <Link to="/" className="flex">
                        <img
                            src={logo}
                            alt="Netflix"
                            className="h-8 w-28 xl:h-11 xl:w-40 mr-10"
                        />
                    </Link>
                    <p
                        className={`text-white no-underline mr-7.5 cursor-pointer hover:font-bold last-of-type:mr-0 ${
                            category === 'series' ? ' font-bold' : 'font-normal'
                        }`}
                        onClick={() => setCategory('series')}
                    >
                        Series
                    </p>
                    <p
                        className={`text-white no-underline mr-7.5 cursor-pointer hover:font-bold last-of-type:mr-0 ${
                            category === 'films' ? ' font-bold' : 'font-normal'
                        }`}
                        onClick={() => setCategory('films')}
                    >
                        Films
                    </p>
                </div>
                <div className="flex items-center">
                    <Search
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <Profile user={user} />
                </div>
            </div>
            <Banner />
        </header>
    );
};

export default AppHeader;
