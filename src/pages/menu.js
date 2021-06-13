import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

import { getMenuItems, getBaseURL } from "@/lib/api";

export default function Menu({ products }) {
  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="h-screen pt-16">
          <h2 className="text-center my-6 text-4xl">Menu</h2>
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
