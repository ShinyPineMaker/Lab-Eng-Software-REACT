import React, { useState, useEffect } from "react";

const TypingText = () => {
    const [text, setText] = useState("");  // State to hold the current text
    const fullText = "Conheça a Fatec";   // The full text you want to display
    let index = 0;

    /* useEffect(() => {
        const typingInterval = setInterval(() => {
            setText((prevText) => prevText + fullText[index]);  // Add one character at a time
            index += 1;
            
            if (index === fullText.length) {
                clearInterval(typingInterval);  // Stop when the full text is typed
            }
        }, 100);  // Typing speed (100ms per character)

        return () => clearInterval(typingInterval);  // Cleanup interval on unmount
    }, []);
    */
   
    return (
        <div>
            {fullText}
        </div>
    );
};

export default TypingText;
