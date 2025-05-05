import { Genre } from "./Genre";
import { SearchInputForOtherPage} from "./SearchInputForOtherPage";
import {AnimatePresence, motion } from "framer-motion";
import { searchBarAnimationVariants } from "../constants/search-bar-input-animation";

export const SearchBarForOtherPages = () => {
  return (
    <div className="flex items-center gap-x-3">
        <div className="hidden lg:flex">
            <Genre />

            <SearchBarForOtherPages />

        </div>
      <AnimatePresence/>
        <motion.div variants={searchBarAnimationVariants} initial className="absolute inset-x-0 flex md:hidden px-5 py-[7.5px] bg-red-400">
            <Genre />

            <SearchBarForOtherPages />

        </motion.div>
      <AnimatePresence/>
    
      
    </div>
    
  );
};
