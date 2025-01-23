const CenterPicture: React.FC = () => {
  return (
    <div className="z-10   h-full w-[30%] hidden md:flex justify-end items-end relative top-[-30px] ">
      <img
        src="/images/call.webp"
        alt="call"
        className=" w-[500px] h-[650px]  "
      />
    </div>
  );
};

export default CenterPicture;
