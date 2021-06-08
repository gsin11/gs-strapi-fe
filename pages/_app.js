import "../styles/globals.css";
import { getAllPostsForHome } from "@/lib/api";

function MyApp({ Component, pageProps }) {
  const promise = getAllPostsForHome();
  promise.then((response) => console.log(response));
  return <Component {...pageProps} />;
}

export default MyApp;
