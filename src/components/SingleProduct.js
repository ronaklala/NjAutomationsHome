import React, { useEffect, useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import { useParams } from "react-router-dom";
import "./css/product.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";
import { getSingleProduct } from "./Api";
import { useQuery } from "react-query";
import SingleRelatedProduct from "./ChilComponents/SingleRelatedProduct";
import Spinner from "./Spinner";
import { DownloadSimple } from "phosphor-react";

const SingleProduct = () => {
  let params = useParams();

  let [finalUrl, setFinalUri] = useState();

  const { isLoading, data } = useQuery(
    ["singleProduct", params.id],

    () => getSingleProduct(params.id),
    {
      onError: (err) => {
        window.location.href = "/Not-Found";
      },
    },
    {
      cacheTime: 5000,
    }
  );

  useEffect(() => {
    let url = window.location.pathname;
    setFinalUri(url.toLowerCase().includes("view") ? true : false);
  }, []);

  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    return modifiedUrl;
  };

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
                        {isLoading ? (
                          <>
                            {" "}
                            <Spinner class="orange" />
                            <br />
                            <br />
                          </>
                        ) : (
                          <>
                            <Helmet>
                              <title>{data.data.product.name}</title>
                              <meta
                                name="description"
                                content={data.data.product.description}
                              />
                              <meta
                                property="og:site_name"
                                content="NJ Automations"
                              />
                              <meta
                                property="og:url"
                                content={
                                  "https://njautomation.in/product" +
                                  data.data.product._id
                                }
                              />
                              <meta property="og:type" content="website" />
                              <meta
                                property="og:image"
                                content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
                              />
                              <meta
                                name="twitter:card"
                                content="summary_large_image"
                              />
                              <meta name="robots" content="index,follow" />
                              <meta
                                name="keywords"
                                content={
                                  "PCB boards, printed circuit boards, custom PCB, electronic components, circuit board design, PCB fabrication, prototype boards, electronic projects, circuit board shop, PCB manufacturing, NJ Automation, NJAutomations," +
                                  data.data.product.name
                                }
                              ></meta>
                              <meta
                                property="og:title"
                                content={data.data.product.name}
                              ></meta>
                              <meta
                                property="og:description"
                                content={data.data.product.description}
                              ></meta>
                              <meta
                                property="og:image"
                                content={data.data.product.image}
                              ></meta>
                              <link
                                rel="canonical"
                                href={
                                  "https://njautomation.in/product" +
                                  data.data.product._id
                                }
                              ></link>
                              <meta
                                http-equiv="Cache-Control"
                                content="public, max-age=31536000. must-revalidate"
                              />
                            </Helmet>
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
                                              "url(" +
                                              addETrimToUrl(
                                                data.data.product.image
                                              ) +
                                              ")",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "contain",
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
                        )}
                      </div>
                    </div>
                  </div>
                  {isLoading ? (
                    <></>
                  ) : (
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
                                  {data.data.product.name}
                                </h1>
                                <br />
                                {finalUrl ? (
                                  <> </>
                                ) : (
                                  <>
                                    {" "}
                                    <p
                                      className="price"
                                      style={{
                                        fontSize: "20px",
                                        color: "red",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <s>
                                            <span className="woocommerce-Price-currencySymbol">
                                              Rs{" "}
                                            </span>
                                            {data.data.product.price}
                                          </s>
                                        </bdi>
                                      </span>{" "}
                                      –{" "}
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            Rs{" "}
                                          </span>
                                          {data.data.product.disc_price}
                                        </bdi>
                                      </span>
                                    </p>
                                  </>
                                )}

                                <div class="product_meta">
                                  {parseInt(data.data.product.qty) !== 0 ? (
                                    <>
                                      <span
                                        class="product_id"
                                        style={{ color: "green" }}
                                      >
                                        In Stock
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <span
                                        class="product_id"
                                        style={{ color: "red" }}
                                      >
                                        Sold Out
                                      </span>
                                    </>
                                  )}
                                </div>
                                <br />

                                <br />
                                <div class="product_meta">
                                  <span class="product_id">
                                    Product ID:{" "}
                                    <span>{data.data.product._id}</span>
                                  </span>
                                </div>
                                <br />

                                <p
                                  style={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {data.data.product.description}
                                </p>
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
                          {data.data.product.detail !== undefined ? (
                            <>
                              {" "}
                              <div
                                className="elementor-element elementor-element-6ba1525 sc_fly_static elementor-widget elementor-widget-trx_sc_button trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                data-id="6ba1525"
                                data-element_type="widget"
                                data-widget_type="trx_sc_button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="sc_item_button sc_button_wrap">
                                    <a
                                      href={data.data.product.detail}
                                      download={data.data.product.detail}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="button"
                                    >
                                      <span className="sc_button_text">
                                        <span
                                          className="sc_button_title"
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          View Brochoure &nbsp;&nbsp;&nbsp;
                                          <DownloadSimple size={20} />
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <br />
                              <br />
                              <br />
                            </>
                          ) : (
                            <></>
                          )}{" "}
                          {!finalUrl ? (
                            <>
                              {parseInt(data.data.product.qty) !== 0 ? (
                                <>
                                  <div
                                    className="elementor-element elementor-element-6ba1525 sc_fly_static elementor-widget elementor-widget-trx_sc_button trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                                    data-id="6ba1525"
                                    data-element_type="widget"
                                    data-widget_type="trx_sc_button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="sc_item_button sc_button_wrap">
                                        <a
                                          href={
                                            "/checkout/" + data.data.product._id
                                          }
                                          className="sc_button"
                                        >
                                          <span className="sc_button_text">
                                            <span className="sc_button_title">
                                              Buy Now
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                          <br />
                          <br />
                          <br />
                          <br />
                          {data.data.product?.additionalData !== undefined ? (
                            <>
                              <div>
                                {" "}
                                <h1 style={{ fontSize: "20px" }}>
                                  Additional Details
                                </h1>
                                <br />
                                <table className="additional-details-table">
                                  {data.data.product.additionalData?.p1 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p1</th>
                                        <td>
                                          {data.data.product.additionalData.p1}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.data.product.additionalData?.p2 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p2</th>
                                        <td>
                                          {data.data.product.additionalData.p2}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.data.product.additionalData?.p3 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p3</th>
                                        <td>
                                          {data.data.product.additionalData.p3}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.data.product.additionalData?.p4 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p4</th>
                                        <td>
                                          {data.data.product.additionalData.p4}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.data.product.additionalData?.p5 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p5</th>
                                        <td>
                                          {data.data.product.additionalData.p5}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.data.product.additionalData?.p6 !==
                                  undefined ? (
                                    <>
                                      <tr>
                                        <th>p6</th>
                                        <td>
                                          {data.data.product.additionalData.p6}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </table>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </section>

            {finalUrl ? (
              <></>
            ) : (
              <>
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
                                              Related Products
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
                                      {isLoading ? (
                                        <>
                                          {" "}
                                          <Spinner class="orange" />
                                          <br />
                                          <br />
                                        </>
                                      ) : (
                                        <>
                                          <div className="elementor-widget-container">
                                            <div className="sc_services sc_services_unusual sc_services_featured_top">
                                              <div className="sc_services_columns_wrap sc_item_columns sc_item_posts_container sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                                {data.data.relatedProducts.map(
                                                  (r, i) => (
                                                    <>
                                                      <SingleRelatedProduct
                                                        product={r}
                                                      />
                                                    </>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          </div>
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
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
