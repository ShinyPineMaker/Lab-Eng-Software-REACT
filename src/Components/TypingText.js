import React, { useState, useEffect } from "react";

const TypingText = () => {
    const text = "Conheça a Fatec";
    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const typeText = () => {
        if (index < text.length) {
          setTypedText((prev) => prev + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIndex(0);
          setTypedText("");
        }
      };
  
      const intervalId = setInterval(typeText, 100);
      
      return () => clearInterval(intervalId);
    }, [index, text]);
  
    return <div style={{ fontFamily: "monospace", whiteSpace: "nowrap" }}>{typedText}</div>;
  };

export default TypingText;
