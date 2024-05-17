import React, { useEffect, useState } from "react";
import Header from "../shared/header";
import MobileMenu from "../shared/mobilemenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../shared/footer";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const [user, setUesr] = useState();

  const [order, setOrder] = useState({
    name: "",
    email: "",
    phno: "",
    address: "",
    qty: "",
    pid: "",
    city: "",
    state: "",
    zip: "",
    razorpay_id: "",
    status: "Ordered",
    uid: "",
  });
  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState();

  const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/login";
    } else {
      setUesr(JSON.parse(localStorage.getItem("user")));
      axios
        .get(
          "https://determined-pear-apron.cyclic.app/api/admin/singleProduct/" +
            params.id
        )
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data.product);
            setLoading(false);
          } else {
            window.location.href = "/Internal-Server-Error";
          }
        })
        .catch((err) => {
          window.location.href = "/Internal-Server-Error";
        });
    }
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    order.email = user.email;
    order.name = user.name;
    order.phno = user.phno;
    order.pid = params.id;
    order.uid = user._id;

    if (parseInt(product.qty) < order.qty) {
      toast.error("The Entered Quantity is not in Stock At the moment");
    } else {
      let total;

      if (order.qty >= product.offerQty) {
        let price = product.disc_price * order.qty;
        let percent = product.offerQty / 100;
        let discount = price * percent;
        total = price - discount;
      } else {
        total = product.disc_price * order.qty;
      }

      var options = {
        key: process.env.REACT_APP_RAZORPAYKEY,
        amount: total * 100,
        currency: "INR",
        name: process.env.REACT_APP_APP_NAME,
        description: product.name,
        image: process.env.REACT_APP_LOGO,
        handler: function (response) {
          order.razorpay_id = response.razorpay_payment_id;
          axios
            .post(
              "https://determined-pear-apron.cyclic.app/api/user/checkout/",
              order
            )
            .then((res) => {
              toast.success("Payment Successfully Completed", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });

              if (res.status === 200) {
                setTimeout(() => {
                  window.location.href = "/" + product._id + "/Order/Success";
                }, 1500);
              }
            });
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phno,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
      <Helmet>
        <title>Checkout Now</title>

        <meta name="robots" content="noindex,nofollow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, electronic components, PCB manufacturing, circuit board assembly, customer login, e-commerce platform, technology solutions, electronics manufacturing, circuit board design, PCB supplier, Nj Automations"
        ></meta>
        <meta property="og:title" content="Checkout Now"></meta>

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
                        className="elementor-element elementor-element-d6c13e5 no-inner-padding sc_fly_static elementor-widget elementor-widget-trx_widget_slider trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                        data-id="d6c13e5"
                        data-element_type="widget"
                        id="controller-tools-3"
                        data-widget_type="trx_widget_slider.default"
                      >
                        <section className="comments_wrap opened">
                          <div className="comments_form_wrap">
                            <div className="comments_form">
                              {!loading ? (
                                <>
                                  <div id="respond" className="comment-respond">
                                    <h1
                                      id="reply-title"
                                      className="section_title comments_form_title comment-reply-title"
                                      style={{ fontSize: "28px" }}
                                    >
                                      Checkout
                                    </h1>
                                    <br />
                                    <form
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                      }}
                                      className="comment-form"
                                    >
                                      <div className="comments_field comments_author">
                                        <label
                                          htmlFor="name"
                                          className="required"
                                        >
                                          Name
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your Name *"
                                            defaultValue={user.name}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>
                                      <div className="comments_field comments_email">
                                        <label
                                          htmlFor="email"
                                          className="required"
                                        >
                                          E-mail
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Your E-mail *"
                                            defaultValue={user.email}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>

                                      <div className="comments_field comments_author">
                                        <label
                                          htmlFor="phno"
                                          className="required"
                                        >
                                          Phone Numnber
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="phno"
                                            name="phno"
                                            type="text"
                                            placeholder="Your Phone Number"
                                            defaultValue={user.phno}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>
                                      <div className="comments_field comments_email">
                                        <label
                                          htmlFor="city"
                                          className="required"
                                        >
                                          City
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder="Your City *"
                                            defaultValue={order.city}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>

                                      <div className="comments_field comments_author">
                                        <label
                                          htmlFor="state"
                                          className="required"
                                        >
                                          State
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder="Your State *"
                                            defaultValue={order.state}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>
                                      <div className="comments_field comments_email">
                                        <label
                                          htmlFor="zip"
                                          className="required"
                                        >
                                          Zip Code
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="zip"
                                            name="zip"
                                            type="number"
                                            placeholder="Your Pin Code *"
                                            defaultValue={order.zip}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>

                                      <div className="comments_field comments_author">
                                        <label
                                          htmlFor="qty"
                                          className="required"
                                        >
                                          Enter Product quantity
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <input
                                            id="qty"
                                            name="qty"
                                            type="number"
                                            placeholder="Enter Product Quantity *"
                                            defaultValue={order.qty}
                                            onChange={handleChange}
                                            aria-required="true"
                                          />
                                        </span>
                                      </div>

                                      <div className="comments_field comments_comment">
                                        <label
                                          htmlFor="comment"
                                          className="required"
                                        >
                                          Address
                                        </label>
                                        <span className="sc_form_field_wrap">
                                          <textarea
                                            id="address"
                                            name="address"
                                            placeholder="Your Address *"
                                            aria-required="true"
                                            onChange={handleChange}
                                            defaultValue={order.address}
                                          />
                                        </span>
                                      </div>
                                      <p className="wpgdprc-checkbox comment-form-wpgdprc">
                                        (*Order minimum of {product.offerQty}{" "}
                                        quantity to get {product.offerDisc}%
                                        Discount*)
                                      </p>
                                      <p className="form-submit">
                                        <input
                                          name="submit"
                                          type="submit"
                                          className="submit"
                                          value="Pay Securely"
                                          defaultValue="Leave a comment"
                                          onClick={handleSubmit}
                                        />
                                        <input
                                          type="hidden"
                                          name="comment_post_ID"
                                          defaultValue={32226}
                                          id="comment_post_ID"
                                        />
                                        <input
                                          type="hidden"
                                          name="comment_parent"
                                          id="comment_parent"
                                          defaultValue={0}
                                        />
                                      </p>
                                    </form>
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <Footer />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
