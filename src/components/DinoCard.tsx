import { Dinosaur } from "../App";

interface DinoCardProps {
  dino: Dinosaur;
}

function DinoCard({ dino }: DinoCardProps) {

    // Defining background colors based on epoch
    const epochColors: Record<string, string> = {
        "Late Triassic": "bg-triassic",
        "Early Jurassic": "bg-jurassic-e",
        "Late Jurassic": "bg-jurassic-l",
        "Early Cretaceous": "bg-cretaceous-e",
        "Late Cretaceous": "bg-cretaceous-l"
    };
    // Defining badge colors based on period
    const periodColors: Record<string, string> = {
        "Triassic": "badge-bg-triassic",
        "Jurassic": "badge-bg-jurassic",
        "Cretaceous": "badge-bg-cretaceous"
    };

  return (
    <div className={`Dino-card ${epochColors[dino.epoch] || "bg-default"}`}>

        <span className={`Period-badge ${periodColors[dino.period] || "badge-bg-default"}`}>{dino.period}</span>
        
        <h2>{dino.name.split(' ')[0]}</h2>
        <p><strong>Age:</strong> -{dino.age_mya} Mya</p>
        <p><strong>Discovered in:</strong> {dino.location}</p>
        <p><strong>Diet:</strong> {dino.diet}</p>
        <p><strong>Group:</strong> {dino.family}</p>

    </div>
  );
}

export default DinoCard;