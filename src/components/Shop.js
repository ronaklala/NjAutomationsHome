import React, { useEffect, useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import "./css/About.css";
import "react-toastify/dist/ReactToastify.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Shop = () => {
  const [products, setProducts] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nj-automations-api.vercel.app/api/admin/getProducts")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);

  return (
    <>
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

              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3777cff7 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                  data-id="3777cff7"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <section
                      className="elementor-section elementor-inner-section elementor-element elementor-element-1f5c6374 elementor-section-full_width elementor-section-height-default elementor-section-height-default sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                      data-id="1f5c6374"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-extended">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-70af868d sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                          data-id="70af868d"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                              className="sc_layouts_item elementor-element elementor-element-8be62e9 sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                              data-id="8be62e9"
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
                              className="sc_layouts_item elementor-element elementor-element-3a23f47 sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_title trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                              data-id="3a23f47"
                              data-element_type="widget"
                              data-widget_type="trx_sc_layouts_title.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="sc_layouts_title sc_align_center with_content without_image without_tint">
                                  <div className="sc_layouts_title_content">
                                    <div className="sc_layouts_title_title">
                                      <h1 className="sc_layouts_title_caption">
                                        Shop Now
                                      </h1>
                                    </div>
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              className="sc_layouts_item elementor-element elementor-element-15ba241 sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                              data-id="15ba241"
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
                              className="sc_layouts_item elementor-element elementor-element-be37a2c elementor-view-default sc_fly_static elementor-widget elementor-widget-icon trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                              data-id="be37a2c"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14.626"
                                      height="8.639"
                                      viewBox="0 0 14.626 8.639"
                                    >
                                      <g
                                        id="down-arrow"
                                        transform="translate(0 -70.698)"
                                      >
                                        <g
                                          id="Group_8820"
                                          data-name="Group 8820"
                                          transform="translate(0 100.698)"
                                        >
                                          <path
                                            id="Path_6507"
                                            data-name="Path 6507"
                                            d="M14.392,101.42l-.479-.482a.8.8,0,0,0-1.132,0L7.316,106.4l-5.472-5.472a.8.8,0,0,0-1.132,0l-.479.479a.8.8,0,0,0,0,1.131l6.515,6.538a.818.818,0,0,0,.567.257h0a.818.818,0,0,0,.566-.257l6.508-6.52a.808.808,0,0,0,.234-.571A.8.8,0,0,0,14.392,101.42Z"
                                            transform="translate(0 -130.698)"
                                          />
                                        </g>
                                      </g>
                                    </svg>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="sc_layouts_item elementor-element elementor-element-409d55f sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                              data-id="409d55f"
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
                                        Our Products
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
                                {loading !== true ? (
                                  <>
                                    <div className="elementor-widget-container">
                                      <div className="sc_services sc_services_unusual sc_services_featured_top">
                                        <div className="sc_services_columns_wrap sc_item_columns sc_item_posts_container sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                          {products.map((prod, i) => (
                                            <div className="trx_addons_column-1_3">
                                              <div className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation">
                                                <div className="post_featured with_thumb hover_link sc_services_item_thumb">
                                                  <img
                                                    loading="lazy"
                                                    width={890}
                                                    height={664}
                                                    src={prod.image}
                                                    className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
                                                    alt=""
                                                    decoding="async"
                                                  />
                                                  <div className="mask" />
                                                </div>
                                                <div className="sc_services_item_info">
                                                  <div className="sc_services_item_header">
                                                    <div class="post_data_inner">
                                                      <div class="post_header entry-header">
                                                        <h4 class="woocommerce-loop-product__title">
                                                          <a
                                                            href={
                                                              "/product/" +
                                                              prod._id
                                                            }
                                                          >
                                                            {prod.name}
                                                          </a>
                                                        </h4>{" "}
                                                      </div>
                                                      <div class="price_wrap">
                                                        <span class="price">
                                                          <span class="woocommerce-Price-amount amount">
                                                            <bdi>
                                                              <span class="woocommerce-Price-currencySymbol">
                                                                ₹
                                                              </span>
                                                              {prod.disc_price}
                                                            </bdi>
                                                          </span>{" "}
                                                          –{" "}
                                                          <span class="woocommerce-Price-amount amount">
                                                            <bdi>
                                                              <span class="woocommerce-Price-currencySymbol">
                                                                ₹
                                                              </span>
                                                              <s>
                                                                {prod.price}
                                                              </s>
                                                            </bdi>
                                                          </span>
                                                        </span>
                                                      </div>
                                                      <a
                                                        href={
                                                          "/product/" + prod._id
                                                        }
                                                        data-quantity="1"
                                                        class="button product_type_variable add_to_cart_button"
                                                        data-product_id="27614"
                                                        data-product_sku="012"
                                                        aria-label="Select options for “Adhesive tape”"
                                                        aria-describedby="This product has multiple variants. The options may be chosen on the product page"
                                                        rel="nofollow"
                                                      >
                                                        Buy now
                                                      </a>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>Loading</>
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
