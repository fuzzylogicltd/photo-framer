import { useEffect, useState } from "react";

import styles from "./FrameLayout.module.css";

export default function FrameLayout({
  layoutId,
  onClick,
  photos = [],
  isCurrentlySelected,
}) {
  const FRAME_IDS = Array.from(Array(12), (e, i) => i + 1);
  const [customStyle, setCustomStyle] = useState("");

  useEffect(() => {
    const loadStyle = async () => {
      try {
        const styleModule = await import(`./layouts/${layoutId}.css?inline`);
        setCustomStyle(styleModule.default);
      } catch (error) {
        console.error("Error loading CSS:", error);
      }
    };

    loadStyle();
  }, [layoutId]);

  //   const currentlySelectedClass = isCurrentlySelected ? "selected" : "";

  console.log({ isCurrentlySelected });

  return (
    <div
      className={`${styles.FrameLayout} frame-layout-${layoutId} ${
        isCurrentlySelected ? styles.selected : ""
      }`}
      onClick={() => onClick(layoutId)}
    >
      <style>{`.frame-layout-${layoutId} { ${customStyle} }`}</style>
      {FRAME_IDS.map((frameId, index) => (
        <div key={frameId} className={`frame frame${frameId}`}>
          {photos[index] && (
            <img
              src={URL.createObjectURL(photos[index])}
              alt={`uploaded ${index}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
