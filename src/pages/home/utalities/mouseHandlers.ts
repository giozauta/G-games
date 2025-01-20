export const calculateMouseStyle = (e: React.MouseEvent, box: DOMRect) => {
  const centerX = box.left + box.width / 2;
  const centerY = box.top + box.height / 2;

  const x = e.clientX - centerX; // X დისტანცია ცენტრიდან
  const y = e.clientY - centerY; // Y დისტანცია ცენტრიდან

  const rotateX = (y / box.height) * 40; // ვერტიკალური დახრა
  const rotateY = -(x / box.width) * 40; // ჰორიზონტალური დახრა

  return {
    transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: "transform 0.1s ease-out",
  };
};

export const resetMouseStyle = () => ({
  transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
  transition: "transform 0.5s ease-out",
});
