import { useState, useEffect } from "react";

function TypeWritter({ text, delay }) {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const typeCharacter = (char) => {
    setDisplayedText((prevText) => [
      ...prevText,
      char === '\n' ? <br key={currentIdx} /> : char,
    ]);
  };

  useEffect(() => {
    if (currentIdx < text.length) {
      const timeout = setTimeout(() => {
        typeCharacter(text[currentIdx]);
        setCurrentIdx((prevIdx) => prevIdx + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIdx, delay, text]);

  return <p>{displayedText}</p>;
}

export default TypeWritter;