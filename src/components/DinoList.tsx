import DinoCard from "./DinoCard";
import { Dinosaur } from "../App";

interface DinoListProps {
  dinosaurs: Dinosaur[];
  onSelect: (dino: Dinosaur) => void;
}

function DinoList( { dinosaurs, onSelect }: DinoListProps) {

  return (
    <div className="Dino-grid">
      
      {dinosaurs.map( (dino) => (
        <div onClick={() => onSelect(dino)} key={dino.name}>
            <DinoCard dino={dino} />
        </div>
      ))}

    </div>
  );

}

export default DinoList;