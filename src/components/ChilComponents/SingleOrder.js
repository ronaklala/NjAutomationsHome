import moment from "moment";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleOrder = (props) => {
  const addETrimToUrl = (url) => {
    // Define the pattern to match
    const pattern = /(upload\/)(v\d+)/;

    // Replace the pattern with 'upload/e_trim/v169...'
    const modifiedUrl = url.replace(pattern, "upload/e_trim/$2");

    return modifiedUrl;
  };

  return (
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
            alt={props.order.productDetails[0].image}
            effect="blur"
            src={addETrimToUrl(props.order.productDetails[0].image)}
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
                  <a href="#/">{props.order.status}</a>
                </span>
                {props.order.status === "Dispatched" ? (
                  <>
                    {" "}
                    <span className="post_meta_item post_categories">
                      <a
                        href={props.order.tracking_id}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Track Here
                      </a>
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </div>{" "}
            </div>
            <h4 className="post_title entry-title">
              {props.order.productDetails[0].name}
            </h4>{" "}
          </div>
          <div className="post_content entry-content">
            <div className="post_content_inner">{props.order.address}</div>{" "}
          </div>
          <div className="post_meta">
            <span className="post_meta_item post_date">
              Ordered on {moment(props.order.createdAt).format("LLL")}
            </span>
          </div>{" "}
          <div className="post_meta">
            <span className="post_meta_item post_date">
              Quantity Ordered: {props.order.qty}
            </span>
          </div>{" "}
        </div>
      </article>
    </>
  );
};

export default SingleOrder;
