import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center gap-6">
            <Link to={'/buttons'}>
                <button className="px-6 py-2 rounded-md text-white bg-blue-500">Buttons</button>
            </Link>
            <Link to={'/aurora'}>
                <button className="px-6 py-2 rounded-md text-white bg-blue-500">Aurora</button>
            </Link>
            {/* <BoxAnimation></BoxAnimation>
            <DarkMode></DarkMode> */}
        </div>
    );
};

export default Home;

