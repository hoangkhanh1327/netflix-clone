import { memo, useContext } from 'react';
import FirebaseContext from '../../contexts/FirebaseContext';

const Profile = ({ user }) => {
    const { firebase } = useContext(FirebaseContext);
    return user ? (
        <div className="relative flex items-center ml-5 group">
            <button className="border-0 w-8 h-8 cursor-pointer">
                <img
                    src={require(`../../assets/images/users/${user?.photoURL ? user.photoURL : '3'}.png`)}
                    alt="user avatar"
                />
            </button>
            <div className="hidden group-hover:flex bg-black absolute px-2.5 py-5 w-40 rounded top-8 right-2.5 flex-col">
                <div className="flex items-center mb-4 justify-between">
                    <button className="border-0 w-8 h-8 cursor-pointer">
                        <img
                            src={require(`../../assets/images/users/${user?.photoURL ? user.photoURL : '3'}.png`)}
                            alt="user avatar"
                        />
                    </button>
                    <p className="text-white">{user?.displayName}</p>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <p
                        className="text-white no-underline hover:font-bold cursor-pointer mt-2 mx-auto"
                        onClick={() => firebase.auth().signOut()}
                    >
                        Sign Out
                    </p>
                </div>
            </div>
        </div>
    ) : null;
};

export default memo(Profile);
