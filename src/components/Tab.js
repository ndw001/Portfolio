import "./Tab.css";
import { Link } from "react-scroll";

function Tab(props) {
  return (
    <Link
      to={props.tabName}
      smooth={true}
      duration={500}
      onClick={() => console.log("Click Me Link")}
      className="tab"
    >
      <nav>{props.tabName}</nav>
    </Link>
  );
}

export default Tab;
