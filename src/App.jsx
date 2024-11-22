import { useState } from "react";

import Uploader from "./Uploader.jsx";
import LayoutSelector from "./LayoutSelector.jsx";

import "./App.css";
import FramedPhotos from "./FramedPhotos.jsx";

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedFrameLayout, setSelectedFrameLayout] = useState(1);

  const handleImageUpload = (e) => {
    const uploadedFiles = e.target.files;
    setPhotos([...photos, ...uploadedFiles]);
  };

  return (
    <>
      <div className="sources">
        <Uploader handleImageUpload={handleImageUpload} photos={photos} />
      </div>
      <div className="result">
        <FramedPhotos
          selectedFrameLayout={selectedFrameLayout}
          photos={photos}
        />
      </div>
      <div className="layouts">
        <LayoutSelector
          selectedFrameLayout={selectedFrameLayout}
          setSelectedFrameLayout={setSelectedFrameLayout}
        />
      </div>
    </>
  );
}

export default App;
