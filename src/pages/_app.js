import "@/styles/globals.css";
import "aos/dist/aos.css";
import Layout from "./_layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
