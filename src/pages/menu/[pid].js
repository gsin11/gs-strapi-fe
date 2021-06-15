import Image from "next/image";
import { getMenuItems, getSingleMenuItem, getBaseURL } from "@/lib/api";
import Layout from "../../components/Layout";

function Dish({ item }) {
  return (
    <Layout title={item.name}>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="h-screen pt-16">
          <h2 className="text-center my-6 text-4xl">{item.name}</h2>
          <div className="max-w-md w-full mx-auto">
            <div
              className="relative mb-6"
              style={{ height: "600px", zIndex: 1 }}
            >
              <Image
                src={getBaseURL() + item.image[0].url}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                quality="100"
              />
            </div>
            <p className="text-xl font-bold mb-2">${item.price}</p>
            <p>{item.short_description}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const promise = getMenuItems();
  return promise.then((response) => {
    const paths = response.dishes.map((item) => ({
      params: { pid: item.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  });
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const promise = getSingleMenuItem(params.pid);
  return promise.then((response) => {
    return { props: { item: response.dishes[0] } };
  });
}

export default Dish;
