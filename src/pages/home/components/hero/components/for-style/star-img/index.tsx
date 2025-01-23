const StarAwardImagesBox: React.FC = () => {
  return (
    <div className="hidden  z-30 2xl:flex flex-col absolute top-[130px] w-[200px] right-0 justify-between   items-end 2xl:items-start h-[660px] ">
      <img
        src="/images/big-star.png"
        alt="star"
        className="animate-scalePulse "
      />
      <img
        src="/images/award.png"
        alt="award"
        className="animate-rotate3d  px-3"
      />
    </div>
  );
};

export default StarAwardImagesBox;
