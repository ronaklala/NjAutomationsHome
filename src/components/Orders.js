import React, { useEffect, useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment/moment";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Orders = () => {
  const [orders, setOrders] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/login";
    } else {
      const userdata = JSON.parse(localStorage.getItem("user"));
      const userId = userdata._id;
      if (userId !== "") {
        axios
          .get(
            "https://nj-automations-api.vercel.app/api/user/orders/" + userId
          )
          .then((res) => {
            setOrders(res.data);
            setLoading(false);
          })
          .catch((err) => {
            toast.error("Internal Server Error");
          });
      }
    }
  }, []);

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
                      <div
                        className="posts_container band_wrap band_1 inited_open_full_post"
                        style={{ width: "100%" }}
                      >
                        {!loading ? (
                          <>
                            {orders.map((o, i) => (
                              <>
                                <article
                                  id="post-2588"
                                  data-post-id={2588}
                                  className="post_item post_item_container post_layout_band post_format_standard post-2588 post type-post status-publish format-standard has-post-thumbnail hentry category-factory tag-engineering tag-steel"
                                >
                                  <div
                                    className="post_featured with_thumb hover_link post_featured_bg"
                                    data-ratio="1:1"
                                  >
                                    <LazyLoadImage
                                      alt={o.productDetails[0].image}
                                      effect="blur"
                                      src={o.productDetails[0].image}
                                      style={{ maxHeight: "250px" }}
                                    />
                                    <span className="post_thumb post_thumb_bg bg_in optima_inline_1144827720" />{" "}
                                    <div className="mask" />
                                  </div>
                                  <div className="post_content_wrap">
                                    {" "}
                                    <div className="post_header entry-header">
                                      <div className="post_category">
                                        <div className="post_meta">
                                          <span className="post_meta_item post_categories">
                                            <a href="#/" rel="category tag">
                                              {o.status}
                                            </a>
                                          </span>
                                        </div>{" "}
                                      </div>
                                      <h4 className="post_title entry-title">
                                        {o.productDetails[0].name}
                                      </h4>{" "}
                                    </div>
                                    <div className="post_content entry-content">
                                      <div className="post_content_inner">
                                        {o.address}
                                      </div>{" "}
                                    </div>
                                    <div className="post_meta">
                                      <span className="post_meta_item post_date">
                                        Ordered on{" "}
                                        {moment(o.createdAt).format("LLL")}
                                      </span>
                                    </div>{" "}
                                  </div>
                                </article>
                              </>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
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

export default Orders;
