import Lottie from 'lottie-react'; 
import animation from "@/assets/animations/animation.json"; 

const Loading:React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <Lottie animationData={animation} loop={true} autoplay={true} />
    </div>
  );
};

export default Loading;
