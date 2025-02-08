import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type StarsProps = {
  rating: number;
};

const Stars: React.FC<StarsProps> = ({ rating }) => {
  // Yulduzlarni hisoblash funksiyasi
  function calculateStar(n: number): number {
    if (n === 0 || n.toString().length === 1) return n;

    let [whole, rest] = n.toString().split(".");

    return rest[0] < "3" ? +whole : rest[0] < "8" ? +whole + 0.5 : +whole + 1;
  }

  const setStar = (n: number): JSX.Element[] => {
    let number = calculateStar(n);
    let fill = Math.floor(number);
    let half = number - Math.floor(number) ? 1 : 0;
    let outline = 5 - Math.ceil(number);

    let fillStar = Array(fill)
      .fill(null)
      .map((_, inx) => (
        <FaStar key={`fill-${inx}`} className="text-[#FFAD33]" />
      ));

    let halfStar = Array(half)
      .fill(null)
      .map((_, inx) => (
        <FaStarHalfAlt key={`half-${inx}`} className="text-[#FFAD33]" />
      ));

    let outlineStar = Array(outline)
      .fill(null)
      .map((_, inx) => (
        <FaRegStar key={`outline-${inx}`} className="text-gray-400" />
      ));

    return [...fillStar, ...halfStar, ...outlineStar];
  };

  return <div className="flex">{setStar(rating)}</div>;
};

export default Stars;
