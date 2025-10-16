/* STYLING */
import './Home.css';
/* DATA */
import dinosaurs from "../data/dinosaurs.json";
/* COMPONENTS */
import DinoList from "../components/DinoList";
import Filters from "../components/Filters";
import DinoModal from '../components/DinoModal';
/* REACT */
import { useState } from "react";

// Defining the shape of the Dinosaur object
export interface Dinosaur {
    name: string;
    family: string;
    period: string;
    epoch: string;
    age_mya: number;
    diet: string;
    formation?: string;
    location: string;
    length_m?: number;
    latitude?: number;
    longitude?: number;
}

function Home() {

  const allDinos = dinosaurs as Dinosaur[];

  const [activeFilters, setActiveFilters] = useState<Record<string, string>> ({
    location: "",
    diet: "",
    family: "",
    period: "",
    epoch: "",
    formation: ""
  });

  // State and filter for search bar
  const [searchQuery, setSearchQuery] = useState("");
  // State and toggle for showing/hiding the filter bar
  const [showFilters, setShowFilters] = useState(false);
  // State for selected dinosaur in modal overlay
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null);

  const filteredDinos = allDinos.filter( (dino) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      dino.name.toLowerCase().includes(query) ||
      dino.family.toLowerCase().includes(query) ||
      dino.period.toLowerCase().includes(query) ||
      dino.epoch.toLowerCase().includes(query) ||
      dino.diet.toLowerCase().includes(query) ||
      dino.location.toLowerCase().includes(query) ||
      (dino.formation?.toLowerCase().includes(query) ?? false);
    
    const matchesFilters = Object.entries(activeFilters).every( 
      ([key, value]) => value === "" || dino[key as keyof Dinosaur] === value);
    
    return matchesSearch && matchesFilters;
  });
  

  return (
    <div className="Homepage-wrapper">

        <div className='Search-bar'>
            <input 
                type="text"
                placeholder="Search by name, country, diet..."
                value={searchQuery}
                onChange={ (userInputEvent) => setSearchQuery(userInputEvent.target.value)}
            />
        </div>

        <div className="Filters-wrapper">
            <button className="Toggle-filters" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? "Hide Filters ▲" : "Show Filters ▼"}
            </button>
            {showFilters && (
                <div className="Filter-bar">
                <Filters allDinos={allDinos} onFilterChange={setActiveFilters} />
                </div>
            )}
        </div>

        <div className="Dino-grid">
            <DinoList dinosaurs={filteredDinos} onSelect={setSelectedDino}/>
        </div>

        {selectedDino && (
          <DinoModal dino={selectedDino} onClose={() => setSelectedDino(null)} />
        )}
    </div>
  );
}

export default Home;