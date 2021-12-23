import React from "react";
import InfoExample from "./InfoExample";

function Info() {
  return (
    <div>
      <h1 className="info__title">What are Meta Tags</h1>

      <div className="info__box">

        <p className="info__lead">
          Meta tags are specific snippets of text and image content that provide
          a summary for a webpage. Often meta tag data shows up whenever someone
          shares a link on social media, in messaging, or in your business chat
          software 🙌.
        </p>
        <p>
          In addition meta tags can contain information to help search engines
          and other technical services scan your site to figure out what its
          all about and whether or not its legit!
        </p>

        <InfoExample />
      </div>
    </div>
  );
}

export default Info;
