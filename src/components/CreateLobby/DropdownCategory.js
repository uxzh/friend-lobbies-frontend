import React from "react";
import { Dropdown } from "@nextui-org/react";
import interest_selection from "../../data/interest_selection.json";

const categories = interest_selection.sort((a, b) =>
  a.interest.localeCompare(b.interest)
);

export default function DropwdownCategory({ selected, setSelected, type }) {
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown id={"category_dropdown"}>
      <Dropdown.Button
        color=""
        css={{
          tt: "capitalize",
          color: "$black",
          backgroundColor: "$white",
          border: "2px solid gray",
        }}
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode={type}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {categories.map((category) => (
          <Dropdown.Item key={category.interest}>
            {category.interest + category.emoji}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
