import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {

    // State for hover effect on logo
    const [hovered, setHovered] = useState(false);
    // State for fade-out effect on logo click
    const [fadeOut, setFadeOut] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        setFadeOut(true);
        setTimeout(() => {
        navigate("/home");
        }, 600); // matching animation duration (0.6)
    };

    return (
        <div
            className={`Landing-page ${fadeOut ? "fade-out" : ""}`}
            style={{
            backgroundImage: 'url("/rocky-texture.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1b4b3dff',
            }}
        >
            <div
            className="Landing-center"
            onMouseEnter={ () => setHovered(true)}
            onMouseLeave={ () => setHovered(false)}
            onClick={handleClick}
            >
            {!hovered ? (
                <span className="Landing-prompt">Step into the Mesozoic.</span>
            ) : (
                <img
                src="/dinofinder_logo.png"
                alt="Dino Finder Logo"
                className="Landing-logo"
                />
            )}
            </div>
            
        </div>
    );
}

export default Landing;