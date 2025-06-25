import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import man1 from "../../public/man1.png"; 
import man2 from "../../public/man2.png"; 
import man3 from "../../public/man3.png"; 
import man4 from "../../public/man4.png"; 
import man5 from "../../public/man5.png"; 
import man6 from "../../public/man6.png"; 
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man2,
  },
  {
    name: "John",
    username: "@john",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man3,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man5,
  },
  {
    name: "James",
    username: "@james",
    body: "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

import type { StaticImageData } from "next/image";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: StaticImageData;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
  className={cn(
    "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl px-4 py-10 space-y-4",
    "shadow", 
    "bg-[linear-gradient(180deg,_#ffffff,_#f3f3f3)]", 
    "dark:bg-[linear-gradient(180deg,_#1a1a1a,_#2a2a2a)]" 
  )}
>
  <blockquote className="mt-2 text-sm">{body}</blockquote>
  <hr />
  <div className="flex flex-row items-center gap-2">
    <Image className="rounded-full" width="32" height="32" alt="" src={img} />
    <div className="flex flex-col">
      <figcaption className="text-sm font-medium dark:text-white">
        {name}
      </figcaption>
      <p className="text-xs font-medium dark:text-white/40">{username}</p>
    </div>
  </div>
</figure>

  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
