import { memo } from 'react';
import logo from '../assets/images/logos/logo.svg';

const SelectProfile = ({ user, setProfile }) => {
    return (
        <>
            <div className="flex justify-between items-center h-28 mx-14">
                <img
                    src={logo}
                    alt="Netflix"
                    className="h-8 w-28 xl:h-12 xl:w-40 mr-10"
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="w-full text-white text-5xl text-center">{`Who's watching?`}</h1>
                <ul className="m-0 p-0 flex flex-row list-none">
                    <li
                        className="w-50 h-50 text-center mr-7.5"
                        onClick={() =>
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            })
                        }
                    >
                        <img
                            src={
                                user.photoURL
                                    ? require(`../assets/images/users/${user.photoURL}.png`)
                                    : require('../assets/images/misc/loading.gif')
                            }
                            alt="Profile"
                            className="border-4 border-solid border-black hover:border-white w-full h-auto cursor-pointer"
                        />
                        <p className="text-profile text-base hover:font-bold hover:text-profile-bold">
                            {user.displayName}
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default memo(SelectProfile);
