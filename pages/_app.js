import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Link from "next/link"; // Importa Link de Next.js
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://www.youtubethumbnaildownload4k.com/"
        openGraph={{
          url: "https://www.youtubethumbnaildownload4k.com/",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          {/* Agrega más enlaces si es necesario */}
        </ul>
      </nav>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
