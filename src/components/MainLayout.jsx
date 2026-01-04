

import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      
     

      
        <Navbar />

      
        
          {children}
        <Footer/>
        

      
    </div>
  );
};

export default MainLayout;
