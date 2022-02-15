import { useState } from 'react';
import searchIcon from '../../assets/images/icons/search.png';

const Search = ({ searchTerm, setSearchTerm }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="hidden md:flex items-center">
            <button
                className=" cursor-pointer bg-transparent border-none"
                onClick={() => setActive(!active)}
            >
                <img
                    src={searchIcon}
                    alt="Search"
                    className="w-4 brightness-0 invert"
                />
            </button>
            <input
                type="text"
                value={searchTerm}
                placeholder="Search films and series"
                onChange={({ target }) => setSearchTerm(target.value)}
                className={`bg-search-box text-white border border-solid border-white h-7.5 text-sm transition-all duration-500 ${
                    active
                        ? 'ml-2.5 py-0 px-2.5 opacity-100 w-50'
                        : 'ml-0 p-0 opacity-0 w-0'
                }`}
            />
        </div>
    );
};

export default Search;
