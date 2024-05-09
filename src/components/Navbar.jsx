import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="w-screen mt-5 flex justify-center items-center gap-6">
        <Link to={'/buttons'}>
            <button className="px-6 py-2 rounded-md text-white bg-blue-500">Buttons</button>
        </Link>
        <Link to={'/aurora'}>
            <button className="px-6 py-2 rounded-md text-white bg-blue-500">Aurora</button>
        </Link>
        <Link to={'/skills'}>
            <button className="px-6 py-2 rounded-md text-white bg-blue-500">Skills</button>
        </Link>
        <Link to={'/products'}>
            <button className="px-6 py-2 rounded-md text-white bg-blue-500">Products</button>
        </Link>
        {/* <BoxAnimation></BoxAnimation>
        <DarkMode></DarkMode> */}
    </div>
    );
};

export default Navbar;