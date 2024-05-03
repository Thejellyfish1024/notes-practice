import ShinyButton from "../routes/Practice/btn/ShinyButton";
import BorderAnimatedBtn from "../routes/Practice/btn/BorderAnimatedBtn";
import HoverEffect from "../routes/Practice/btn/HoverEffect";
import SkillBtn from "../routes/Practice/btn/SkillBtn";

const Buttons = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center gap-6">
            <div className=" relative overflow-hidden w-fit py-2">
                <BorderAnimatedBtn></BorderAnimatedBtn>
            </div>
            <div className="bg-black px-6 py-3 rounded-md">
                <ShinyButton></ShinyButton>
            </div>
            <div className=" px-6 py-3 rounded-md">
                <HoverEffect></HoverEffect>
            </div>
            <div className="bg-black px-6 py-3 rounded-md">
                <SkillBtn></SkillBtn>
                <SkillBtn></SkillBtn>
                <SkillBtn></SkillBtn>
            </div>
        </div>
    );
};

export default Buttons;