import React from "react";
import Image, { StaticImageData } from "next/image";
import ArticleButton from "./articlebutton";
import Link from "next/link";

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  topics: string;
  readTime: string;
  link: string;
}

export const blogCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.5,
    },
  }),
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  topics,
  readTime,
  link,
}) => {
  return (
    <div className="h-[28rem] flex flex-col w-[18rem] rounded-md justify-between content-start mb-6">
      <div className="h-48 w-full relative mb-2">
        <Image
          src={image}
          alt="Blogcard Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-md"
        />
      </div>
      <div className="font-serif bg-[#F1F0E8] text-slate-700 flex justify-between items-center rounded-md p-2 mb-2">
        <p className="uppercase font-extralight">{topics}</p>
        <div className="flex items-end">
          <p>{readTime}</p>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-slate-600 mb-2">{description}</p>
      <Link href={`${link}`}>
        <ArticleButton />
      </Link>
    </div>
  );
};

export default BlogCard;
