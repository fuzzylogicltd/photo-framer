import FrameLayout from "./FrameLayout";

import styles from "./LayoutSelector.module.css";

export default function LayoutSelector({
  selectedFrameLayout,
  setSelectedFrameLayout,
}) {
  const layouts = import.meta.glob("./layouts/*.css");

  return (
    <div className={styles.LayoutSelector}>
      {Object.keys(layouts).map((layout) => {
        const layoutId = layout.split("/").pop().split(".")[0];
        console.log({ layoutId }, { selectedFrameLayout });
        return (
          <FrameLayout
            key={layoutId}
            layoutId={layoutId}
            onClick={setSelectedFrameLayout}
            isCurrentlySelected={
              Number(layoutId) === Number(selectedFrameLayout)
            }
          />
        );
      })}
    </div>
  );
}
