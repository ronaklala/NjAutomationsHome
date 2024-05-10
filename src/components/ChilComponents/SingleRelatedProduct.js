import React from "react";

const SingleRelatedProduct = (props) => {
  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    console.log(modifiedUrl);

    return modifiedUrl;
  };

  return (
    <>
      <div className="trx_addons_column-1_3">
        <div
          data-post-id={951}
          className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation"
        >
          <div className="post_featured with_thumb hover_link sc_services_item_thumb">
            <img
              loading="lazy"
              width={890}
              height={664}
              src={addETrimToUrl(props.product.image)}
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
                      <bdi>
                        <s>
                          <span class="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          {props.product.price}
                        </s>
                      </bdi>
                    </span>{" "}
                    –{" "}
                    <span class="woocommerce-Price-amount amount">
                      <bdi>
                        <span class="woocommerce-Price-currencySymbol">₹</span>
                        {props.product.disc_price}
                      </bdi>
                    </span>
                  </span>
                </div>
                <a
                  href={"/product/" + props.product._id}
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
    </>
  );
};

export default SingleRelatedProduct;
