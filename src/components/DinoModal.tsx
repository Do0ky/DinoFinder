import { Dinosaur } from "../pages/Home";
import './DinoModal.css';
import ReactDOM from 'react-dom'; // for creating portals
import Globe from "react-globe.gl"; // for 3D globe
import { useRef, useEffect } from "react";

interface DinoModalProps {
  dino: Dinosaur;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root');

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
        length_m: "Length",
        latitude: "Latitude",
        longitude: "Longitude"
    };
    //conditional coloration by period
    const periodColors: Record<string, string> = {
      Triassic: "badge-bg-triassic-md",
      Jurassic: "badge-bg-jurassic-md",
      Cretaceous: "badge-bg-cretaceous-md"
    };
    //conditional rendering by diet
    const dietEmojis: Record<string, string> = {
      Carnivore: "🥩",
      Herbivore: "🌿",
      Piscivore: "🐟",
      Omnivore: "🐛"
    };
    
    const globeRef = useRef<any>(null);
    useEffect(() => {
      if (globeRef.current && dino.latitude && dino.longitude) {
        globeRef.current.pointOfView({
          lat: dino.latitude,
          lng: dino.longitude,
          altitude: 1.5
        }, 1000);
      }
    }, [dino]);

  return modalRoot ? ReactDOM.createPortal(
    <div className="Modal-overlay" onClick={onClose}>

      <div className="Modal-content" onClick={ (e) => e.stopPropagation()}>

        <button className="Modal-close" onClick={onClose}>✖</button>

        <div className="Modal-body">

          <div className="Modal-text">
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

          <div className="Modal-globeContainer">
            <Globe
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              pointsData={[{ lat: dino.latitude, lng: dino.longitude }]}
              pointAltitude={0.05}
              pointColor={() => 'red'}
              onGlobeClick={() => {
                globeRef.current.controls().autoRotate = true;
                globeRef.current.controls().autoRotateSpeed = 2;
              }}
            />
          </div>
            
        </div>

      </div>
    </div>,
    modalRoot
  )
  : null;
}

export default DinoModal;