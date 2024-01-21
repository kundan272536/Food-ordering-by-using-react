const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/attachment_93742997-e1554228382773.png?auto=format&q=60&fit=max&w=930"
            height={100}
            width={100}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;