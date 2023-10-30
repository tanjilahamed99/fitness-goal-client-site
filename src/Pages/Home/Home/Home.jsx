import Banner from "../../../shared/Banner/Banner";
import Marque from "../Marque/Marque";
import Service from "../service/Service";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Marque></Marque>
            <Service></Service>
        </div>
    );
};

export default Home;