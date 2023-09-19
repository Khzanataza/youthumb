// pages/index.js
import { useState } from "react";
import copy from "copy-to-clipboard";
import styles from '../styles/index.module.css'; // Asegúrate de que la ruta de importación sea correcta

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className={styles.container}>
      <header className={`${styles.text} ${styles.mb8}`}>
        <h1 className={styles.textTitle}>Youtube Thumbnail Downloader</h1>
        <p className={styles.textDescription}>
          Download high-quality thumbnails from YouTube videos.
        </p>
      </header>
      <div className={styles.textCenter}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button className={styles.btn} onClick={() => getYouTubeThumbnail(videoURL)}>
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className={styles.thumbnailOptions}>
          <h2 className={styles.textSubtitle}>Thumbnail Options</h2>
          <div className={styles.grid}>
            {thumbnailOptions.map((option, index) => (
              <div key={index} className={styles.thumbnailOption}>
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button className={styles.btn} onClick={() => copy(option.url)}>
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
