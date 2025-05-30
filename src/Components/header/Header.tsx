"use client"

import { ToggleTheme } from "./ToggleTheme";
import { MovieImage} from "../common/MovieImage"
import { usePathname} from "next/navigation";
import {SearchBarForOtherPages} from "./SearchBarForOtherPages"
import {SearchBarForSearchPage} from "./SearchBarForSearchPage"

const Header = () => {

 const pathname = usePathname();

  return (
    <div className="flex items-center md:justify-between py-[11.5] px-20">
    <MovieImage />

    {pathname === "/search" ? <SearchBarForSearchPage/> : <SearchBarForOtherPages />}

    <ThemeSwitch />
    </div>
  );
};
export default Header;
