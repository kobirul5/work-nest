import Banner from "./Banner";
import Service from "./Service/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-14">
                <Service></Service>
            </section>
        </div>
    );
};

export default Home;