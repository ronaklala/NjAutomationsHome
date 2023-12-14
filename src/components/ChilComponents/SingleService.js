import { ArrowRight } from "phosphor-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleService = (props) => {
  return (
    <>
      <div className="trx_addons_column-1_3" style={{ marginTop: "15px" }}>
        <div
          data-post-id={951}
          className="sc_services_item sc_item_container post_container without_content with_image sc_services_item_featured_top post-951 cpt_services type-cpt_services status-publish has-post-thumbnail hentry cpt_services_group-automation"
        >
          <div
            className="post_featured with_thumb hover_link sc_services_item_thumb"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LazyLoadImage
              src={props.service.img}
              className="attachment-optima-thumb-square size-optima-thumb-square wp-post-image"
              alt=""
              effect="blur"
            />
            <div className="mask" />
          </div>
          <div className="sc_services_item_info">
            <div className="sc_services_item_header">
              <div className="sc_services_item_title_wrap">
                <h4 className="sc_services_item_title entry-title">
                  <a href={"/Service/" + props.service.id}>
                    <span className="sc_services_item_number">
                      {props.service.id}
                    </span>
                    <span className="sc_services_item_title_text">
                      {props.service.name}
                    </span>
                  </a>
                </h4>
                <div className="sc_services_item_button sc_item_button">
                  <a href={"/Service/" + props.service.id}>
                    <span className="link_text">
                      <ArrowRight size={24} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;
