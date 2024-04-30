import ShinyButton from "../routes/Practice/btn/ShinyButton";
import BorderAnimatedBtn from "../routes/Practice/btn/BorderAnimatedBtn";

const Buttons = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center gap-6">
            <div className=" relative overflow-hidden w-fit py-2">
                <BorderAnimatedBtn></BorderAnimatedBtn>
            </div>
            <div className="bg-black px-6 py-3 rounded-md">
                <ShinyButton></ShinyButton>
            </div>
        </div>
    );
};

export default Buttons;