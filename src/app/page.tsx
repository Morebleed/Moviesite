import Image from "next/image";
import { axiosInstance } from "@/lib/axiosInstance";
import React from "react";
import { Genre } from "@/Components/ui/getData";
import { Divide } from "lucide-react";
import Sword from "@/Components/Sword";
import Header from "@/Components/Header";

const page = async () => {
  return (
    <div>
      <Header />
      <Genre />
    
    </div>
  );
};

export default page;
