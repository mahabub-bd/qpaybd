import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import "aos/dist/aos.css";
import Layout from "./_layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
