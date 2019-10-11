import React from "react";
import "../Styles/fontawarsome/css/all.css";
import "../Styles/pages/footer.css";

const Footer = props => {
  return (
    <div className="footer-container">
      <div class="row">
        <div class="col-md-12 py-5">
          <div class="mb-5 flex-center">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Footer;
