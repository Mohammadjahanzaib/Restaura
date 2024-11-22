import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ProjectType = {
  title: string;
  image: string | StaticImageData;
  description: string;
};

const Dishescard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div>
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={300}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default Dishescard;
