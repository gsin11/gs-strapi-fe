import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto">
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold">
            Eggcellent
          </h2>
          <p className="text-yellow-500 mb-7">A fine dining restaurant</p>
          <p>007 Dummy Straße</p>
          <p>Frankfurt am Main, Hesse</p>
          <p>Germany</p>
        </div>
      </main>
    </Layout>
  );
}
