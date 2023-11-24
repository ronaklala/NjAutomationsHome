import React from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";

const OrderSuccess = () => {
  return (
    <>
      <div className="body_wrap">
        <div className="page_wrap">
          <Header />
          <MobileMenu />

          <br />
          <br />
          <br />

          <div
            data-elementor-type="cpt_layouts"
            data-elementor-id={29636}
            className="elementor elementor-29636"
          >
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-a02470b elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
              data-id="2e029f03"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <br />
              <br />
              <br />
              <br />

              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-af57dad elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                data-id="af57dad"
                data-element_type="section"
                style={{ padding: 10 }}
              >
                <div className="elementor-container elementor-column-gap-extended">
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-55a0f21 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                    data-id="55a0f21"
                    data-element_type="column"
                    style={{ width: "100%" }}
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <article
                        className="post_item_single post_item_404 post-0 unknown type-unknown status-publish hentry"
                        style={{ width: "100%" }}
                      >
                        <div className="post_content">
                          <center>
                            <img
                              src="https://i.ibb.co/0hSDQrk/image-processing20211230-25973-unscreen.gif"
                              style={{ height: "200px" }}
                              alt="Success"
                            />
                          </center>
                          <h1
                            className="page_title"
                            style={{ fontSize: "88px" }}
                          >
                            YAYY!
                          </h1>
                          <div className="page_info">
                            <p
                              className="page_subtitle"
                              style={{ fontSize: "28px" }}
                            >
                              Your Order Has been Placed. <br />
                              You Should get a mail soon about the status of the
                              Order.
                            </p>
                            <br />
                            <a
                              href="/Orders"
                              className="go_home theme_button sc_button sc_button_decoration"
                            >
                              Orders
                            </a>
                          </div>
                          <div className="all-svg">
                            <span
                              className="svg-2"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(-0.9px, -2.0362px)",
                              }}
                            ></span>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
