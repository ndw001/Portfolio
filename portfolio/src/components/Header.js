import "./Header.css";
import Tab from "./Tab";

function Header() {
  // Headers: Top, About Me, Projects, Contact Me
  const testTabs = ["Home", "Projects"];

  return (
    <div className="header">
      <div className="tabBar">
        {testTabs.map((tab, index) => (
          <Tab tabName={tab} />
        ))}
      </div>
    </div>
  );
}

export default Header;
