import imgs from "/public/imgs";

interface my {
  para: string;
}
const Carousel: React.FC<my> = ({ para }) => {
  return (
    <div>
      <img className="w-<1440px> h-<600px>" src="imgs/gladi.png" alt="" />
    </div>
  );
};
export default Carousel;
