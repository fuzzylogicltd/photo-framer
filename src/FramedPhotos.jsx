import FrameLayout from "./FrameLayout";

import style from "./FramedPhotos.module.css";

export default function FramedPhotos({ selectedFrameLayout, photos }) {
  return (
    <div className={style.FramedPhotos}>
      <FrameLayout layoutId={selectedFrameLayout} photos={photos} />
    </div>
  );
}
