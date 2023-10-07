import React from "react";
import "./VideoContainer.css";

// container for each video and its content
function VideoContainer() {
  return (
    <div className="videos-container__video-container">
      <div className="videos-container__image-container">
        {/* thumbnail of video */}
        <img
          className="videos-container__video-container--iframe"
          alt=""
          src={
            "https://i.ytimg.com/vi/hkP-g9EcYbo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTuRVsBOMLfHPYsZq-bI8rUO6LQ"
          }
          style={{ backgroundColor: "transparent" }}
        />

        <div className="videos-container__video-duraion">
          {/* video duration on thumbnail */}
          <span className="">{"4:57:38"}</span>
        </div>
      </div>

      <div className="videos-container__video-container--middle-div">
        {/* channel image */}
        <img
          src={
            "https://yt3.ggpht.com/EpunmP_QxObRT33gHSmoZppAf0UniOg5CiQPtxw6LGMfY13Bic_6WfT9xEzHtmODB3IbmRIS=s68-c-k-c0x00ffffff-no-rj"
          }
          alt={""}
        />
        {/* video description */}
        <p>
          {
            "Dr Zakir Naik's Full Talk + Q&A | Qatar Tour | Watch @BelievingBeingsUncut"
          }
        </p>
        <div className="videos-container__video-container--middle-div--icon">
          {/* three dods icon for more info */}
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{ width: "100%", height: "100%" }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="videos-container__video-container--bottom-div">
        <div className="videos-container__video-container--bottom-div--text-icon">
          {/* channel name */}
          <p>{"BelievingBeings"}</p>
          {/* proved channel icon */}
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        {/* video views and time of upload */}
        <p>{"1.2M views • 10 months ago"}</p>
      </div>
    </div>
  );
}

export default VideoContainer;
