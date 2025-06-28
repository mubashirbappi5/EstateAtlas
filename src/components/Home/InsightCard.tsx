import React from 'react';
import Image from 'next/image';
import card1 from '../../../public/InsightCard1.jpg';

type Variant = 'white' | 'black';

type Blog = {
  title: string;
  created_at: string;
  image?: string;
};

type InsightCardProps = {
  variant?: Variant;
  blog: Blog;
};

const bgColors: Record<Variant, string> = {
  white: 'white',
  black: 'black',
};

const textColors: Record<Variant, string> = {
  white: 'text-black',
  black: 'text-white',
};

const InsightCard: React.FC<InsightCardProps> = ({ variant = 'black', blog }) => {
  const { title, created_at, image } = blog;

  return (
    <div>
      <div
        style={{ backgroundColor: bgColors[variant] }}
        className="rounded-xl overflow-hidden shadow-lg p-3 border border-[#3BA1DF]"
      >
        <div className="w-full h-48 relative">
          <Image
            src={image || card1}
            alt="blog image"
            className="rounded-lg object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-4">
          <h2 className={`${textColors[variant]} text-xl font-semibold mb-2`}>
            {title}
          </h2>
          <p className="text-gray-400 text-sm">
            {new Date(created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
