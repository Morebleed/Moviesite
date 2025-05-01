import { Genre } from "./Genre";
import { SearchInputForOtherPage} from "./SearchInputForOtherPage";

export const SearchBarForOtherPages = () => {
  return (
    <div className="flex items-center gap-x-3">
        <div className="hidden lg:flex">
            <Genre />

            <SearchBarForOtherPages />

        </div>

        <div>
            <Genre />

            <SearchBarForOtherPages />

        </div>
    
      
    </div>
    
  );
};
