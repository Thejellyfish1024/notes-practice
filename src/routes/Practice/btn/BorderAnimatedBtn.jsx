import './btn.css';

const BorderAnimatedBtn = () => {
    return (
        <a
            href={
                "https://drive.google.com/file/d/19jeOu6aglOiyjIJkZbXcAshLzXxIx8EA/view?usp=drive_link"
            }
            // target="_blank"
            download
            className="button  px-4 py-2 md:px-6 md:py-3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
        </a>
    );
};

export default BorderAnimatedBtn;