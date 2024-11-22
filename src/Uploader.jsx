import style from "./Uploader.module.css";

export default function Uploader({ handleImageUpload, photos }) {
  return (
    <div className={style.Uploader}>
      <label htmlFor="pictureUpload">
        <input
          type="file"
          id="pictureUpload"
          multiple
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
        />
        Upload Photos
      </label>
      <hr />

      {photos.length > 0 && (
        <div className={style.UploadedImages}>
          {photos.map((photo, index) => {
            return (
              <div key={index}>
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`uploaded ${index}`}
                  width="100"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
