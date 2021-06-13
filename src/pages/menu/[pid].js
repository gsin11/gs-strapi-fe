import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Dish = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="h-screen pt-16">
          <h2 className="text-center my-6 text-4xl">Menu</h2>
          <div className="max-w-md w-full mx-auto">Coming Soon...</div>
        </div>
      </main>
    </Layout>
  );
};

export default Dish;
