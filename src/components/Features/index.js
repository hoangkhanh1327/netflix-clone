import { GetStartedForm } from '../Forms';

const Features = () => {
    return (
        <div className="flex flex-col w-full border-b-8 border-solid border-gray-600 text-center px-40 py-40">
            <h1 className="text-white max-w-screen-sm text-4xl sm:text-5xl font-semibold m-auto">
                Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-white max-w-screen-sm text-lg sm:text-2xl font-normal mx-auto my-4">
                Watch anywhere. Cancel anytime.
            </h2>
            <GetStartedForm />
        </div>
    );
};
export default Features;
