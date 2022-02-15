import { memo } from 'react';

const Banner = () => {
    return (
        <div className="hidden lg:flex flex-col justify-between mx-8 md:mx-14 pt-37.5 px-0 pb-125 w-1/2">
            <h2 className="text-white text-5xl font-bold leading-normal mb-5 text-shadow">
                Watch Joker Now
            </h2>
            <p className=" text-xl text-white leading-normal m-0 text-shadow">
                {`Forever alone in a crown, failed comedian Arthur Fleck seeks connections as he walks the street of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.`}
            </p>
            <button className="bg-playBtn text-black hover:bg-form-submit hover:text-white shadow-playBtn border-none px-5 py-2.5 text-xs mt-7.5 cursor-pointer max-w-btn w-40 rounded transition-colors ease-linear duration-300">
                Play
            </button>
        </div>
    );
};

export default memo(Banner);
