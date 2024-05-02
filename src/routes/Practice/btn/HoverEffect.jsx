

const HoverEffect = () => {
    return (
        <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center group">
            <div className="flex items-center justify-center relative overflow-hidden group">
                <img
                    className="w-[300px] h-[200px]"
                    src="https://elements-cover-images-0.imgix.net/70266ea4-4eee-4566-b4c5-2cce1b593bc8?auto=compress%2Cformat&w=433&fit=max&s=7fc2f4946eb6fad72b09c04a22dbd7e6" alt="" />
                {/* overflow gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                {/* title */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            {/* <BsArrowRight></BsArrowRight> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverEffect;