import Image from "next/image";
import { axiosInstance } from "@/lib/axiosInstance";
import React from "react";
import { Genre } from "@/Components/ui/getData";
import { Divide } from "lucide-react";
import Carousel from "@/Components/Carousel";
import Header from "@/Components/Header";

const page = async () => {
  return (
    <div>
      <Header />
      <Genre />
     <Carousel />
    </div>
  );
};

export default page;
