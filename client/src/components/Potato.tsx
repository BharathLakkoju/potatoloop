import potato from "../assets/potato.svg";
import "../App.css"

const Potato = ({ width, height }: { width: number; height: number }) => {
  return (
    <img className="potato" src={potato} alt="" width={42} style={{
      position: 'absolute',
      left: width - 20,
      top: height - 20,
    }} />
  )
}

export default Potato