import dncLogo from "../../assets/logo-dnc.png";
import "./index.scss";

const Header = () => {
  return (
    // BLOCK
    <div className="header">
      <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
  );
};
export default Header;