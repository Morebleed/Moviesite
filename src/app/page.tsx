import Image from "next/image";
import { axiosInstance } from "@/lib/axiosInstance";

import React from "react";

const getData = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

const page = async () => {
  const data = await getData();
  console.log({ data });
  return <div></div>;
};

export default page;
