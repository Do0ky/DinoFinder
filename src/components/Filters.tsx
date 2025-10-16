import { Dinosaur } from "../pages/Home";
import { useState } from "react";

interface FiltersProps {
  allDinos: Dinosaur[];
  onFilterChange: (filters: Record<string, string>) => void;
}

function Filters({ allDinos, onFilterChange }: FiltersProps) {
    type FilterKey = "period" | "location" | "diet" | "family" | "epoch" | "formation";
    
    const filterLabels: Record <FilterKey, string> = {
        period: "Any geologic period",
        location: "Any discovery country",
        diet: "Any diet",
        family: "Any dinosaur group",
        epoch: "Any epoch",
        formation: "Any geological formation"
    };

    const [filters, setFilters] = useState<Record<FilterKey, string>>({
    location: "",
    diet: "",
    family: "",
    period: "",
    epoch: "",
    formation: ""
    });

    const handleChange = (key: FilterKey, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
    };

    return (
    <div className="Filter-bar">
        {(Object.keys(filters) as FilterKey[]).map((key) => (
        <select
            key={key}
            value={filters[key]}
            onChange={(e) => handleChange(key, e.target.value)}
        >
            <option value="">{filterLabels[key]}</option>

            {[...new Set(allDinos.map((d) => d[key]).filter(Boolean))].map((val) => (
            <option key={val} value={val}>{val}</option>
            ))}
        </select>
        ))}
    </div>
    );
}

export default Filters;