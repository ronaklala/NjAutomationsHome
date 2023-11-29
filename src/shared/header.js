import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
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
      <header className="top_panel top_panel_custom top_panel_custom_30641 top_panel_custom_header-main-sticky without_bg_image">
        <div
          data-elementor-type="cpt_layouts"
          data-elementor-id="30641"
          className="elementor elementor-30641"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-d71260d elementor-section-full_width elementor-section-content-middle sc_layouts_row sc_layouts_row_type_compact sc_layouts_hide_on_tablet sc_layouts_hide_on_mobile scheme_dark elementor-section-height-default elementor-section-height-default sc_fly_static"
            data-id="d71260d"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-208260e sc_layouts_column_align_left sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="208260e"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-e68586b sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_logo"
                    data-id="e68586b"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_logo.default"
                  >
                    <div className="elementor-widget-container">
                      <a
                        href="#/"
                        className="sc_layouts_logo sc_layouts_logo_default trx_addons_inline_885828837"
                      >
                        <img
                          className="logo_image"
                          src={process.env.REACT_APP_LOGO}
                          alt={process.env.REACT_APP_LOGO}
                          width="115"
                          height="35"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1a0ba7c sc_layouts_column_align_center sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="1a0ba7c"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-61014c0 sc_layouts_hide_on_tablet sc_layouts_hide_on_mobile sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_menu"
                    data-id="61014c0"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_menu.default"
                  >
                    <div className="elementor-widget-container">
                      <nav
                        className="sc_layouts_menu sc_layouts_menu_default sc_layouts_menu_dir_horizontal menu_hover_zoom_line hide_on_mobile"
                        data-animation-in="none"
                        data-animation-out="none"
                      >
                        <ul
                          id="menu_main menu_9953"
                          className="sc_layouts_menu_nav menu_main_nav main_1563"
                        >
                          <li
                            id="menu-item-29544"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29544"
                          >
                            <a href="/">
                              <span>Home</span>
                            </a>
                          </li>
                          <li
                            id="menu-item-17792"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-17792"
                          >
                            <a href="#About">
                              <span>About Us</span>
                            </a>
                          </li>
                          {!user ? (
                            <>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="/Login">
                                  <span>Login</span>
                                </a>
                              </li>
                            </>
                          ) : (
                            <>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="#/">
                                  <span>{user.name}</span>
                                </a>
                              </li>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="/Orders">
                                  <span>Orders</span>
                                </a>
                              </li>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="#/">
                                  <span onClick={handleLogout}>Logout</span>
                                </a>
                              </li>
                            </>
                          )}

                          <li
                            id="menu-item-29547"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29547"
                          >
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
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-0403b3b elementor-section-full_width elementor-section-content-middle sc_layouts_row sc_layouts_row_type_compact sc_layouts_hide_on_tablet sc_layouts_hide_on_mobile scheme_dark sc_layouts_row_fixed sc_layouts_row_fixed_always sc_layouts_row_delay_fixed sc_layouts_row_hide_unfixed elementor-section-height-default elementor-section-height-default sc_fly_static"
            data-id="0403b3b"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-857a075 sc_layouts_column_align_left sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="857a075"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-17e0252 sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_logo"
                    data-id="17e0252"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_logo.default"
                  >
                    <div className="elementor-widget-container">
                      <a
                        href="#/"
                        className="sc_layouts_logo sc_layouts_logo_default trx_addons_inline_1939099467"
                      >
                        <img
                          className="logo_image"
                          src={process.env.REACT_APP_LOGO}
                          alt={process.env.REACT_APP_LOGO}
                          width="115"
                          height="35"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f82c66d sc_layouts_column_align_center sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="f82c66d"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-c771ec5 sc_layouts_hide_on_tablet sc_layouts_hide_on_mobile sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_menu"
                    data-id="c771ec5"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_menu.default"
                  >
                    <div className="elementor-widget-container">
                      <nav
                        className="sc_layouts_menu sc_layouts_menu_default sc_layouts_menu_dir_horizontal menu_hover_zoom_line hide_on_mobile"
                        data-animation-in="none"
                        data-animation-out="none"
                      >
                        <ul
                          id="sc_layouts_menu_122041324"
                          className="sc_layouts_menu_nav"
                        >
                          <li
                            id="menu-item-29614"
                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-29614"
                          >
                            <a href="/">
                              <span>Home</span>
                            </a>
                          </li>
                          <li
                            id="menu-item-29615"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29615"
                          >
                            <a href="/#About">
                              <span>About Us</span>
                            </a>
                          </li>
                          {!user ? (
                            <>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="/Login">
                                  <span>Login</span>
                                </a>
                              </li>
                            </>
                          ) : (
                            <>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="#/">
                                  <span>{user.name}</span>
                                </a>
                              </li>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="/Orders">
                                  <span>Orders</span>
                                </a>
                              </li>
                              <li
                                id="menu-item-29617"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29617"
                              >
                                <a href="#/">
                                  <span onClick={handleLogout}>Logout</span>
                                </a>
                              </li>
                            </>
                          )}
                          <li
                            id="menu-item-29547"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-29547"
                          >
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
            </div>
          </section>
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-0510be4 sc_layouts_row sc_layouts_row_type_compact elementor-section-content-middle sc_layouts_hide_on_wide sc_layouts_hide_on_desktop sc_layouts_hide_on_notebook scheme_dark elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
            data-id="0510be4"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-extended">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cbe0b6a sc_layouts_column_align_left sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="cbe0b6a"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-cd7d2ff sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_logo"
                    data-id="cd7d2ff"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_logo.default"
                  >
                    <div className="elementor-widget-container">
                      <a
                        href="#/"
                        className="sc_layouts_logo sc_layouts_logo_default trx_addons_inline_424621951"
                      >
                        <img
                          className="logo_image"
                          src={process.env.REACT_APP_LOGO}
                          alt={process.env.REACT_APP_LOGO}
                          width="115"
                          height="35"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c427de8 sc_layouts_column_align_right sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                data-id="c427de8"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="sc_layouts_item elementor-element elementor-element-fa18060 sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_search"
                    data-id="fa18060"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_search.default"
                  ></div>
                  <div
                    className="sc_layouts_item elementor-element elementor-element-060d2dc sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_menu"
                    data-id="060d2dc"
                    data-element_type="widget"
                    data-widget_type="trx_sc_layouts_menu.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="sc_layouts_iconed_text sc_layouts_menu_mobile_button_burger sc_layouts_menu_mobile_button">
                        <a
                          className="sc_layouts_item_link sc_layouts_iconed_text_link"
                          href="#/"
                        >
                          <span className="sc_layouts_item_icon sc_layouts_iconed_text_icon trx_addons_icon-menu"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Header;
