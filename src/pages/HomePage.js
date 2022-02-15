// Components
import { LandingHeader } from '../components/Headers';
import { LandingFooter } from '../components/Footers';
import FAQs from '../components/FAQs';
import Features from '../components/Features';
import Jumbotron from '../components/Jumbotron';

const HomePage = () => {
    return (
        <>
            <LandingHeader>
                <Features />
            </LandingHeader>
            <Jumbotron />
            <FAQs />
            <LandingFooter />
        </>
    );
};

export default HomePage;
