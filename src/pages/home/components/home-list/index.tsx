import { useGamesList } from "@/react-query/query/home";
import GameCarousel from "../games-carousel";
import GamesListBox from "../games-list-box";
import Hero from "../hero";
import SwordJoystickImageBox from "../sword-joystick-image-box";

const HomeList: React.FC = () => {
  const { data: games, refetch, isLoading, isError } = useGamesList();

  if (isLoading) {
    return (
      <div className="h-screen w-full pb-40 sm:pb-80  flex justify-center items-center">
        ...loading{" "}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen w-full pb-40 sm:pb-80  flex justify-center items-center">
        error
      </div>
    );
  }

  return (
    <div className="h-full pb-40 sm:pb-80   ">
      <Hero games={games} />
      <GameCarousel games={games} />
      <GamesListBox refetch={refetch} />
      <SwordJoystickImageBox />
      {/*ჯოესტიკის და ხმლის ანიმაცია ეს კომპონენტი გამოიყენება მხოლოდ სტილისთვის */}
    </div>
  );
};

export default HomeList;
