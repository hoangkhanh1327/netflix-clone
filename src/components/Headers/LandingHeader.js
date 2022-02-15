import { Link } from 'react-router-dom';

// Logo
import logo from '../../assets/images/logos/logo.svg';

const LandingHeader = ({ children }) => {
    return (
        <header className="flex flex-col bg-home-bg-mobile md:bg-home-bg bg-left-top bg-no-repeat bg-cover">
            <div className="flex justify-between items-center mx-8 md:mx-14 h-24">
                <Link to="/" className="flex">
                    <img
                        src={logo}
                        alt="Netflix"
                        className="h-8 w-28 xl:h-11 xl:w-40 mr-10"
                    />
                </Link>
                <Link
                    to="/login"
                    className="block bg-primary bg-red-700 hover:bg-red-600 w-22 h-fit text-white border-none text-base rounded-sm px-4 py-2 cursor-pointer no-underline box-border"
                >
                    Sign In
                </Link>
            </div>
            {children}
        </header>
    );
};

export default LandingHeader;
