// Components
import Accordion from '../Accordions';
import { GetStartedForm } from '../Forms';

const FAQs = () => {
    return (
        <div className="flex border-b-8 border-solid border-gray-600">
            <div className="container mx-auto max-w-4xl px-17.5 py-11 flex flex-col">
                <h2 className="text-4xl md:text-5xl leading-tight mt-0 mb-2 text-white text-center font-bold">
                    Frequently Asked Questions
                </h2>
                <Accordion />
                <GetStartedForm />
            </div>
        </div>
    );
};

export default FAQs;
