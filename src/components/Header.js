import "./Header.css";
import Tab from "./Tab";

function Header() {
  const testTabs = ["home", "projects", "skills", "contact"];

  return (
    <div className="tabBar">
      {testTabs.map((tabName, index) => (
        <Tab key={index} index={index} tabName={tabName} />
      ))}
    </div>
  );
}

export default Header;
