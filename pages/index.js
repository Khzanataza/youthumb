import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import Link from 'next/link';

const TopMenu = () => {
  return (
    <header className="site-header">
      <div className="site-identity">
        <p>YouTube Thumbnails</p>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About US</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};




const LeftBanner = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cargar el script de anuncios de manera asincrónica
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9616854314725667';
      script.async = true;
      document.body.appendChild(script);

      // Ejecutar el script cuando se cargue
      script.onload = () => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      };
    }
  }, []);

  return (
    <div className="left-banner" style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <ins className="adsbygoogle"
           style={{ display: 'inline-block', width: '160px', height: '600px' }}
           data-ad-client="ca-pub-9616854314725667"
           data-ad-slot="4757685506"></ins>
    </div>
  );
};

const RightBanner = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cargar el script de anuncios de manera asincrónica
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9616854314725667';
      script.async = true;
      document.body.appendChild(script);

      // Ejecutar el script cuando se cargue
      script.onload = () => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      };
    }
  }, []);

  return (
    <div className="right-banner" style={{ position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <ins className="adsbygoogle"
           style={{ display: 'inline-block', width: '160px', height: '600px' }}
           data-ad-client="ca-pub-9616854314725667"
           data-ad-slot="4757685506"></ins>
    </div>
  );
};

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
    } else {
      // Si no se encuentra una URL de video válida, no elimines las miniaturas existentes
      // en lugar de eso, simplemente devuelve sin cambiar el estado.
      return;
    }

    // Limpiar la URL del video después de agregar miniaturas
    setVideoURL("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Agrega el menú en la parte superior */}
      <TopMenu />

      {/* Coloca el banner de la izquierda */}
      <LeftBanner />

      {/* Coloca el texto entre los banners */}
      <div className="text-center mb-8" style={{ width: "60%" }}>
        <h1 className="text-3xl font-bold mb-2">
          Download High-Quality YouTube Thumbnails for Free
        </h1>
        <p className="text-gray-600">
          Easily download YouTube thumbnails with our YouTube Thumbnail Downloader. Get high-quality previews of your favorite videos within seconds. Convert these thumbnails into shareable images for your social media or online projects! Try it now and swiftly obtain YouTube thumbnails with our convenient thumbnail download service.
        </p>
      </div>

      {/* Coloca el banner de la derecha */}
      <RightBanner />

      {/* Resto del contenido */}
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>

      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8" style={{ width: "60%" }}>
        <h2 className="text-xl font-semibold mb-4">What is a YouTube Thumbnail?</h2>
        <p className="text-gray-600">
          A YouTube Thumbnail is the captivating cover image of a video that offers a sneak peek into its content. There are two types of YouTube Thumbnails: those automatically generated by the platform and those uploaded by creators, also known as Custom Thumbnails. Regardless of the type, the URL of these thumbnails remains concealed on YouTube and cannot be accessed or saved from the platform.
        </p>

        {/* Resto del contenido existente */}
        
        <h2 className="text-xl font-semibold mb-4">How Many Thumbnails Does a YouTube Video Have?</h2>
        <p className="text-gray-600">
          A YouTube video can feature up to nine thumbnails, although not all videos boast this many. Generally, seven thumbnails are guaranteed:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Player Background (480x360)</li>
          <li>Start (120x90)</li>
          <li>Middle (120x90)</li>
          <li>End (120x90)</li>
          <li>High Quality (480x360)</li>
          <li>Medium Quality (320x180)</li>
          <li>Normal Quality (120x90)</li>
        </ul>
        <p className="text-gray-600">
          For high-definition videos, two additional sizes are included:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Standard Definition (640x480)</li>
          <li>Maximum Resolution (1920x1080)</li>
        </ul>
        <p className="text-gray-600">
          However, the most commonly used sizes are High Quality, Medium Quality, and Full Size. Therefore, our YT Thumbnail Downloader provides downloads in these three primary sizes. If you require other sizes, we'll guide you on how to obtain them later.
        </p>
        <h2 className="text-xl font-semibold mb-4">How Many Thumbnails Does a YouTube Video Have?</h2>
        <p className="text-gray-600"></p>
        {/* Aquí se inserta el párrafo atractivo */}
        <p className="text-gray-600">
          Explore the realm of YouTube thumbnails with our Thumbnail Downloader tool. These enticing visuals offer a sneak peek into your favorite videos. Our tool allows you to easily download these eye-catching images in various sizes and use them creatively. Whether it's for setting unique wallpapers, sharing them on your blog or social media, or finding inspiration for your own projects, our Thumbnail Downloader tool provides a comprehensive solution.
        </p>
        <p className="text-gray-600">
          Say goodbye to the challenges of saving these elusive images and welcome a user-friendly and efficient solution. When you upload a video to YouTube, the platform automatically generates a set of thumbnails for you to choose from. While a video can have up to nine thumbnails, most offer at least seven guaranteed options. These thumbnails play a vital role in capturing viewers' attention and offering an enticing glimpse into the video's content.
        </p>
        <p className="text-gray-600">
          Our tool simplifies the process of accessing and using these thumbnails creatively. You no longer need to worry about the complexities of saving these images, as our Thumbnail Downloader streamlines the entire process. Downloading YouTube thumbnails has never been this effortless. Our tool is user-friendly and effective, making it the perfect choice for anyone seeking to maximize the potential of these impactful visuals. So, why wait? Begin downloading your YouTube thumbnails with us and unleash your creativity today.
        </p>
      </div>
    </div>
  );
};

export default Index;
