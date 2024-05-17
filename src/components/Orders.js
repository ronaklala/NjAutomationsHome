import React from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import Footer from "../shared/footer";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "./Spinner";
import { Helmet } from "react-helmet";
import SingleOrder from "./ChilComponents/SingleOrder";
import { useGetOrdersHook } from "./Api";

const Orders = () => {
  const { isLoading, data } = useGetOrdersHook();

  console.log(data);

  return (
    <>
      <Helmet>
        <title>Orders</title>

        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, electronic components, PCB manufacturing, circuit board assembly, customer login, e-commerce platform, technology solutions, electronics manufacturing, circuit board design, PCB supplier, Nj Automations"
        ></meta>
        <meta property="og:title" content="Orders"></meta>

        <meta
          property="og:image"
          content="https://res.cloudinary.com/ronaklala-games/image/upload/e_trim/v1715358539/samples/image-removebg-preview_1_gewm5o.webp"
        ></meta>
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
                        {!isLoading ? (
                          <>
                            {data.length === 0 ? (
                              <>
                                <h1 style={{ fontSize: "42px" }}>
                                  No Orders Found
                                </h1>
                              </>
                            ) : (
                              <>
                                {data.map((o, i) => (
                                  <>
                                    <SingleOrder order={o} />
                                  </>
                                ))}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <Spinner class="orange" />
                          </>
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
