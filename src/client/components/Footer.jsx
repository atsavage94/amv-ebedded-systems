import React from "react";
import icon from "./favicon.png";

const Footer = () => {
return (
<footer id="footer">
    <div>
    <p>
     Run <code> npm init vite@latest</code> in your command line to try ViteJS<img src={icon} className="App-ico" alt="ico" height="20px" width="20px" />
    </p>
    </div>
</footer>
)
}

export default Footer;