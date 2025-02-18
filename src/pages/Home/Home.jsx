import Blog from "../Blogs/Blogs/Blog";
import Banner from "./Banner";
import BenefitsSection from "./Benefits/BenefitsSection";
import FAQSection from "./FAQ/FAQSection";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import SecuritySection from "./SecurityMeasures/SecurityMeasures";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-14 space-y-20 px-4 container mx-auto">
                <Service></Service>
                <Testimonial></Testimonial>
                <Blog></Blog>
                <MeetOurTeam></MeetOurTeam>
                <FAQSection></FAQSection>
            </section>
                <SecuritySection/>
                <BenefitsSection/>

        </div>
    );
};

export default Home;