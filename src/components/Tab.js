import "./Tab.css";
import { scroller } from "react-scroll";

function Tab(props) {
  const handleClick = () => {
    console.log("Scrolling to:", props.tabName);
    scroller.scrollTo(props.tabName, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80
    });
  };

  return (
    <div className="tab" onClick={handleClick}>
      {props.tabName}
    </div>
  );
}

export default Tab;
