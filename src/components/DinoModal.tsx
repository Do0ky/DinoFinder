import { Dinosaur } from "../App";

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
        formation: "Formation",
        location: "Discovery Location",
        length_m: "Length"
    };

  return (
    <div className="Modal-overlay" onClick={onClose}>

      <div className="Modal-content" onClick={ (e) => e.stopPropagation()}>

        <button className="Modal-close" onClick={onClose}>✖</button>

        <h2>{dino.name}</h2>

        <ul>
            {Object.entries(dino).map(([key, value]) => {
                const typedKey = key as keyof Dinosaur; 
                if (typedKey === "name") return null; // Skipping name (already in h2)
                const label = labelMap[typedKey] ?? key; // Fallback if no label found

                // Formatting values of age and length for better readability
                const displayValue =
                    typedKey === "age_mya" && value !== null
                    ? `-${value} Mya`
                    : typedKey === "length_m" && value !== null
                    ? `${value} m`
                    : value ?? "—";

                return (
                    <li key={key}>
                    <strong>{label}:</strong> {displayValue}
                    </li>
                );
            })}
        </ul>

      </div>

    </div>
  );
}

export default DinoModal;