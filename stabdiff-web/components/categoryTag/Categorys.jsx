import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const cats = [
  { key: "title", value: "Title" },
  { key: "second", value: "Second" },
  { key: "thrid", value: "Thrid" }
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
            <ToggleButton key={i} value={element.key}>
              {element.value}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  );
}
