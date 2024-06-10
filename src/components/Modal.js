import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <div id="contact-modal" className="modal fade">
        <form
          id="ajax-contact"
          method="post"
          action="/includes/scripts/mailthis.php"
        >
          {" "}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    className="glyphicon glyphicon-remove-circle"
                    aria-hidden="true"
                  />
                </button>
                <h2 className="modal-title">Let&apos;s Get In Touch</h2>
              </div>

              <div className="loading-boundary">
                <div className="loading" />

                <div className="modal-body">
                  <div id="form-messages" className="postpost" />
                  <div className="prepost">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          name="name"
                          required
                        />
                      </div>

                      <div className="col-md-6 form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="postpost">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div className="prepost">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>

                    <div id="contactAlt">
                      Or email me at{" "}
                      <a href="mailto:&#100;&#111;&#117;&#103;&#064;&#115;&#101;&#101;&#100;&#111;&#117;&#103;&#114;&#117;&#110;&#046;&#099;&#111;&#109;">
                        &#100;&#111;&#117;&#103;&#064;&#115;&#101;&#101;&#100;&#111;&#117;&#103;&#114;&#117;&#110;&#046;&#099;&#111;&#109;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
