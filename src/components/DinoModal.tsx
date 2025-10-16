import { Dinosaur } from "../App";
import './DinoModal.css';

interface DinoModalProps {
  dino: Dinosaur;
  onClose: () => void;
}

function DinoModal( { dino, onClose }: DinoModalProps) {
    
    const labelMap: Record <keyof Dinosaur, string> = {
        name: "Name",
        family: "Group",
        period: "Period",
        epoch: "Epoch",
        age_mya: "Age",
        diet: "Diet",
        formation: "Geological Formation",
        location: "Discovery Location",
        length_m: "Length"
    };

    const periodColors: Record<string, string> = {
      Triassic: "badge-bg-triassic-md",
      Jurassic: "badge-bg-jurassic-md",
      Cretaceous: "badge-bg-cretaceous-md"
    };

    const dietEmojis: Record<string, string> = {
      Carnivore: "🥩",
      Herbivore: "🌿",
      Piscivore: "🐟",
      Omnivore: "🐛"
    };


  return (
    <div className="Modal-overlay" onClick={onClose}>

      <div className="Modal-content" onClick={ (e) => e.stopPropagation()}>

        <button className="Modal-close" onClick={onClose}>✖</button>

        <h2>{dino.name}</h2>
        
        <h3>🧬 Classifications</h3>
          <ul>
            {["family", "diet"].map((key) => {
              const typedKey = key as keyof Dinosaur;
              const label = labelMap[typedKey];
              let value = dino[typedKey] ?? "—";

              if (typedKey === "diet" && typeof value === "string") {
                const emoji = dietEmojis[value] ?? "";
                value = `${emoji} ${value}`;
              }

              return (
                <li key={key}>
                  <strong>{label}:</strong> {value}
                </li>
              );
            })}

          </ul>

        <h3>⏳ Time</h3>
          <ul>
            <li>
              <strong>{labelMap.period}:</strong>{" "}
              <span className={`Modal-periodBadge ${periodColors[dino.period] || "badge-bg-default-md"}`}>
                {dino.period}
              </span>
            </li>
            <li>
              <strong>{labelMap.epoch}:</strong> {dino.epoch ?? "—"}
            </li>
          </ul>

        <h3>🗺️ Discovery</h3>
          <ul>
            {["location", "formation"].map((key) => {
              const typedKey = key as keyof Dinosaur;
              const label = labelMap[typedKey];
              const value = dino[typedKey] ?? "—";
              return (
                <li key={key}>
                  <strong>{label}:</strong> {value}
                </li>
              );
            })}
          </ul>

        {/* Metrics Section */}
        <h3>📏 Metrics</h3>
          <ul>
            {["age_mya", "length_m"].map((key) => {
              const typedKey = key as keyof Dinosaur;
              const label = labelMap[typedKey];
              const rawValue = dino[typedKey];
              const value =
                typedKey === "age_mya" && rawValue !== null
                  ? `-${rawValue} Mya`
                  : typedKey === "length_m" && rawValue !== null
                  ? `${rawValue} m`
                  : rawValue ?? "—";

                  return (
                      <li key={key}>
                      <strong>{label}:</strong> {value}
                      </li>
                  );
              })}
          </ul>

      </div>

    </div>
  );
}

export default DinoModal;