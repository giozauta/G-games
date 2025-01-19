import { useGamesList } from "@/react-query/query/home";
import GameCarousel from "../games-carousel";
import GamesListBox from "../games-list-box";
import Hero from "../hero";
import SwordJoystickImageBox from "../sword-joystick-image-box";

const HomeList: React.FC = () => {
  const { data: games, refetch } = useGamesList();

  if (!games) {
    return null;
  }

  return (
    <div className="h-full mb-40 sm:mb-80 ">
      <Hero games={games} />
      <GameCarousel games={games} />
      <GamesListBox refetch={refetch} />
      <SwordJoystickImageBox/>{/*ჯოესტიკის და ხმლის ანიმაცია ეს კომპონენტი გამოიყენება მხოლოდ სტილისთვის */}
    </div>
  );
};

export default HomeList;
