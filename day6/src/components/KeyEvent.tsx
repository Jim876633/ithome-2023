import React, { useState } from "react";

function KeyEvent() {
  const [text, setText] = useState("");
  const [keyEvent, setKeyEvent] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyEvent((prev) => prev + `Key Down: ${e.key}`);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyEvent((prev) => prev + `Key Up: ${e.key}`);
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        data-testid='input'
      />
      <p data-testid='key-event'>{keyEvent}</p>
    </div>
  );
}

export default KeyEvent;
