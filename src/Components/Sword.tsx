interface my {
  para: string;
}
const Sword: React.FC<my> = ({ para }) => {
  return (
    <div>
      <button>{para} click</button>
    </div>
  );
};
export default Sword;
