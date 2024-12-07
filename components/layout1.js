// components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
