import './Dinoletter.css';
import { useState } from "react";

function Dinoletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Fake network delay
    setTimeout(() => {
        setStatus("success");
        setEmail("");
    }, 1500);
    };

    return (
    <div className="DinoLetter-page">
        <h1>DinoLetter</h1>

        <p className="DinoLetter-text">
        Join our expedition! Subscribe to the <strong>DinoLetter</strong> — your monthly peek into the prehistoric world!
        <br /> The <strong>DinoLetter</strong> delivers fresh fossil finds, behind-the-scenes stories, and app updates straight to your inbox.
        <br /> No spam — just fossils.
        </p>

        {status === "success" ? (
            <div className="DinoLetter-success">
                <p>Thanks, you’re now part of the team!</p>
                <p>We’ll send you fossil updates soon. 🦴</p>
            </div>
            ) : (
        
            <form className="DinoLetter-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ty Rex"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tinyarms.bigdreams@cretaceous.net"
                    required
                    disabled={status === "loading"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Digging..." : "Subscribe"}
                </button>
            </form>
            )}

            <p className="DinoLetter-note">Stay curious. Stay Cretaceous.</p>
            <p className="DinoLetter-disclaimer">
                You can unsubscribe anytime. We’ll never share your info.
            </p>
    </div>
    );
}

export default Dinoletter;