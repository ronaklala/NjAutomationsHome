import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MobileMenu = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      setUser(false);
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged Out Successfully");
    window.location.reload();
  };
  return (
    <>
      <div className="menu_mobile_overlay scheme_dark" />
      <div className="menu_mobile menu_mobile_fullscreen scheme_dark">
        <div className="menu_mobile_inner with_widgets">
          <div className="menu_mobile_header_wrap">
            <a className="sc_layouts_logo" href="/">
              <img
                src="https://i.ibb.co/RT0XJDz/image-removebg-preview.png"
                srcSet="
                wp-content/uploads/2023/03/Logo_light_x2-nocopyright.png 2x
              "
                alt="Optima"
                width={115}
                height={35}
              />
            </a>
            <a
              className="menu_mobile_close menu_button_close"
              tabIndex={0}
              href="#/"
            >
              <span className="menu_button_close_text">Close</span>
              <span className="menu_button_close_icon" />
            </a>
          </div>
          <div className="menu_mobile_content_wrap content_wrap">
            <div className="menu_mobile_content_wrap_inner">
              <nav
                className="menu_mobile_nav_area"
                itemScope="itemscope"
                itemType="https://schema.org/SiteNavigationElement"
              >
                <ul id="menu_mobile_1655158356">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-29544">
                    <a href="/">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17792">
                    <a href="/#About">
                      <span>About Us</span>
                    </a>
                  </li>

                  {user ? (
                    <>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29578">
                        <a href="#/">
                          <span>{user.name}</span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29546">
                        <a href="/Orders">
                          <span>Orders</span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29546">
                        <a href="#/" onClick={handleLogout}>
                          <span>Logout</span>
                        </a>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}

                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29547">
                    <a href="/Shop">
                      <span>Shop</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MobileMenu;
