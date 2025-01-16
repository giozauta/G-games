import { useGamesList } from "@/react-query/query/home";
import GameCarousel from "../games-carousel";
import GamesListBox from "../games-list-box";
import Hero from "../hero";

const HomeList: React.FC = () => {
  const { data: games ,refetch} = useGamesList();

  if (!games) {
    return null;
  }

  return (
    <div className="h-full mb-40 sm:mb-80 ">
      <Hero games={games} />
      <GameCarousel games={games} />
      <GamesListBox refetch={refetch} />
    </div>
  );
};

export default HomeList;
