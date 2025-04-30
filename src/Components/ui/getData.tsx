"use client"
import axios from "axios";
import { useEffect, useState } from "react";

type Genres = {
  id: number;
  name: string;
};

export const Genre = () => {
  const [genres, setGenres] = useState<Genres[]>([]);

  const getData = async () => {
    try {
      const res = await axios("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      });
      setGenres(res.data.genres); // API response has a "genres" field
    } catch (error) {
      console.log(error);
    }   
  };

  useEffect(() => {
    getData(); // Called once on component mount
  }, []);

  return (
    <div>
      {genres.length > 0 &&
        genres.map((v) => (
          <button key={v.id}>
            {v.name}
          </button>
        ))}
    </div>
  );
};

