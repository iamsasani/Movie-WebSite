import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import TrendingSection from "../components/Content/TrendingSection";
import PopularPeopleSection from "../components/Content/PopularPeopleSection";

function Home() {
  return (
    <main>
      <Header />
      <div className="text-white container mx-auto px-3 sm:p-0">
        <TrendingSection />
      </div>
      <Content />
      <div className="text-white container mx-auto px-3 sm:p-0">
        <PopularPeopleSection />
      </div>
    </main>
  );
}

export default Home;