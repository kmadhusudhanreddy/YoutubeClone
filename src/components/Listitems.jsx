const Listitems = () => {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "News",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dubbing",
    "Cricket",
    "Football",
  ];
  // className = "flex h-[8%]   overflow-x-auto py-2 space-x-4 ";
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Listitems;
