import React, { useEffect, useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import { useParams } from "react-router-dom";
import "./css/product.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";
import { useGetSingleProduct } from "./Api";
import SingleRelatedProduct from "./ChilComponents/SingleRelatedProduct";
import { DownloadSimple } from "phosphor-react";
import ContentLoader from "react-content-loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleProduct = () => {
  let params = useParams();

  let [finalUrl, setFinalUri] = useState();

  const { isLoading, data } = useGetSingleProduct(params.id);

  useEffect(() => {
    let url = window.location.pathname;
    setFinalUri(url.toLowerCase().includes("view") ? true : false);

    if (data && data.product && data.product.productImages) {
      setSelectedImage(addETrimToUrl(data.product.productImages[0]));
    }
  }, [data]);

  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    return modifiedUrl;
  };

  const [selectedImage, setSelectedImage] = useState();

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
                          <> </>
                        ) : (
                          <>
                            <Helmet>
                              <title>{data.product.name}</title>
                              <meta
                                name="description"
                                content={data.product.description}
                              />
                              <meta
                                property="og:site_name"
                                content="NJ Automations"
                              />
                              <meta
                                property="og:url"
                                content={
                                  "https://njautomation.in/product" +
                                  data.product._id
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
                                  data.product.name
                                }
                              ></meta>
                              <meta
                                property="og:title"
                                content={data.product.name}
                              ></meta>
                              <meta
                                property="og:description"
                                content={data.product.description}
                              ></meta>
                              <meta
                                property="og:image"
                                content={data.product.image}
                              ></meta>
                              <link
                                rel="canonical"
                                href={
                                  "https://njautomation.in/product" +
                                  data.product._id
                                }
                              ></link>
                              <meta
                                http-equiv="Cache-Control"
                                content="public, max-age=31536000. must-revalidate"
                              />
                            </Helmet>
                            <div className="elementor-widget-container">
                              <div className="product-slider">
                                <div className="thumbnails">
                                  {data.product.productImages.map(
                                    (image, index) => (
                                      <LazyLoadImage
                                        key={index}
                                        src={addETrimToUrl(image)}
                                        effect="blur"
                                        alt={`Thumbnail`}
                                        className={`thumbnail ${
                                          image === selectedImage
                                            ? "active"
                                            : ""
                                        }`}
                                        onClick={() =>
                                          setSelectedImage(addETrimToUrl(image))
                                        }
                                      />
                                    )
                                  )}
                                </div>
                                <div className="main-image">
                                  <LazyLoadImage
                                    effect="blur"
                                    src={selectedImage}
                                    alt="Selected"
                                  />
                                </div>
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
                                    lineHeight: "30px",
                                  }}
                                >
                                  {data.product.name}
                                </h1>
                                <br />
                                <p className="product_description">
                                  {data.product.description}
                                </p>
                                <br />
                                {finalUrl ? (
                                  <> </>
                                ) : (
                                  <>
                                    {" "}
                                    <p
                                      className="price"
                                      style={{
                                        fontSize: "24px",
                                        color: "#000",
                                      }}
                                    >
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            Rs{" "}
                                          </span>
                                          {data.product.disc_price}
                                        </bdi>
                                      </span>
                                      &nbsp;&nbsp;
                                      <span
                                        style={{
                                          fontSize: "18px",
                                          color: "#002BAD",
                                          backgroundColor: "#DDE6FF",
                                          padding: "5px",
                                          borderRadius: "5px",
                                        }}
                                      >
                                        {Math.floor(
                                          ((data.product.price -
                                            data.product.disc_price) /
                                            data.product.price) *
                                            100
                                        )}
                                        % Off
                                      </span>
                                    </p>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <s
                                          style={{
                                            color: "#7d7d7d",
                                            fontSize: "16px",
                                          }}
                                        >
                                          <span className="woocommerce-Price-currencySymbol">
                                            Rs{" "}
                                          </span>
                                          {data.product.price}
                                        </s>
                                      </bdi>
                                    </span>{" "}
                                    <br />
                                    <br />
                                  </>
                                )}

                                <div class="product_meta">
                                  {parseInt(data.product.qty) !== 0 ? (
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
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              alignItems: "center",
                            }}
                          >
                            {!finalUrl ? (
                              <>
                                {parseInt(data.product.qty) !== 0 ? (
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
                                              "/checkout/" + data.product._id
                                            }
                                            className="sc_button"
                                            style={{ borderRadius: "5px" }}
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
                            &nbsp; &nbsp;
                            {data.product.detail !== null ? (
                              <>
                                {" "}
                                <a
                                  href={data.product.detail}
                                  download={data.product.detail}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="button"
                                >
                                  <button
                                    className="sc_button"
                                    style={{
                                      width: "200px",
                                      margin: "0",
                                      borderRadius: "5px",
                                      fontFamily: "'Quicksand', sans-serif",
                                      fontWeight: 600,
                                    }}
                                  >
                                    View Brochoure
                                    <DownloadSimple size={20} color="white" />
                                  </button>
                                </a>
                              </>
                            ) : (
                              <></>
                            )}{" "}
                          </div>
                          {data.product.additionalData !== null ? (
                            <>
                              <div>
                                {" "}
                                <br />
                                <table className="additional-details-table">
                                  {data.product.additionalData?.p1 !== null ? (
                                    <>
                                      <tr>
                                        <th>p1</th>
                                        <td>
                                          {data.product.additionalData.p1}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.product.additionalData?.p2 !== null ? (
                                    <>
                                      <tr>
                                        <th>p2</th>
                                        <td>
                                          {data.product.additionalData.p2}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.product.additionalData?.p3 !== null ? (
                                    <>
                                      <tr>
                                        <th>p3</th>
                                        <td>
                                          {data.product.additionalData.p3}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.product.additionalData?.p4 !== null ? (
                                    <>
                                      <tr>
                                        <th>p4</th>
                                        <td>
                                          {data.product.additionalData.p4}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.product.additionalData?.p5 !== null ? (
                                    <>
                                      <tr>
                                        <th>p5</th>
                                        <td>
                                          {data.product.additionalData.p5}
                                        </td>
                                      </tr>
                                    </>
                                  ) : (
                                    <></>
                                  )}

                                  {data.product.additionalData?.p6 !== null ? (
                                    <>
                                      <tr>
                                        <th>p6</th>
                                        <td>
                                          {data.product.additionalData.p6}
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
                                          {window.innerWidth < 768 ? (
                                            <>
                                              <div
                                                style={{
                                                  width: "80%",
                                                  height: "auto",
                                                  margin: "0 auto",
                                                }}
                                              >
                                                <ContentLoader
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 1280 1450"
                                                  backgroundColor="#f3f3f3"
                                                  foregroundColor="#fff"
                                                >
                                                  <rect
                                                    x="1%"
                                                    y="7.73%"
                                                    rx="2"
                                                    ry="2"
                                                    width="100%"
                                                    height="85%"
                                                  />
                                                </ContentLoader>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div
                                                style={{
                                                  width: "100%",
                                                  height: "auto",
                                                  margin: "0 auto",
                                                }}
                                              >
                                                <ContentLoader
                                                  width="100%"
                                                  height="auto"
                                                  viewBox="0 0 1280 540"
                                                  backgroundColor="#f3f3f3"
                                                  foregroundColor="#ecebeb"
                                                >
                                                  <rect
                                                    x="1%"
                                                    y="7.73%"
                                                    rx="2"
                                                    ry="2"
                                                    width="35%"
                                                    height="85%"
                                                  />
                                                </ContentLoader>
                                              </div>
                                            </>
                                          )}
                                        </>
                                      ) : (
                                        <>
                                          <div className="elementor-widget-container">
                                            <div className="sc_services sc_services_unusual sc_services_featured_top">
                                              <div className="sc_services_columns_wrap sc_item_columns sc_item_posts_container sc_item_columns_3 trx_addons_columns_wrap columns_padding_bottom columns_in_single_row">
                                                {data.relatedProducts.map(
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
