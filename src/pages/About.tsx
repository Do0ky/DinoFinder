import './About.css';

function About() {
  return (
    <div className="About-page">
        <h1>About Dino Finder</h1>

            <p>
                <strong>Dino Finder</strong> is an interactive web app designed to help learners, educators, and curious minds explore the incredible diversity of dinosaurs. Whether you're a budding paleontologist, a museum visitor, or just someone who loves prehistoric life, this app invites you to dig deeper into the fossil record.
            </p>

            <p>
                Built with <strong>React</strong> and <strong>TypeScript</strong>, Dino Finder offers a searchable, filterable gallery of dinosaur data—organized by period, diet, location, and more. Click on any dinosaur to open a detailed modal view with scientific context and specimen facts.
            </p>

            <p>
                The goal? To make paleontology accessible, engaging, and visually delightful. Dino Finder is part of a broader mission to connect science, design, and storytelling—bringing extinct worlds to life through thoughtful digital tools.
            </p>

        <h2>Data & Sources</h2>
            <p>
                The dinosaur data is compiled from publicly available paleontological records and educational resources. While simplified for clarity, every effort has been made to preserve scientific accuracy.
            </p>

        <h2>Features</h2>
            <ul>
                <li>Search by name, family, diet, location, and more</li>
                <li>Filter by geologic period, epoch, or formation</li>
                <li>Sort by name, age, or length</li>
                <li>Click any card to view detailed specimen info</li>
                <li>Responsive design for desktop and mobile</li>
            </ul>

        <h2>Behind the Scenes</h2>
            <p>
            Dino Finder is built with <strong>React</strong> and <strong>TypeScript</strong>, using modular architecture and semantic components for clarity and scale. The dinosaur data is rendered dynamically from a JSON file, with type-safe interfaces ensuring consistency across views.
            </p>
            <p>
            The design blends scientific credibility with creative warmth—color-coded epochs and periods, modal overlays, and clean typography make the experience both informative and inviting. Accessibility is a core priority, with keyboard navigation, screen reader support, and clear visual hierarchy.
            </p>
            <p>
            Every component is built with maintainability in mind: separation of concerns, reusable logic, and scalable naming conventions. The app is structured for future expansion, including routing, persistent state, and educational features like quizzes and field notes.
            </p>

        <h2>Created By</h2>
            <p>
                Dino Finder was created by <strong>Claire Peyre</strong>, a paleontologist and front-end developer passionate about science communication, accessibility, and creative coding. This project is part of an ongoing effort to build digital tools that make science more discoverable and delightful.
            </p>

            <p>
                Want to collaborate or contribute? Reach out or explore the <a href="https://github.com/Do0ky/DinoFinder" target="_blank" rel="noopener noreferrer">GitHub repo</a>.
            </p>
    </div>
  );
}

export default About;