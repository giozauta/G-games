import GameCarousel from "../games-carousel";
import GamesListBox from "../games-list-box";
import Hero from "../hero";

const HomeList: React.FC = () => {
  return (
    <div className="h-full mb-40 sm:mb-80">
      <Hero />
      {/*just for style*/}
      <GameCarousel />
      <GamesListBox />
    </div>
  );
};

export default HomeList;
