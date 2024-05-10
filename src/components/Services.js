import React from "react";
import Footer from "../shared/footer";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import services from "./mock/services";
import { Helmet } from "react-helmet";
import SingleService from "./ChilComponents/SingleService";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
        <meta property="og:site_name" content="NJ Automations" />
        <meta property="og:url" content="https://njautomation.in/Services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Explore our comprehensive PCB services at Nj Automations. We specialize in PCB Assembly, Programming and Testing, Electronic Component Supply, Electronic Cable Assembly, PCB Layout, and PCB Fabrication. Trust us for end-to-end solutions, ensuring top-notch quality and precision in every electronic component. Discover the excellence of our services and elevate your electronic projects with Nj Automations."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, custom PCB, electronic components, circuit board design, PCB fabrication, prototype boards, electronic projects, circuit board shop, PCB manufacturing, NJ Automation, NJAutomations"
        ></meta>
        <meta property="og:title" content="Our Services"></meta>
        <meta
          property="og:description"
          content="Explore our comprehensive PCB services at Nj Automations. We specialize in PCB Assembly, Programming and Testing, Electronic Component Supply, Electronic Cable Assembly, PCB Layout, and PCB Fabrication. Trust us for end-to-end solutions, ensuring top-notch quality and precision in every electronic component. Discover the excellence of our services and elevate your electronic projects with Nj Automations."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
        ></meta>
        <link rel="canonical" href="https://njautomation.in/Services"></link>
      </Helmet>
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
            {" "}
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
                            {services.map((s) => (
                              <>
                                <SingleService service={s} />
                              </>
                            ))}
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
