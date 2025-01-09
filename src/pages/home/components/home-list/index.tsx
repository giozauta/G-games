import GameCarousel from "../games-carousel";
import GamesListBox from "../games-list-box";
import Hero from "../hero";

const HomeList: React.FC = () => {
  return (
    <div className="h-[1980px] ">
      <Hero />
      {/*just for style*/}{" "}
      <div className="hidden sm:flex sm:h-[750px] border "></div>
      <GameCarousel />
      <GamesListBox />
    </div>
  );
};

export default HomeList;
