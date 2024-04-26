import DarkMode from "./DarkMode/DarkMode";
import BoxAnimation from "./Framer/BoxAnimation";


const Home = () => {
    return (
        <div className="h-[100vh]">
            <BoxAnimation></BoxAnimation>
            <DarkMode></DarkMode>
        </div>
    );
};

export default Home;

