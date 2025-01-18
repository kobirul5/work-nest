import Banner from "./Banner";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-14 space-y-14 px-4">
                <Service></Service>
                <Testimonial></Testimonial>
            </section>
        </div>
    );
};

export default Home;