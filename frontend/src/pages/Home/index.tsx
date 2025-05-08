import AlsoImportantSection from "./ui/AlsoImportantSection";
import LessImportantSection from "./ui/LessImportantSection";
import MostImportantSection from "./ui/MostImportantSection";

const Home = () => {
  return (
    <div>
      <MostImportantSection />
      <AlsoImportantSection />
      <LessImportantSection />
    </div>
  );
};

export default Home;
