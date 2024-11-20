import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
const AppLayout = ({ children, title, auther, description, keywords }) => {
  
  return (
    <div>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={auther} />
          <title>{title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      
      
      <main>{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default AppLayout;
