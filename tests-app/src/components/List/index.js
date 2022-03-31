import React, { useState } from "react";

export default function List({ items }) {
  const [list, setList] = useState(items);
  const [value, setValue] = useState("");

  const handleClick = (key) => {
    const newList = list.filter((item, index) => key !== index);
    setList(newList);
  };

  const handleClickAdd = () => {
    if (value.length > 0) {
      setList([...list, value]);
    }
    setValue("");
  };

  const DisplayData = () => {
    if (list !== undefined && list !== []) {
      return (
        <ul data-testid="list-ul-testid">
          {list.map((item, index) => (
            <li key={index}>
              <div>{item}</div>
              <div>
                <button type="submit" onClick={() => handleClick(index)}>
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return <></>;
  };
  return (
    <div data-testid="list-testid">
      <input
        data-testid="list-input-testid"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        data-testid="list-btn-testid"
        type="submit"
        onClick={handleClickAdd}
      >
        add
      </button>
      {DisplayData()}
    </div>
  );
}
