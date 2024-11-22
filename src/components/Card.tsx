import Image from 'next/image';
import React from 'react';

interface proptype {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<proptype> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' data-aos="zoom-in">
      <div>
        <Image
          className='w-[300px] sm:w-[350px] h-auto'
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div className='mt-4'>
          {/* Map through the tags array and render each tag */}
          {tags.map((tag, index) => (
            <span key={index} className='tags'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

