import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.Context";
import PaymentModel from "../PaymentModel/Payment.Component";

const MovieInfo = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [price, setPrice] = useState(0);
  const { price, setIsOpen, isOpen, rentMovie, buyMovie, movie } =
    useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

//   const rentMoive = () => {
//     setIsOpen(true);
//     setPrice(149);
//   };

//   const buyMoive = () => {
//     setIsOpen(true);
//     setPrice(599);
//   };

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3 px-4 my-3">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-2 md:px-4">
          <h4 className="font-semibold">4.2k rating</h4>
          <h4 className="font-semibold">
            Kannada, English, Hindi, Telegu, Tamil
          </h4>
          <h4 className="font-semibold">
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg px-2 mx-4"
            onClick={rentMovie}
          >
            Rent ₹ 149
          </button>
          <button
            className="bg-red-600 w-full py-3 pl-2 text-white font-semibold rounded-lg"
            onClick={buyMovie}
          >
            Buy ₹ 599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
