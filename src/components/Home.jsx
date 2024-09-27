// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Video from "./Video";
// import { useAuth } from "../context/AuthProvider";
// import Loading from "../Loader/Loading";
// import Listitems from "./Listitems";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { fetchData } from "../utils/rapidApi";

// const Home = () => {
//   const { data, loading } = useAuth();
//   let [infiniteData, setInfiniteData] = useState([]);
//   let [hasMore, setHasMore] = useState(true);

//   let arr = [
//     "india",
//     "telugu",
//     "bgmi",
//     "athena",
//     "scout",
//     "jonathan",
//     "mortal",
//     "movies",
//     "temples",
//     "history",
//   ];

//   let [val, setVal] = useState(arr[0]);
//   const fetchDataForInfinite = async () => {
//     let response = fetchData(`search/?q=${val}`);
//     let { contents } = response;
//     if (contents.length === 0) {
//       setHasMore(false); // No more data to load
//     } else {
//       setInfiniteData((prevData) => [...prevData, ...contents]);
//     }
//   };

//   useEffect(() => {
//     setInfiniteData([]);
//     setHasMore(true);
//     fetchDataForInfinite(val);
//   }, [val]);

//   return (
//     <div className="flex mt-20">
//       <Sidebar />
//       <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
//         {/* <Listitems /> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//           {loading ? (
//             <Loading />
//           ) : (
//             infiniteData.map((item) => {
//               <InfiniteScroll
//                 dataLength={infiniteData.length} //This is important field to render the next data
//                 next={fetchDataForInfinite}
//                 hasMore={true}
//                 loader={<h4>Loading...</h4>}
//               />;
//               if (item.type !== "video") return false;
//               return <Video key={item.id} video={item?.video} />;
//             })
//           )}
//         </div>
//         //implementing infinite scroolz
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import Loading from "../Loader/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchData } from "../utils/rapidApi";

const Home = () => {
  const { data, loading } = useAuth();
  let keywords = [
    "india",
    "telugu",
    "hyderabad",
    "maheshbabu",
    "rrr",
    "devara",
    "ssmb29",
    "bgmi",
    "athena",
    "scout",
    "jonathan",
    "mortal",
    "movies",
    "temples",
    "history",
  ];

  const [infiniteData, setInfiniteData] = useState([]); // State for additional data
  const [hasMore, setHasMore] = useState(true); // Control loading more data
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0); // Track current keyword index

  // Function to fetch data based on keywords
  const fetchDataForInfinite = async () => {
    if (currentKeywordIndex < keywords.length) {
      const val = keywords[currentKeywordIndex]; // Get the current keyword
      const response = await fetchData(`search/?q=${val}`);
      const { contents } = response;

      if (contents.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        setInfiniteData((prevData) => [...prevData, ...contents]); // Append new data
      }
      setCurrentKeywordIndex((prevIndex) => prevIndex + 1); // Move to the next keyword
    } else {
      setHasMore(false); // No more keywords to search
    }
  };

  //fetch data
  useEffect(() => {
    fetchDataForInfinite();
  }, [currentKeywordIndex]);

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <InfiniteScroll
          dataLength={infiniteData.length} // Important field to render the next data
          next={fetchDataForInfinite} // Function to call for loading more data
          hasMore={hasMore} // Determines if more data can be loaded
          loader={<h4>Loading...</h4>} // Loader component
          endMessage={
            <p style={{ textAlign: "center" }}>No more videos to load</p>
          } // Message when no more data is available
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {loading ? (
              <Loading />
            ) : (
              infiniteData.map((item) => {
                if (item.type !== "video") return null; // Only render video items
                return <Video key={item.id} video={item?.video} />;
              })
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
