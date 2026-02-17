import { useState } from "react";

export default function LivePreviewForm() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Live Preview</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <h3>{text}</h3>
    </div>
  );
}
