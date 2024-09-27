import React from "react";
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
const Video = ({ video, key }) => {
  return (
    <div className="flex-none w-full md:w-22 md:h-22">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col flex-nowrap ">
          {/* Video Thumbnail */}
          <div className="relative h-35 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          {/* Logo and Title */}
          <div className="flex space-x-2 mt-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full rounded-full"
                  src={video?.author?.avatar[0].url}
                  alt="Author Avatar"
                />
              </div>
            </div>

            {/* Title and Meta Info */}
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[10px]" />
                )}
              </span>

              {/* Views and Published Time */}
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex mx-1 items-center justify-center  font-bold ">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Video;
