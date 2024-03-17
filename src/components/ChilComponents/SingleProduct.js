import React from "react";

const SingleProduct = (props) => {
  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    return modifiedUrl;
  };

  return (
    <>
      <div className="trx_addons_column-1_3">
        <div className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation">
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
                  <h4 class="woocommerce-loop-props.productuct__title">
                    <a
                      href={"/product/" + props.product._id + "/view"}
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {props.product.name}
                    </a>
                  </h4>{" "}
                  <br />
                  <p>{props.product.qty > 0 ? <>In Stock</> : <>Sold Out</>}</p>
                  <br />
                  {/* <p>{props.product.description}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
