import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import FlipMove from "react-flip-move";

const Thumbnail = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <FlipMove className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${data.backdrop_path || data.poster_path}`}
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{data.overview}</p>
        <h2 className="mt-2 text-2xl text-white transition-all duration-100 case-in-out group-hover:font-bold">
          {data.title || data.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {data.media_type || ""} - {data.release_date}
          <ThumbUpIcon className="h-5 mx-2" />{" "}
          {data.first_air_date || data.vote_count}
        </p>
      </div>
    </FlipMove>
  );
};
export default Thumbnail;
