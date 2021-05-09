import { forwardRef } from "react";
import Thumbnail from "./Thumbnail";

const Results = forwardRef(({ results }, ref) => {
  console.log(results);
  return (
    <div
      ref={ref}
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      {results.map((data) => (
        <Thumbnail key={data.id} data={data} />
      ))}
    </div>
  );
});
export default Results;
