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
import { Helmet } from "react-helmet";
import { ArrowRight } from "phosphor-react";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - NJ Automation</title>
        <meta property="og:site_name" content="NJ Automations" />
        <meta property="og:url" content="https://njautomation.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image-removebg-preview%5B1%5D.webp?alt=media&token=f624d0a0-f802-4e8e-9114-9534a862fc52"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Explore a wide range of high-quality PCB boards for your electronics projects at our e-commerce store. Find custom-designed printed circuit boards (PCBs) in various sizes and specifications. From prototype to production, we offer reliable and efficient solutions for electronic enthusiasts, hobbyists, and businesses. Shop now for top-notch PCBs to bring your innovations to life."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, custom PCB, electronic components, circuit board design, PCB fabrication, prototype boards, electronic projects, circuit board shop, PCB manufacturing, NJ Automation, NJAutomations"
        ></meta>
        <meta property="og:title" content="Home - NJ Automation"></meta>
        <meta
          property="og:description"
          content="Explore a wide range of high-quality PCB boards for your electronics projects at our e-commerce store. Find custom-designed printed circuit boards (PCBs) in various sizes and specifications. From prototype to production, we offer reliable and efficient solutions for electronic enthusiasts, hobbyists, and businesses. Shop now for top-notch PCBs to bring your innovations to life."
        ></meta>
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image-removebg-preview%5B1%5D.webp?alt=media&token=f624d0a0-f802-4e8e-9114-9534a862fc52"
        ></meta>
        <link rel="canonical" href="https://njautomation.in"></link>
        <meta
          http-equiv="Cache-Control"
          content="public, max-age=31536000. must-revalidate"
        />
      </Helmet>
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
                        src={
                          process.env.PUBLIC_URL + "/assets/20220719[1][1].webp"
                        }
                        alt="herobanner"
                        height={80}
                        width={140}
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
                      {window.innerWidth > 768 ? (
                        <>
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
                                          className="slider_outer slider_swiper_outer slider_style_default slider_source_custom slider_outer_direction_horizontal slider_outer_one slider_outer_nopagination slider_outer_nocontrols slider_outer_nocentered slider_outer_overflow_hidden slider_outer_notitles "
                                        >
                                          <div
                                            id="controller-tools-3_sc_swiper"
                                            className=""
                                          >
                                            <div className="slider-wrapper swiper-wrapper">
                                              <LazyLoadImage
                                                src="https://firebasestorage.googleapis.com/v0/b/njautomation-99e2a.appspot.com/o/ezgif.com-jpg-to-avif-converted.avif?alt=media&token=c602c994-4791-401b-834f-e20b2448ca40"
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
                        </>
                      ) : (
                        <></>
                      )}

                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c05f288 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="c05f288"
                        data-element_type="column"
                        id="About"
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
                                    Your trusted partner in electronic circuit
                                    board manufacturing. At NJ Automations, we
                                    are passionate about precision and
                                    innovation in the world of electronics. Our
                                    commitment to quality and cutting-edge
                                    technology has made us a leader in the
                                    industry.
                                  </p>
                                  <p>
                                    As you navigate through our website, you'll
                                    discover the expertise, dedication, and
                                    state-of-the-art facilities that define us.
                                    Whether you're an industry professional, an
                                    entrepreneur with a vision, or an enthusiast
                                    exploring the world of electronics, we're
                                    here to meet your circuit board
                                    manufacturing needs.
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
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c05f288 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static"
                        data-id="c05f288"
                        data-element_type="column"
                        id="About"
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
                                    Vission
                                  </span>
                                </h1>
                                <div className="sc_item_descr sc_title_descr">
                                  <p>
                                    Our aim is to become a globally recognized
                                    brand, offering economical electronic
                                    circuit board solutions, with an enduring
                                    dedication to exceeding customer
                                    expectations.
                                  </p>
                                </div>
                                <br />
                                <h1 className="sc_item_title sc_title_title sc_item_title_style_default sc_item_title_tag">
                                  <span className="sc_item_title_text">
                                    Mission
                                  </span>
                                </h1>
                                <div className="sc_item_descr sc_title_descr">
                                  <p>
                                    Our mission is to empower innovation and
                                    technological advancement by delivering
                                    cutting-edge electronic circuit board
                                    solutions that exceed industry standards. We
                                    are dedicated to fostering success among our
                                    partners and customers through unwavering
                                    quality, sustainability, and
                                    customer-centric collaboration.
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
                        </div>
                      </div>

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
                                      <div className="slider-wrapper swiper-wrapper">
                                        <LazyLoadImage
                                          src="https://firebasestorage.googleapis.com/v0/b/njautomation-99e2a.appspot.com/o/a47l0-p3xzh.avif?alt=media&token=2d782211-0844-4db3-9ff1-6efcf361d8b7"
                                          alt="header-Img"
                                          effect="blur"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </aside>
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
                                                  25
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
                                                  39
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
                                                  3
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
                                                  2
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
                                          href="https://merchant.razorpay.com/policy/N9455Bmo10Euj4/contact_us"
                                          className="sc_button"
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
                                              src="/assets/custom[2].svg"
                                              alt="custom-svg"
                                              height={30}
                                              width={60}
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
                                              src="/assets/time-delivery[1].svg"
                                              alt="custom-svg"
                                              height={30}
                                              width={60}
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
                                              src="/assets/quality[1].svg"
                                              height={30}
                                              width={60}
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
                                              src="/assets/new-technology[1].svg"
                                              height={30}
                                              width={60}
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
                                          src="assets/6f1886097e18fbea10709a6e6037fc27[1].jpg"
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
                                              <a href="/Service/01">
                                                <span className="sc_services_item_number">
                                                  01.
                                                </span>
                                                <span className="sc_services_item_title_text">
                                                  PCB Assembly
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a href="/Service/01">
                                                <span className="link_text">
                                                  <ArrowRight size={24} />
                                                </span>
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
                                          src="assets/image[2].png"
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
                                                  PROGRAMMING AND TESTING
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a href="/Service/02">
                                                <span className="link_text">
                                                  <ArrowRight size={24} />
                                                </span>
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
                                          src="assets/5076f849b5ebf4c6caf3ec1fe821c638[1].jpg"
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
                                              <a href={"/Service/03"}>
                                                <span className="sc_services_item_number">
                                                  03.
                                                </span>
                                                <span className="sc_services_item_title_text">
                                                  Embedded Systems
                                                </span>
                                              </a>
                                            </h4>
                                            <div className="sc_services_item_button sc_item_button">
                                              <a href={"/Service/03"}>
                                                <span className="link_text">
                                                  <ArrowRight size={24} />
                                                </span>
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
                                <a href="/Services" className="sc_button">
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
                  {/* 
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
                  </section> */}
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
