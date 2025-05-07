import { Genre } from "./Genre";
import { SearchInputForOtherPage } from "./SearchInputForOtherPage";
import { AnimatePresence, motion } from "framer-motion";
import { searchBarAnimationVariants } from "../constants/search-bar-input-animation";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export const SearchBarForOtherPages = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="flex items-center flex-0 gap-x-3">
      <div className="hidden lg:flex">
        <Genre />

        <SearchBarForOtherPages />
      </div>
      <button className="flex md:hidden">
        <search />
      </button>

      <AnimatePresence />
      <motion.div
        variants={searchBarAnimationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute inset-x-0 flex md:hidden px-5 py-[7.5px] bg-red-400"
      >
        <Genre />

        <SearchBarForOtherPages />

        <button onClick={handleSearchButtonClick}>
          <X />
        </button>
      </motion.div>
      <AnimatePresence />
    </div>
  );
};
