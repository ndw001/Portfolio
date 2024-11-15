import "./Header.css";
import Tab from "./Tab";

function Header() {
  // Headers: Top, About Me, Projects, Contact Me
  const testTabs = ["home", "projects", "contact"];

  return (
    <div className="tabBar">
      {testTabs.map((tabName, index) => (
        <Tab index={index} tabName={tabName} />
      ))}
    </div>
  );
}

export default Header;
