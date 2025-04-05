import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setIndex(index - 1);
      }, speed);
    } else if (index === text.length) {
      // Start deleting once typing is complete
      setIsDeleting(true);
    } else if (index === 0 && isDeleting) {
      // Start typing again once deleting is complete
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
