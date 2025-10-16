import './About.css';

function About() {
  return (
    <div className="About-page">
        <h1>About Dino Finder</h1>

            <p>
                <strong>Dino Finder</strong> is an interactive web app designed to help learners, educators, and curious minds explore the incredible diversity of dinosaurs. Whether you're a budding paleontologist, a museum visitor, or just someone who loves prehistoric life, this app invites you to dig deeper into the fossil record.
            </p>

            <p>
                <strong>Dino Finder</strong> offers a searchable, filterable gallery of dinosaur data—organized by period, diet, location, and more. Click on any dinosaur to open a detailed modal view with scientific context, specimen facts and geographic location.
            </p>

            <p>
                <span className="goal">The goal? To make paleontology accessible, engaging, and visually delightful.</span><br /> <strong>Dino Finder</strong> is part of a broader mission to connect science, design, and storytelling—bringing extinct worlds to life through thoughtful digital tools!
            </p>

        <h2>Data & Sources</h2>
            <p>
                The dinosaur data is compiled from publicly available paleontological records and educational resources. While simplified for clarity, every effort has been made to preserve scientific accuracy.
            </p>

            <h2>Behind the Scenes</h2>
                <p>
                Dino Finder is crafted with <em>React</em> and <em>TypeScript</em>, built on a modular foundation so every piece—from the tiniest badge to the largest gallery—fits together like a fossil puzzle. Dinosaur data is drawn dynamically from a JSON collection, with type‑safe interfaces keeping each detail consistent across the app.
                </p>
                <p>
                The design blends <em>scientific rigor</em> with <em>creative warmth</em>: color‑coded badges echo the Triassic, Jurassic, and Cretaceous eras, modal overlays invite deeper exploration, and typography balances clarity with character. Accessibility is baked in from the start, with keyboard navigation, screen reader support, and a clear visual hierarchy so every explorer can join the dig.
                </p>
                <p>
                Under the hood, components are structured for resilience and growth—separation of concerns, reusable logic, and scalable naming conventions ensure the app can evolve. Future layers are already imagined: persistent state, interactive quizzes, and field‑note journals to make <strong>Dino Finder</strong> not just a gallery, but a living learning tool.
                </p>

        <h2>Features</h2>
            <ul>
                <li> Search by name, country, diet, group, and more—find your favorite dino in seconds</li>
                <li>Filter by country, diet, group, geologic period, epoch, or formation—explore by time and place</li>
                <li>Click any card to open a detailed specimen profile, complete with badges and context</li>
                <li>Fully responsive design—whether on desktop dig sites or mobile expeditions</li>
            </ul>

        <h2>Created By</h2>
            <p id="createdBy">
                <strong>Dino Finder</strong> was created by <strong>Claire Peyre</strong>, a paleontologist and front-end developer passionate about science communication, accessibility, and creative coding. This project is part of an ongoing effort to build digital tools that make science more discoverable and delightful.
                < br />
                < br />
                Want to collaborate or contribute? Reach out or explore the <a href="https://github.com/Do0ky/DinoFinder" target="_blank" rel="noopener noreferrer">GitHub repo</a>.
            </p>
    </div>
  );
}

export default About;