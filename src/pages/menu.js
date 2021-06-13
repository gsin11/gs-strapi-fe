import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

export default function Menu() {
  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="h-screen pt-16">
          <h2 className="text-center my-6 text-4xl">Menu</h2>
          <div className="max-w-md w-full mx-auto">
            <ProductCard
              name="Egg Salad"
              shortDescription="Crispy, delicious, and nutritious"
              price="$18"
            />
            <ProductCard
              name="Egg Salad"
              shortDescription="Crispy, delicious, and nutritious"
              price="$18"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
