import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./Index"; // Importa tu componente Index.js
import AboutUs from "./AboutUs"; // Importa tu componente AboutUs.js
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Router>
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
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={AboutUs} />
          {/* Agrega más rutas si es necesario */}
        </Switch>
      </Fragment>
    </Router>
  );
}

export default MyApp;
