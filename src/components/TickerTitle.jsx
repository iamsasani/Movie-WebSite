// components/TickerTitle.jsx
import { useEffect, useRef, useState } from "react";

function TickerTitle({ text, className = "", speed = 40 }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [duration, setDuration] = useState(8);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (container && textEl) {
      const textWidth = textEl.scrollWidth;
      const containerWidth = container.clientWidth;

      if (textWidth > containerWidth) {
        setIsOverflowing(true);
        setDuration(textWidth / speed);
      } else {
        setIsOverflowing(false);
      }
    }
  }, [text, speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
    >
      {isOverflowing ? (
        <div
          style={{ "--ticker-duration": `${duration}s` }}
          className="inline-flex animate-ticker"
        >
          <span ref={textRef} className="inline-block pr-8">
            {text}
          </span>
          <span className="inline-block pr-8" aria-hidden="true">
            {text}
          </span>
        </div>
      ) : (
        <span ref={textRef} className="inline-block">
          {text}
        </span>
      )}
    </div>
  );
}

export default TickerTitle;