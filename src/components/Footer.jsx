import React from "react";

function Footer() {
  return (
    <div>
      <footer className=" flex flex-row gap-3">
        <p className="text-[12px] font-mono">Before I Forget © 2026</p>

        
          <a href="https://github.com/bareshekhala/Before-I-Forget">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblkhBDCixhdGaP_B21didlIi1nkX4waw9wkGBKIevXg&s=10"
              className="w-8 h-8 pb-2 object-cover rounded-2xl cursor-pointer"
            />
          </a>
      </footer>
    </div>
  );
}

export default Footer;
