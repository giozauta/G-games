import GameCarousel from "../games-carousel";
import Hero from "../hero";

const HomeList: React.FC = () => {
  return (
    <div className="h-[1980px]">
      <Hero />
      {/*just for style*/}{" "}
      <div className="hidden sm:flex sm:h-[750px] border "></div>
      <GameCarousel />
    </div>
  );
};

export default HomeList;
