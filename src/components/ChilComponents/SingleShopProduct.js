import React from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "../css/product.css";

const SingleShopProduct = (props) => {
  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");
    console.log(url);

    return modifiedUrl;
  };

  return (
    <>
      <LazyLoadComponent>
        <div className="trx_addons_column-1_3">
          <div className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation singleProduct">
            <div className="post_featured with_thumb hover_link sc_services_item_thumb">
              <a href={"/product/" + props.product._id}>
                <LazyLoadImage
                  loading="lazy"
                  width={890}
                  height={664}
                  src={addETrimToUrl(props.product.productImages[0])}
                  className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
                  alt=""
                  decoding="async"
                />
              </a>
              <div className="mask" />
            </div>
            <div className="sc_services_item_info">
              <div className="sc_services_item_header">
                <div class="post_data_inner">
                  <div class="post_header entry-header">
                    <h4 class="woocommerce-loop-product__title">
                      <a
                        href={"/product/" + props.product._id}
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: "2",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: "16px",
                        }}
                      >
                        {props.product.name}
                      </a>
                    </h4>{" "}
                  </div>
                  <div class="price_wrap">
                    <span class="price">
                      <span class="woocommerce-Price-amount amount">
                        <bdi style={{ color: "#000" }}>
                          <span class="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          {props.product.disc_price}
                        </bdi>
                      </span>{" "}
                      –{" "}
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#002BAD",
                          backgroundColor: "#DDE6FF",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        {Math.floor(
                          ((props.product.price - props.product.disc_price) /
                            props.product.price) *
                            100
                        )}
                        % Off
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default SingleShopProduct;
