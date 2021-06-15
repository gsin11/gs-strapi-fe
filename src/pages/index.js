import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { getMenuItems, getBaseURL } from "@/lib/api";

import { scrollIntoView } from "../utils";

export default function Home({ products }) {
  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="uppercase text-4xl md:text-8xl lg:text-9xl font-bold">
            Eggcellent
          </h2>
          <p className="text-yellow-500">A fine dining restaurant</p>
          <button
            className="absolute bottom-4 text-2xl animate-bounce text-gray-800"
            onClick={() => scrollIntoView("products")}
          >
            V
          </button>
        </div>
        <div id="products" className="h-screen pt-16">
          <h2 className="text-center my-6 text-4xl">Products</h2>
          <div className="max-w-md w-full mx-auto">
            {products.dishes.map((o) => (
              <ProductCard
                key={o.id}
                slug={o.slug}
                name={o.name}
                shortDescription={o.short_description}
                price={`$${o.price}`}
                image={getBaseURL() + o.image[0].url}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const promise = getMenuItems();
  return promise.then((response) => {
    return {
      props: {
        products: response,
      },
    };
  });
}
