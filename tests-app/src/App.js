import React, { useState } from "react";
import InputText from "./components/InputText";

export default function App() {
  const [value, setValue] = useState("");

  return <InputText value={value} handleChange={setValue} />;
}
