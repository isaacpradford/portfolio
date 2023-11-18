import React from "react";

const YoutubeEmbed = ({ youtubeLink }) => {
    if (!youtubeLink) {
        return null;
    }

    const embedUrl = youtubeLink.replace("watch?v=", "embed/");

    return (
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={embedUrl}
            allowFullScreen
            title="Embedded YouTube video"
          ></iframe>
        </div>
      );
}

export default YoutubeEmbed;