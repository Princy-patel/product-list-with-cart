import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function ConfirmOrder() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={400}
    />
  );
}

export default ConfirmOrder;
