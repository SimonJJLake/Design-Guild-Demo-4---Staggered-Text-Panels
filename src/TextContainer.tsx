import { FC } from "react";
import "./App.css";

export const TextContainer: FC<{ aligned: boolean; multiplier?: number }> = ({
  aligned,
  multiplier = 1,
}) => {
  return (
    <div className="text-container">
      <div
        className="text"
        style={{ left: aligned ? "5vw" : `${5 + multiplier * 30}vw`, top: 0 }}
      >
        Remember that what has
      </div>
      <div
        className="text"
        style={{
          left: aligned ? "5vw" : `${5 + multiplier * 20}vw`,
          top: "12vw",
        }}
      >
        once been done may be
      </div>
      <div
        className="text"
        style={{
          left: aligned ? "5vw" : `${5 + multiplier * 10}vw`,
          top: "24vw",
        }}
      >
        done again.
      </div>
    </div>
  );
};
