"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type MovieImgs = {
  id: number;
  name: string;
};

export const Imgs = () => {
  const [Imgs, setImgs] = useState<Imgs"">("");

  const getData = async () => {
    try {
      const res = await axios("https://image.tmdb.org/t/p", {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      });
      setImgs(res.data.Imgs); // API response has a "genres" field
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(); // Called once on component mount
  }, []);

  return (
    <div>
      {Imgs.length > 0 &&
        Imgs.map((v) => <button key={v.id}>{v.name}</button>)}
    </div>
  );
};

export default MovieImgs;