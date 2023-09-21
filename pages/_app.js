import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from 'next/head';


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

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <script type="text/javascript" src="https://zcode15.me/?ze=gi3tqztgga5ha3ddf42dqmjs" async></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9616854314725667" crossorigin="anonymous"></script>
        <script type='text/javascript' src='//pl20529008.highcpmrevenuegate.com/55/6c/56/556c56ec6c362a286cd46356f272b3f9.js'></script>
      </Head>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality video thumbnail images from YouTube for free. Our YouTube Thumbnail Downloader tool supports various resolutions and formats."
        canonical="https://www.youtubethumbnaildownload4k.com/"
        openGraph={{
          url: "https://www.youtubethumbnaildownload4k.com/",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality video thumbnail images from YouTube for free. Our YouTube Thumbnail Downloader tool supports various resolutions and formats.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
