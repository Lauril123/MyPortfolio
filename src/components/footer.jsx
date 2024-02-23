import React from "react";

function Footer () {
    
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                {/* Social Icons */}
                &copy; {new Date().getFullYear} 
                Laurits Lund. All rights reserved.

            </p>
            
        </div>
    )
}

export default Footer;