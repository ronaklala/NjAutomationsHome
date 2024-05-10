import React, { useEffect, useState } from "react";

const SingleProduct = (props) => {
  let [finalUrl, setFinalUri] = useState();

  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    return modifiedUrl;
  };

  useEffect(() => {
    let url = window.location.pathname;
    setFinalUri(url.toLowerCase().includes("category") ? true : false);
  }, []);

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

          <a href={"/category/" + props.product._id}>
            <div className="sc_services_item_info">
              <div className="sc_services_item_header">
                <div class="post_data_inner">
                  <div class="post_header entry-header">
                    <h4 class="woocommerce-loop-props.productuct__title">
                      {finalUrl ? (
                        <>
                          <a
                            href={"/product/" + props.product._id + "/view"}
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "2",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              fontSize: "16px",
                            }}
                          >
                            <center>{props.product.name}</center>
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={"/category/" + props.product._id}
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "2",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              fontSize: "16px",
                            }}
                          >
                            <center>{props.product.name}</center>
                          </a>
                        </>
                      )}
                    </h4>{" "}
                    {finalUrl ? (
                      <>
                        <a href={"/product/" + props.product._id + "/view"}>
                          <button>View Product</button>
                        </a>
                      </>
                    ) : (
                      <>
                        {" "}
                        <a href={"/category/" + props.product._id}>
                          <button>View Category</button>
                        </a>
                      </>
                    )}
                    {/* <p>{props.product.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
