import Layout from "../components/Layout";
import { getAboutPage } from "@/lib/api";

export default function About({ content }) {
  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold">
            About
          </h2>
          <p className="text-center">{content.description}</p>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const promise = getAboutPage();
  return promise.then((response) => {
    return {
      props: {
        content: response.about,
      },
    };
  });
}
