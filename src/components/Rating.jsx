import React from "react";

import { useState } from "react";

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
  const [activeRatings, setActiveRatings] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const handleSubmit = () => {
    if (!rating) return;

    setShowThankYouPage(true);
  };

  return (
    <div className="min-h-screen bg-[#141519] flex justify-center items-center">
      <main className="flex flex-col justify-between p-8 w-[400px] h-[400px] rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex bg-gray-700/40 p-4 rounded-full w-fit">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <h1 className="text-white text-[1.75rem] font-semibold">
          How did we do?
        </h1>
        <p className="text-gray-400 text-[0.9rem] leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="my-2 flex flex-row justify-between items-center text-gray-500 font-semibold">
          <li
            className={
              activeRatings.oneStar
                ? "cursor-pointer bg-gray-400/40 text-white px-5 py-3 rounded-full"
                : "cursor-pointer bg-gray-700/40 rounded-full px-5 py-3"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: true,
                twoStar: false,
                threeStar: false,
                fourStar: false,
                fiveStar: false,
              });
              setRating(1);
            }}
          >
            1
          </li>
          <li
            className={
              activeRatings.twoStar
                ? "cursor-pointer bg-gray-400/40 text-white px-5 py-3 rounded-full"
                : "cursor-pointer bg-gray-700/40 rounded-full px-5 py-3"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: true,
                threeStar: false,
                fourStar: false,
                fiveStar: false,
              });
              setRating(2);
            }}
          >
            2
          </li>
          <li
            className={
              activeRatings.threeStar
                ? "cursor-pointer bg-gray-400/40 text-white px-5 py-3 rounded-full"
                : "cursor-pointer bg-gray-700/40 rounded-full px-5 py-3"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: true,
                fourStar: false,
                fiveStar: false,
              });
              setRating(3);
            }}
          >
            3
          </li>
          <li
            className={
              activeRatings.fourStar
                ? "cursor-pointer bg-gray-400/40 text-white px-5 py-3 rounded-full"
                : "cursor-pointer bg-gray-700/40 rounded-full px-5 py-3"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: false,
                fourStar: true,
                fiveStar: false,
              });
              setRating(4);
            }}
          >
            4
          </li>
          <li
            className={
              activeRatings.fiveStar
                ? "cursor-pointer bg-gray-400/40 text-white px-5 py-3 rounded-full"
                : "cursor-pointer bg-gray-700/40 rounded-full px-5 py-3"
            }
            onClick={() => {
              setActiveRatings({
                oneStar: false,
                twoStar: false,
                threeStar: false,
                fourStar: false,
                fiveStar: true,
              });
              setRating(5);
            }}
          >
            5
          </li>
        </ul>
        <button
          onClick={handleSubmit}
          className="tracking-[0.1em] active:bg-white active:text-orange-500 bg-orange-500 text-white font-semibold rounded-full py-2"
        >
          SUBMIT
        </button>
      </main>
    </div>
  );
};

export default Rating;
