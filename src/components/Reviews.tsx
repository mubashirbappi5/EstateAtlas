import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import man1 from "../../public/man1.png";
import man2 from "../../public/man2.png";
import man3 from "../../public/man3.png";
import man4 from "../../public/man4.png";
import man5 from "../../public/man5.png";
import man6 from "../../public/man6.png";
import Image, { StaticImageData } from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man1,
  },
  {
    name: "Jill",
    username: "@jill",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man2,
  },
  {
    name: "John",
    username: "@john",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man3,
  },
  {
    name: "Jane",
    username: "@jane",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man5,
  },
  {
    name: "James",
    username: "@james",
    body:
      "EstateAtlas revolutionized how we analyze international markets. The side-by-side country comparison tool saved us 40+ hours monthly. We now identify high-yield markets twice as fast.",
    img: man6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
        "relative w-80 cursor-pointer overflow-hidden rounded-xl px-5 py-8 space-y-4",
        "border border-cyan-400/20",
        "bg-gradient-to-b from-black via-[#050505] to-black",
        "shadow-[0_0_25px_rgba(0,255,255,0.15)]",
        "hover:shadow-[0_0_45px_rgba(0,255,255,0.4)] transition"
      )}
    >
      <blockquote className="text-sm text-gray-300 leading-relaxed">
        {body}
      </blockquote>

      <hr className="border-cyan-400/20" />

      <div className="flex items-center gap-3">
        <Image
          className="rounded-full border border-cyan-400/40"
          width={36}
          height={36}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs text-cyan-400">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-16">

      {/* Subtle neon background glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,255,0.25), transparent 65%)",
          filter: "blur(200px)",
        }}
      />

      <Marquee pauseOnHover className="[--duration:22s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:22s] mt-6">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
