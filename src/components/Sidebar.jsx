import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { fetchData } from "../utils/rapidApi";
import { useAuth } from "../context/AuthProvider";
import Video from "./Video";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },

    {
      id: 5,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 6,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 7,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 8,
      name: "Courses",
      icon: <SiStylelint />,
    },

    {
      id: 9,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  let [value, setValue] = useState("");
  let [itemData, setItemData] = useState([]);

  let navigate = useNavigate();
  function fetchDataOnClick(value) {
    if (value === "Home") {
      navigate("/");
    } else {
      navigate(`/search/${value}`);
    }
  }

  function handleClick(itemName) {
    setValue(itemName);
  }

  useEffect(() => {
    if (value) {
      fetchDataOnClick(value);
    }
  }, [value]);

  //   {
  //     id: 1,
  //     name: "Your Channel",
  //     icon: <PiUserSquareThin />,
  //   },
  //   {
  //     id: 2,
  //     name: "History",
  //     icon: <MdHistory />,
  //   },
  //   {
  //     id: 3,
  //     name: "Playlists",
  //     icon: <MdOutlineSubscriptions />,
  //   },
  //   {
  //     id: 4,
  //     name: "Your Videos",
  //     icon: <BiVideo />,
  //   },
  //   {
  //     id: 5,
  //     name: "Watch later",
  //     icon: <MdOutlineWatchLater />,
  //   },
  //   {
  //     id: 6,
  //     name: "Liked videos",
  //     icon: <AiOutlineLike />,
  //   },
  // ];
  // const sidebarItems3 = [
  //   {
  //     id: 1,
  //     name: "Trending",
  //     icon: <SiTrendmicro />,
  //   },
  //   {
  //     id: 2,
  //     name: "Shopping",
  //     icon: <HiOutlineShoppingBag />,
  //   },
  //   {
  //     id: 3,
  //     name: "Music",
  //     icon: <SiYoutubemusic />,
  //   },
  //   {
  //     id: 4,
  //     name: "Films",
  //     icon: <PiFilmSlateLight />,
  //   },
  //   {
  //     id: 5,
  //     name: "Live",
  //     icon: <CgMediaLive />,
  //   },
  //   {
  //     id: 6,
  //     name: "Gaming",
  //     icon: <IoGameControllerOutline />,
  //   },
  //   {
  //     id: 7,
  //     name: "News",
  //     icon: <FaRegNewspaper />,
  //   },
  //   {
  //     id: 8,
  //     name: "Sport",
  //     icon: <TfiCup />,
  //   },
  //   {
  //     id: 9,
  //     name: "Courses",
  //     icon: <SiStylelint />,
  //   },
  //   {
  //     id: 10,
  //     name: "Fashion & beauty",
  //     icon: <PiLightbulbLight />,
  //   },
  //   {
  //     id: 11,
  //     name: "Padcasts",
  //     icon: <MdPodcasts />,
  //   },
  // ];
  // const sidebarItems4 = [
  //   {
  //     id: 1,
  //     name: "Youtube Premium",
  //     icon: <FaYoutube />,
  //   },
  //   {
  //     id: 2,
  //     name: "Youtube Studio",
  //     icon: <SiYoutubestudio />,
  //   },
  //   {
  //     id: 3,
  //     name: "Youtube Music",
  //     icon: <SiYoutubemusic />,
  //   },
  //   {
  //     id: 4,
  //     name: "Youtube Kids",
  //     icon: <SiYoutubekids />,
  //   },
  // ];
  return (
    <div className="px-6 w-[17%] min-w-[15%] h-[calc(100vh-5.625rem)] overflow-y-scroll overflow-x-hidden bg-gray-100 shadow-md rounded-lg">
      {/* Home */}
      <div className="space-y-4 pt-4">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center space-x-4 hover:bg-red-400 dark:hover:bg-red-600 duration-300 rounded-lg p-2 transition"
            >
              <div
                onClick={(e) => handleClick(item.name)}
                className="flex items-center"
              >
                <div className="text-2xl cursor-pointer text-gray-800 dark:text-gray-300">
                  {item.icon}
                </div>
                <span className="cursor-pointer text-lg font-medium text-gray-900 dark:text-gray-200 ml-2">
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
