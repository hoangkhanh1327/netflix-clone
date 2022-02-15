import { useContext, useEffect, useState } from 'react';
import FeatureContext from '../../contexts/FeatureContext';
import closeIcon from '../../assets/images/icons/close.png';
import Player from '../Player';

const Feature = ({ category }) => {
    const { showFeature, itemFeature, setShowFeature } =
        useContext(FeatureContext);
    const [bg, setBg] = useState();

    useEffect(() => {
        if (itemFeature && category) {
            const bgImg = require(`../../assets/images/${category}/${itemFeature?.genre}/${itemFeature?.slug}/large.jpg`);
            setBg(bgImg);
        }
    }, [itemFeature, category]);

    return showFeature ? (
        <div
            className="flex flex-row bg-auto lg:bg-contain relative bg-no-repeat bg-right bg-black"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="m-7.5 max-w-none lg:m-14 lg:max-w-lg leading-normal">
                <p className="text-2xl text-profile-bold font-bold mt-0 mb-4 mx-14">
                    {itemFeature?.title}
                </p>
                <p className="text-lg text-white m-0 font-bold leading-5">
                    {itemFeature?.description}
                </p>

                {/* Close Btn */}
                <button
                    className="text-white absolute right-5 top-5 cursor-pointer bg-transparent border-none"
                    onClick={() => setShowFeature(false)}
                >
                    <img src={closeIcon} alt="close" />
                </button>

                {/* Film Meta */}
                <div className="flex flex-row my-7.5 mx-0 items-center">
                    <div
                        className={`w-6 h-6 p-1 text-center text-white font-bold text-shadow mr-2.5 text-xs rounded-full ${
                            itemFeature.maturity >= 15
                                ? 'bg-red-500'
                                : 'bg-green-500'
                        }`}
                    >
                        {itemFeature.maturity < 12
                            ? 'PG'
                            : itemFeature.maturity}
                    </div>
                    <p className="text-2xl text-profile-bold font-bold box-content">
                        {itemFeature.genre.charAt(0).toUpperCase() +
                            itemFeature.genre.slice(1)}
                    </p>
                </div>
                
                {/* Player */}
                <Player />
            </div>
        </div>
    ) : null;
};

export default Feature;
