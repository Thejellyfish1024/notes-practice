import { motion } from "framer-motion";

const BoxAnimation = () => {
    return (
        <div className="h-screen grid items-center w-screen bg-slate-500">
            <div className="grid justify-center grid-cols-4 pt-16 pl-16">
                <div className="border-2 border-black w-fit h-fit">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ x: [100,0], scale: 1 }}
                        transition={{ ease: "easeIn", duration: 3 }}
                        className="w-32 h-32 bg-black"></motion.div>
                </div>
                <div className="w-32 h-32 bg-black"></div>
                <div className="border-2 border-black w-fit p-10">
                    <motion.div
                        animate={{
                            x: [0, 0, 100, 100, 100, -100, -100, -100, 0],
                            y: [0, 100, 100, 0, -100, -100, 0, 100, 0]
                        }}
                        transition={{ duration: 2 }}
                        className="w-32 h-32 bg-black"></motion.div>
                </div>
                <div className="w-32 h-32 bg-black"></div>
            </div>
        </div>
    );
};

export default BoxAnimation;