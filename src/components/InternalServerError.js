import React from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";

const InternalServerError = () => {
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
                          <h1 className="page_title">500</h1>
                          <div className="page_info">
                            <h2 className="page_subtitle">Oops...</h2>
                            <p className="page_description">
                              We're sorry, but <br />
                              There has been an Internal Server Error
                            </p>
                            <a
                              href="/"
                              className="go_home theme_button sc_button sc_button_decoration"
                            >
                              Homepage
                            </a>
                          </div>
                          <div className="all-svg">
                            <span
                              className="svg-2"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(-1.5286px, -0.0647px)",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 97 97"
                              >
                                {" "}
                                <g>
                                  {" "}
                                  <circle
                                    cx="48.5"
                                    cy="48.5"
                                    r="48.5"
                                    stroke="none"
                                  />{" "}
                                  <circle
                                    cx="48.5"
                                    cy="48.5"
                                    r={38}
                                    fill="none"
                                  />{" "}
                                </g>{" "}
                              </svg>
                            </span>
                            <span
                              className="svg-3"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(-0.9727px, -0.0412px)",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 59.789 59.79"
                              >
                                <path
                                  d="M-1398.5-175.006l16.063-16.063-16.063-16.063,13.832-13.832L-1368.6-204.9l16.063-16.062,13.831,13.831-16.062,16.063,16.063,16.063-13.831,13.831-16.063-16.062-16.063,16.063Z"
                                  transform="translate(1398.498 220.964)"
                                />
                              </svg>
                            </span>
                            <span
                              className="svg-4"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate(-0.7643px, -0.0324px)",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 59.789 59.79"
                              >
                                <path
                                  d="M-1398.5-175.006l16.063-16.063-16.063-16.063,13.832-13.832L-1368.6-204.9l16.063-16.062,13.831,13.831-16.062,16.063,16.063,16.063-13.831,13.831-16.063-16.062-16.063,16.063Z"
                                  transform="translate(1398.498 220.964)"
                                />
                              </svg>
                            </span>{" "}
                          </div>
                        </div>
                      </article>{" "}
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InternalServerError;
