'use client';

import Image from 'next/image';
export const ImageList = () => {
  return (
    <section className="grid grid-cols-4 gap-4 p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Image
          key={index}
          src={`https://placehold.co/600x800.png?text=Image+${index + 1}`}
          alt={`Placeholder ${index + 1}`}
          width={600}
          height={800}
          className="w-full h-auto rounded-lg shadow-md"
        />
      ))}
    </section>
  );
};
