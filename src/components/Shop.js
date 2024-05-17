import React, { useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import "./css/About.css";
import "react-toastify/dist/ReactToastify.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner";
import { Helmet } from "react-helmet";
import { useGetProducts } from "./Api";
import SingleShopProduct from "./ChilComponents/SingleShopProduct";
import "./css/product.css";

const Shop = () => {
  const [input, setInput] = useState("");

  const { isLoading, isError, data } = useGetProducts();

  if (isError) {
    toast.error("Internal Server Error");
  }

  let filteredData = data || [];

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    const lowerInput = input.toLowerCase();
    filteredData = filteredData.filter((category) =>
      category.name.toLowerCase().includes(lowerInput)
    );
  }

  return (
    <>
      <Helmet>
        <title>Shop - NJ Automation</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NJ Automations" />
        <meta property="og:url" content="https://njautomation.in/Shop" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
        />
        <meta
          name="description"
          content="Explore a wide range of high-quality PCB boards for your electronics projects at our e-commerce store. Find custom-designed printed circuit boards (PCBs) in various sizes and specifications. From prototype to production, we offer reliable and efficient solutions for electronic enthusiasts, hobbyists, and businesses. Shop now for top-notch PCBs to bring your innovations to life."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, custom PCB, electronic components, circuit board design, PCB fabrication, prototype boards, electronic projects, circuit board shop, PCB manufacturing, NJ Automation, NJAutomations"
        ></meta>
        <meta property="og:title" content="Shop - NJ Automation"></meta>
        <meta
          property="og:description"
          content="Explore a wide range of high-quality PCB boards for your electronics projects at our e-commerce store. Find custom-designed printed circuit boards (PCBs) in various sizes and specifications. From prototype to production, we offer reliable and efficient solutions for electronic enthusiasts, hobbyists, and businesses. Shop now for top-notch PCBs to bring your innovations to life."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
        ></meta>
        <link rel="canonical" href="https://njautomation.in/Shop"></link>
        <meta
          http-equiv="Cache-Control"
          content="public, max-age=31536000. must-revalidate"
        />
      </Helmet>
      <div className="body_wrap">
        <div className="page_wrap">
          <Header />
          <MobileMenu />

          <div
            data-elementor-type="cpt_layouts"
            data-elementor-id={29636}
            className="elementor elementor-29636"
          >
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-2e029f03 elementor-section-full_width elementor-section-content-middle scheme_dark elementor-section-height-default elementor-section-height-default sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
              data-id="2e029f03"
              data-element_type="section"
              data-settings='{"background_background":"classic"}'
            >
              <br />
              <br />
              <br />
              <br />
              <center>
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a product..."
                    onChange={handleSearch}
                  />
                </div>
                <br />
              </center>
              <div class="slider-text"></div>
            </section>
          </div>

          <div className="page_content_wrap">
            <div className="content_wrap_fullscreen">
              <div className="content">
                <article
                  id="post-29507"
                  className="post_item_single post_type_page post-29507 page type-page status-publish hentry"
                >
                  <div className="post_content entry-content">
                    <div
                      data-elementor-type="wp-page"
                      data-elementor-id={29507}
                      className="elementor elementor-29507"
                    >
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
                                        Shop Now
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
                                {isLoading !== true ? (
                                  <>
                                    {filteredData.length !== 0 ? (
                                      <>
                                        <div className="elementor-widget-container">
                                          <div className="sc_services sc_services_unusual sc_services_featured_top">
                                            <div className="sc_services_columns_wrap sc_item_columns sc_item_posts_container sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                              {filteredData.map((prod, i) => (
                                                <SingleShopProduct
                                                  product={prod}
                                                />
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <h1 style={{ fontSize: "32px" }}>
                                          No Products Listed Yet
                                        </h1>
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <Spinner class="orange" />
                                  </>
                                )}
                              </div>

                              <br />
                              <br />
                              <br />

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
                </article>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Shop;
