import arrowIcon from '../../assets/images/icons/chevron-right.png';

const GetStartedForm = () => {
    return (
        <div className="flex flex-col justify-center h-full mt-5 flex-wrap lg:items-center lg:flex-row">
            <p className="text-base leading-5 sm:text-lg sm:leading-none text-white text-center my-4">
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div className="basis-full h-0"></div>
            <input
                className="max-w-md w-full border-none p-2.5 h-17.5 box-border"
                type="text"
                placeholder="Email Address"
            />
            <button className="flex items-center h-17.5 bg-red-700 hover:bg-red-600 capitalize text-white text-2xl border-none cursor-pointer py-0 px-8">
                Get Started
                <img
                    src={arrowIcon}
                    alt="try now"
                    className="ml-3 brightness-0 invert w-4 lg:w-6"
                />
            </button>
        </div>
    );
};

export default GetStartedForm;
