import { InstructorCourseCardProps } from "@/types/courses/InstructorCourseCard";
import Image from "next/image";
import React from "react";

const InstructorCourseCard: React.FC<InstructorCourseCardProps> = ({
  id,
  image,
  title,
  description,
}) => {
  return (
    <div id={id} className="flex gap-2 shadow-sm">
      <Image src={image} alt={title} width={100} height={200} />
      <div className="flex flex-col gap-2 justify-between">
        <div>
          <h1 className="text-white font-bold text-2xl">{title}</h1>
          <p className="font-light text-md text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseCard;
