import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const cats = [
  { key: "car", value: "car" },
  { key: "luxury", value: "luxury" },
  { key: "Personal", value: "Personal" },
  { key: "Minivan", value: "Minivan" },
  { key: "Mid-size", value: "Mid-size" },
  { key: "Sport", value: "Sport" }
];

export default function Categorys() {
  const [alignment, setAlignment] = React.useState("title");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div>
        <input type="hidden" name="categoryName" value={alignment} />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform">
          {cats.map((element, i) => (
            <ToggleButton type="submit" key={i} value={element.key}>
              {element.value}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
}
