import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-main">
        {/* <div className="logo"></div> */}
        <ul>
          <li>
            <a href="#">Coffee house</a>
          </li>
          <li>
            <a href="#">Our coffee</a>
          </li>
          <li>
            <a href="#">For your pleasure</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
