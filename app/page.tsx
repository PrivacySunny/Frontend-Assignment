import Tabs from "../components/Tabs";
import Gallery from "../components/Gallery";
import Layout from "@/app/layout";

const HomePage = () => {
  return (
    <Layout>
      <Tabs />
      <div className="bg-zinc-700 mt-6 shadow-xl w-full md:w-2/3 lg:w-1/2 ml-auto mr-6 border border-zinc-700"></div>
      <Gallery />
      <div className="bg-zinc-700 mt-6 shadow-xl w-full md:w-2/3 lg:w-1/2 ml-auto mr-6 border border-zinc-700"></div>
    </Layout>
  );
};

export default HomePage;
