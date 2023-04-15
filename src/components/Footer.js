import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
        <div className="socialMedia">
<GitHubIcon  />
<LinkedInIcon href="https://www.linkedin.com/in/jada-burs/" />
          </div>
          <p> &copy; 2023 Jada Burs</p>
        </div>
    )
}

export default Footer;