import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./css/Home.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <>
      <div className="page_content_wrap">
        <div className="content_wrap_fullscreen">
          <div className="content">
            <article
              id="post-29497"
              className="post_item_single post_type_page post-29497 page type-page status-publish hentry"
            >
              <div className="post_content entry-content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id={29497}
                  className="elementor elementor-29497"
                >
                  <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      pauseOnMouseEnter: false,
                      disableOnInteraction: false,
                    }}
                    loop
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        src="https://victorypcb.usa02.wondercdn.com/public/static/images/home/en-us/20220719.webp"
                        alt="herobanner"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-a02470b elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="a02470b"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7eb674a sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="7eb674a"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-a9c7dca sc_fly_static elementor-widget elementor-widget-slider_revolution"
                            data-id="a9c7dca"
                            data-element_type="widget"
                            data-widget_type="slider_revolution.default"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-57fa463 elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="57fa463"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e608a1 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="1e608a1"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ccd2570 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="ccd2570"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-af57dad elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="af57dad"
                    data-element_type="section"
                    style={{ padding: "10px" }}
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-55a0f21 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="55a0f21"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-d6c13e5 no-inner-padding sc_fly_static elementor-widget elementor-widget-trx_widget_slider"
                            data-id="d6c13e5"
                            data-element_type="widget"
                            id="controller-tools-3"
                            data-widget_type="trx_widget_slider.default"
                          >
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
                                        className="slider_container slider_swiper swiper-slider-container slider_direction_horizontal slider_nopagination slider_one slider_type_bg slider_nocontrols slider_nocentered slider_overflow_hidden slider_notitles slider_resize slider_swipe slider_height_auto"
                                      >
                                        <div className="slider-wrapper swiper-wrapper">
                                          <LazyLoadImage
                                            src="https://i.ibb.co/hLY3X7W/welcome.gif"
                                            alt="header-Img"
                                            effect="blur"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c05f288 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="c05f288"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-32e35e4 sc_fly_static elementor-widget elementor-widget-trx_sc_title"
                            data-id="32e35e4"
                            data-element_type="widget"
                            data-widget_type="trx_sc_title.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="sc_title sc_title_default">
                                <span className="sc_item_subtitle sc_title_subtitle sc_item_subtitle_above sc_item_title_style_default">
                                  NJ AUTOMATIONS
                                </span>
                                <h1 className="sc_item_title sc_title_title sc_item_title_style_default sc_item_title_tag">
                                  <span className="sc_item_title_text">
                                    (PCB) Printed Circuit Board Manufacturers
                                  </span>
                                </h1>
                                <div className="sc_item_descr sc_title_descr">
                                  <p>
                                    Welcome to Acme Circuit, & company with ISO
                                    9001:2015 Plant in Ahmedabad, Gujarat,
                                    India. Our business goal is to be the most
                                    professional PCB Manufacturer for
                                    prototyping & Medium-High Volume production
                                    to work with in the world. We are committees
                                    to meeting the needs of our customers from
                                    different industries. The ever increasing
                                    demand for PCB in the market leads us to the
                                    formation of best quality PCB. From the
                                    formation to its end that is from PCB layout
                                    to PCB assembly, fabrication each process is
                                    done under the guidance of experts who works
                                    consistently to provide you the best quality
                                    products and will assist you in all your
                                    technological requirements
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-0e96e5f sc_fly_static elementor-widget elementor-widget-spacer"
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
                            className="elementor-element elementor-element-5ad6b2c sc_fly_static elementor-widget elementor-widget-trx_sc_slider_controls"
                            data-id="5ad6b2c"
                            data-element_type="widget"
                            data-widget_type="trx_sc_slider_controls.default"
                          >
                            <div className="elementor-widget-container">
                              <div
                                className="sc_slider_controls sc_slider_controls_light slider_pagination_style_title sc_align_left"
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
                            className="elementor-element elementor-element-1a3b169 sc_fly_static elementor-widget elementor-widget-spacer"
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
                          <div
                            className="elementor-element elementor-element-6ba1525 sc_fly_static elementor-widget elementor-widget-trx_sc_button"
                            data-id="6ba1525"
                            data-element_type="widget"
                            data-widget_type="trx_sc_button.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="sc_item_button sc_button_wrap">
                                <a
                                  href="#/"
                                  className="sc_button sc_button_decoration sc_button_size_normal sc_button_icon_left"
                                >
                                  <span className="sc_button_text">
                                    <span className="sc_button_title">
                                      Learn more
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-6d65d40 elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="6d65d40"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cc88129 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="cc88129"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-1555dac sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="1555dac"
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
                            className="elementor-element elementor-element-26ab11a sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="26ab11a"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-f9396a7 elementor-section-full_width elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="f9396a7"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b319ba5 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="b319ba5"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-92a4a33 elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                            data-id="92a4a33"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5d48834 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                                data-id="5d48834"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-71104f7 sc_fly_static elementor-widget elementor-widget-trx_sc_skills"
                                    data-id="71104f7"
                                    data-element_type="widget"
                                    data-widget_type="trx_sc_skills.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="sc_skills sc_skills_counter_modern sc_skills_counter_style_counter"
                                        data-type="counter"
                                      >
                                        <div className="sc_skills_columns sc_item_columns trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                          <div className="sc_skills_column trx_addons_column-1_4 trx_addons_column-1_2-mobile">
                                            <div className="sc_skills_item_wrap sc_skills_item_icon_position_top">
                                              <div className="sc_skills_item">
                                                <div
                                                  className="sc_skills_total"
                                                  data-start={0}
                                                  data-stop={98}
                                                  data-step="0.98"
                                                  data-max={200}
                                                  data-speed={15}
                                                  data-duration={1500}
                                                  data-ed=""
                                                  data-style="counter"
                                                >
                                                  0
                                                </div>
                                              </div>
                                              <div className="sc_skills_item_title">
                                                Projects
                                              </div>
                                            </div>
                                          </div>
                                          <div className="sc_skills_column trx_addons_column-1_4 trx_addons_column-1_2-mobile">
                                            <div className="sc_skills_item_wrap sc_skills_item_icon_position_top">
                                              <div className="sc_skills_item">
                                                <div
                                                  className="sc_skills_total"
                                                  data-start={0}
                                                  data-stop={65}
                                                  data-step="0.65"
                                                  data-max={200}
                                                  data-speed={15}
                                                  data-duration={1500}
                                                  data-ed=""
                                                  data-style="counter"
                                                >
                                                  0
                                                </div>
                                              </div>
                                              <div className="sc_skills_item_title">
                                                People
                                              </div>
                                            </div>
                                          </div>
                                          <div className="sc_skills_column trx_addons_column-1_4 trx_addons_column-1_2-mobile">
                                            <div className="sc_skills_item_wrap sc_skills_item_icon_position_top">
                                              <div className="sc_skills_item">
                                                <div
                                                  className="sc_skills_total"
                                                  data-start={0}
                                                  data-stop={10}
                                                  data-step="0.1"
                                                  data-max={200}
                                                  data-speed={15}
                                                  data-duration={1500}
                                                  data-ed=""
                                                  data-style="counter"
                                                >
                                                  0
                                                </div>
                                              </div>
                                              <div className="sc_skills_item_title">
                                                Years
                                              </div>
                                            </div>
                                          </div>
                                          <div className="sc_skills_column trx_addons_column-1_4 trx_addons_column-1_2-mobile">
                                            <div className="sc_skills_item_wrap sc_skills_item_icon_position_top">
                                              <div className="sc_skills_item">
                                                <div
                                                  className="sc_skills_total"
                                                  data-start={0}
                                                  data-stop={15}
                                                  data-step="0.15"
                                                  data-max={200}
                                                  data-speed={15}
                                                  data-duration={1500}
                                                  data-ed=""
                                                  data-style="counter"
                                                >
                                                  0
                                                </div>
                                              </div>
                                              <div className="sc_skills_item_title">
                                                Offices
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-d130fdf sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="d130fdf"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-3745140 scheme_light elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id={3745140}
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1a422bc sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="1a422bc"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ac3e8f0 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="ac3e8f0"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                          <section
                            className="elementor-section elementor-inner-section elementor-element elementor-element-651e07a elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                            data-id="651e07a"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0decb98 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                                data-id="0decb98"
                                data-element_type="column"
                                style={{ padding: "10px" }}
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-997b65e sc_fly_static elementor-widget elementor-widget-trx_sc_title"
                                    data-id="997b65e"
                                    data-element_type="widget"
                                    data-widget_type="trx_sc_title.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="sc_title sc_title_default">
                                        <h1 className="sc_item_title sc_title_title sc_item_title_style_default sc_item_title_tag">
                                          <span className="sc_item_title_text">
                                            Why Choose Us?
                                          </span>
                                        </h1>
                                        <div className="sc_item_descr sc_title_descr">
                                          <p>
                                            Total Solution of Printed Circuit
                                            Boards with Consistent Quality,
                                            Appropriate Delivery & Competitive
                                            cost
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-10248ad sc_fly_static elementor-widget elementor-widget-spacer"
                                    data-id="10248ad"
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
                                    className="elementor-element elementor-element-fdb43e7 sc_fly_static elementor-widget elementor-widget-trx_sc_button"
                                    data-id="fdb43e7"
                                    data-element_type="widget"
                                    data-widget_type="trx_sc_button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="sc_item_button sc_button_wrap">
                                        <a
                                          href="/Contact"
                                          className="sc_button sc_button_decoration sc_button_size_normal sc_button_icon_left color_style_link2"
                                        >
                                          <span className="sc_button_text">
                                            <span className="sc_button_title">
                                              Contact us
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-23cb816 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                                data-id="23cb816"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-8d8d066 sc_fly_static elementor-widget elementor-widget-spacer"
                                    data-id="8d8d066"
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
                                    className="elementor-element elementor-element-bcab582 scheme_light animation_type_sequental sc_fly_static elementor-invisible elementor-widget elementor-widget-trx_sc_icons"
                                    data-id="bcab582"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"optima-fadeinup","_animation_delay":100}'
                                    data-widget_type="trx_sc_icons.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="sc_icons scheme_light sc_icons_accent2 sc_icons_size_small sc_align_none">
                                        <div className="sc_icons_item sc_icons_item_linked">
                                          <div className="sc_icons_icon ">
                                            <img
                                              src="https://www.acmecircuit.com/wp-content/uploads/2022/07/custom.svg"
                                              style={{ height: "80px" }}
                                              alt="custom-svg"
                                            />
                                          </div>
                                          <div className="sc_icons_item_details">
                                            <h4 className="sc_icons_item_title">
                                              <a href="#/">
                                                Customized Product
                                              </a>
                                            </h4>
                                            <div className="sc_icons_item_description">
                                              <span>
                                                We help each another, wherever
                                                we are. That makes perform
                                                easier.
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_icons_item sc_icons_item_linked">
                                          <div className="sc_icons_icon">
                                            <img
                                              src="https://www.acmecircuit.com/wp-content/uploads/2022/07/time-delivery.svg"
                                              style={{ height: "80px" }}
                                              alt="custom-svg"
                                            />
                                          </div>
                                          <div className="sc_icons_item_details">
                                            <h4 className="sc_icons_item_title">
                                              <a href="#/">On Time Delivery</a>
                                            </h4>
                                            <div className="sc_icons_item_description">
                                              <span>
                                                As you might assume, joining
                                                this industry provides new
                                                opportunities.
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f6a1a78 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                                data-id="f6a1a78"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-971623b scheme_light animation_type_sequental sc_fly_static elementor-invisible elementor-widget elementor-widget-trx_sc_icons"
                                    data-id="971623b"
                                    data-element_type="widget"
                                    data-settings='{"_animation":"optima-fadeinup","_animation_delay":100}'
                                    data-widget_type="trx_sc_icons.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="sc_icons scheme_light sc_icons_accent2 sc_icons_size_small sc_align_none">
                                        <div className="sc_icons_item sc_icons_item_linked">
                                          <div className="sc_icons_icon">
                                            <img
                                              src="https://www.acmecircuit.com/wp-content/uploads/2022/07/quality.svg"
                                              style={{ height: "80px" }}
                                              alt="custom-svg"
                                            />
                                          </div>
                                          <div className="sc_icons_item_details">
                                            <h4 className="sc_icons_item_title">
                                              <a href="#/">Quality Assurance</a>
                                            </h4>
                                            <div className="sc_icons_item_description">
                                              <span>
                                                You are able to easily utilize
                                                our interactive map to find the
                                                nearest office
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="sc_icons_item sc_icons_item_linked">
                                          <div className="sc_icons_icon">
                                            <img
                                              src="https://www.acmecircuit.com/wp-content/uploads/2022/07/new-technology.svg"
                                              style={{ height: "80px" }}
                                              alt="custom-svg"
                                            />
                                          </div>
                                          <div className="sc_icons_item_details">
                                            <h4 className="sc_icons_item_title">
                                              <a href="#/">New Technologies</a>
                                            </h4>
                                            <div className="sc_icons_item_description">
                                              <span>
                                                If you are in logistics, assume
                                                to work with 3-D graphics.
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div
                            className="elementor-element elementor-element-72fc5a2 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="72fc5a2"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-2053a scheme_light elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="2053a"
                    data-element_type="section"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-53fae sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="53fae"
                        data-element_type="column"
                        style={{ padding: "10px" }}
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-60d9cbb6 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="60d9cbb6"
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
                            className="elementor-element elementor-element-b29bdd8 sc_fly_static elementor-widget elementor-widget-trx_sc_title"
                            data-id="b29bdd8"
                            data-element_type="widget"
                            data-widget_type="trx_sc_title.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="sc_title sc_title_default">
                                <h1 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag">
                                  <span className="sc_item_title_text">
                                    Our Services
                                  </span>
                                </h1>
                              </div>
                              <h5>
                                <center>
                                  Specialized High Precision Printed Circuit
                                  Boards
                                </center>
                              </h5>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-a791c01 sc_height_small sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="a791c01"
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
                            className="elementor-element elementor-element-5623a59e animation_type_sequental sc_fly_static elementor-invisible elementor-widget elementor-widget-trx_sc_services"
                            data-id="5623a59e"
                            data-element_type="widget"
                            data-settings='{"_animation":"optima-fadeinup","_animation_delay":100}'
                            data-widget_type="trx_sc_services.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="sc_services sc_services_unusual sc_services_featured_top">
                                <div className="sc_services_columns_wrap sc_item_columns sc_item_posts_container sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                  <div className="trx_addons_column-1_3">
                                    <div
                                      data-post-id={951}
                                      className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation"
                                    >
                                      <div className="post_featured with_thumb hover_link sc_services_item_thumb">
                                        <LazyLoadImage
                                          src="https://i.ibb.co/gjf3X7T/image.png"
                                          className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
                                          alt=""
                                          effect="blur"
                                        />
                                        <div className="mask" />
                                      </div>
                                      <div className="sc_services_item_info">
                                        <div className="sc_services_item_header">
                                          <div className="sc_services_item_title_wrap">
                                            <h4 className="sc_services_item_title entry-title">
                                              <a href="#/">
                                                <span className="sc_services_item_number">
                                                  01.
                                                </span>
                                                <span className="sc_services_item_title_text">
                                                  PCB Assembly
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a
                                                href="#/"
                                                className="sc_services_item_more_link"
                                              >
                                                <span className="link_text">
                                                  Read More
                                                </span>
                                                <span className="link_icon" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="trx_addons_column-1_3">
                                    <div
                                      data-post-id={950}
                                      className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-950 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation"
                                    >
                                      <div className="post_featured with_thumb hover_link sc_services_item_thumb">
                                        <LazyLoadImage
                                          src="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image%5B1%5D.webp?alt=media&token=8189cad4-7d0f-4ef0-bd17-1a3b97678036"
                                          className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
                                          alt=""
                                          effect="blur"
                                        />
                                        <div className="mask" />
                                      </div>
                                      <div className="sc_services_item_info">
                                        <div className="sc_services_item_header">
                                          <div className="sc_services_item_title_wrap">
                                            <h4 className="sc_services_item_title entry-title">
                                              <a href="#/">
                                                <span className="sc_services_item_number">
                                                  02.
                                                </span>
                                                <span className="sc_services_item_title_text">
                                                  PCB Layout Services
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a
                                                href="#/"
                                                className="sc_services_item_more_link"
                                              >
                                                <span className="link_text">
                                                  Read More
                                                </span>
                                                <span className="link_icon" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="trx_addons_column-1_3">
                                    <div
                                      data-post-id={949}
                                      className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-949 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation"
                                    >
                                      <div className="post_featured with_thumb hover_link sc_services_item_thumb">
                                        <LazyLoadImage
                                          src="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image%5B1%5D%20(1).webp?alt=media&token=206ad354-c4b4-459e-a534-c9de63dea3d8"
                                          className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
                                          alt=""
                                          effect="blur"
                                        />
                                        <div className="mask" />
                                      </div>
                                      <div className="sc_services_item_info">
                                        <div className="sc_services_item_header">
                                          <div className="sc_services_item_title_wrap">
                                            <h4 className="sc_services_item_title entry-title">
                                              <a href="#/">
                                                <span className="sc_services_item_number">
                                                  03.
                                                </span>
                                                <span className="sc_services_item_title_text">
                                                  PCB Fabrication
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a
                                                href="#/"
                                                className="sc_services_item_more_link"
                                              >
                                                <span className="link_text">
                                                  Read More
                                                </span>
                                                <span className="link_icon" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-4099032f sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="4099032f"
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
                            className="elementor-element elementor-element-d64a1 sc_fly_static elementor-widget elementor-widget-trx_sc_button"
                            data-id="d64a1"
                            data-element_type="widget"
                            data-widget_type="trx_sc_button.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="sc_item_button sc_button_wrap sc_align_center">
                                <a
                                  href="#/"
                                  className="sc_button sc_button_decoration sc_button_size_normal sc_button_icon_left"
                                >
                                  <span className="sc_button_text">
                                    <span className="sc_button_title">
                                      View More
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-238a2384 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="238a2384"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-a105360 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="a105360"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-no">
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-f470813 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="f470813"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-ab8b13f sc_fly_static elementor-widget elementor-widget-image"
                            data-id="ab8b13f"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                width={190}
                                height={78}
                                src="https://shop.orientelectric.com/cdn/shop/files/Orient_Logo_2x_4199ff28-fbc7-4423-a29f-a8ee9ed6f077.png?height=628&pad_color=fff&v=1669057700&width=1200"
                                className="attachment-full size-full wp-image-33974"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-489b842 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="489b842"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-17a233e sc_fly_static elementor-widget elementor-widget-image"
                            data-id="17a233e"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                loading="lazy"
                                width={190}
                                height={78}
                                src="https://static.brandirectory.com/logos/panc002_panasonic.jpg"
                                className="attachment-full size-full wp-image-33975"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-d53ba51 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="d53ba51"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-be688af sc_fly_static elementor-widget elementor-widget-image"
                            data-id="be688af"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                loading="lazy"
                                width={190}
                                height={78}
                                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Syska_logo_in_RED_R.png"
                                className="attachment-full size-full wp-image-33970"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-94de91f sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="94de91f"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-64e3f49 sc_fly_static elementor-widget elementor-widget-image"
                            data-id="64e3f49"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                loading="lazy"
                                width={190}
                                height={78}
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Havells_Logo.svg/2560px-Havells_Logo.svg.png"
                                className="attachment-full size-full wp-image-33971"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-33654b8 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="33654b8"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-374fe4c sc_fly_static elementor-widget elementor-widget-image"
                            data-id="374fe4c"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                loading="lazy"
                                width={190}
                                height={78}
                                src="https://kikkidu.com/wp-content/uploads/2011/04/bajajElectricals.jpg"
                                className="attachment-full size-full wp-image-33972"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-685520d sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="685520d"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-9d9c518 sc_fly_static elementor-widget elementor-widget-image"
                            data-id="9d9c518"
                            data-element_type="widget"
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <img
                                decoding="async"
                                loading="lazy"
                                width={190}
                                height={78}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZSUumQxhBbmGUPpnkcttClY6al9x58WtUg&usqp=CAU"
                                className="attachment-full size-full wp-image-33973"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-48642f6 elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static"
                    data-id="48642f6"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3322739 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id={3322739}
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-7a3f440 sc_height_huge sc_fly_static elementor-widget elementor-widget-spacer"
                            data-id="7a3f440"
                            data-element_type="widget"
                            data-widget_type="spacer.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer">
                                <div className="elementor-spacer-inner" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
