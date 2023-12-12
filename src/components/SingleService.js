import React, { useEffect, useState } from "react";
import Footer from "../shared/footer";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import { useParams } from "react-router-dom";
import services from "./mock/services";

const SingleService = () => {
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const [service, setService] = useState();

  useEffect(() => {
    let currentService = services.find((s) => s.id === params.id);

    if (currentService !== undefined) {
      setService(currentService);
    } else {
      window.location.href = "/Not-Found";
    }

    setLoading(false);
  }, [params.id]);

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
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-d6c13e5 no-inner-padding sc_fly_static elementor-widget elementor-widget-trx_widget_slider trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                        data-id="d6c13e5"
                        data-element_type="widget"
                        id="controller-tools-3"
                        data-widget_type="trx_widget_slider.default"
                      >
                        {loading ? (
                          <></>
                        ) : (
                          <>
                            {service !== false ? (
                              <>
                                <div className="elementor-widget-container">
                                  <div
                                    id="controller-tools-3_sc"
                                    className="widget_area sc_widget_slider"
                                  >
                                    <aside className="widget widget_slider">
                                      <div className="slider_wrap slider_engine_swiper">
                                        <div
                                          id="controller-tools-3_sc_swiper_outer"
                                          className="slider_outer slider_swiper_outer slider_style_default slider_source_custom slider_outer_direction_horizontal slider_outer_one slider_outer_nopagination slider_outer_nocontrols slider_outer_nocentered slider_outer_overflow_hidden slider_outer_notitles slider_outer_height_auto"
                                        >
                                          <div
                                            id="controller-tools-3_sc_swiper"
                                            className="slider_container slider_swiper swiper-slider-container slider_direction_horizontal slider_nopagination slider_one slider_type_bg slider_nocontrols slider_nocentered slider_overflow_hidden slider_notitles slider_resize slider_swipe slider_height_auto controller-tools-3_sc_swiper inited swiper-container-initialized swiper-container-horizontal"
                                            style={{
                                              display: "block",
                                              opacity: 1,
                                              cursor: "grab",
                                              height: "450px",
                                            }}
                                            data-busy={0}
                                            data-ratio="522.917:468.003"
                                          >
                                            <div
                                              className="slider-wrapper swiper-wrapper"
                                              style={{
                                                transform:
                                                  "translate3d(0px, 0px, 0px)",
                                                transitionDuration: "0ms",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                objectFit: "cover",
                                                background:
                                                  "url(" + service.img + ")",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "top",
                                                backgroundSize: "cover  ",
                                                borderRadius: "15px",
                                              }}
                                            ></div>
                                            <span
                                              className="swiper-notification"
                                              aria-live="assertive"
                                              aria-atomic="true"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </aside>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <></>
                  ) : (
                    <>
                      {service !== false ? (
                        <>
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c05f288 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                            data-id="c05f288"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-32e35e4 sc_fly_static elementor-widget elementor-widget-trx_sc_title trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                data-id="32e35e4"
                                data-element_type="widget"
                                data-widget_type="trx_sc_title.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="sc_title sc_title_default">
                                    <h1
                                      className="sc_item_title sc_title_title sc_item_title_style_default sc_item_title_tag"
                                      style={{
                                        fontSize: "20px",
                                        marginTop: "15px",
                                      }}
                                    >
                                      {service.name}
                                    </h1>
                                    <br />
                                    <p
                                      className="price"
                                      dangerouslySetInnerHTML={{
                                        __html: service.desc,
                                      }}
                                    ></p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-0e96e5f sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                data-id="0e96e5f"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-5ad6b2c sc_fly_static elementor-widget elementor-widget-trx_sc_slider_controls trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                data-id="5ad6b2c"
                                data-element_type="widget"
                                data-widget_type="trx_sc_slider_controls.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="sc_slider_controls sc_slider_controls_light slider_pagination_style_title sc_align_left go inited"
                                    data-slider-id="controller-tools-3"
                                    data-style="light"
                                    data-pagination-style="title"
                                  >
                                    <div className="slider_controls_wrap">
                                      <div className="slider_pagination_wrap" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-1a3b169 sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                data-id="1a3b169"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleService;
