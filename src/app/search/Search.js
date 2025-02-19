"use client";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Router import किया
import courses from "../courses/courses-api";
import { LongTermsJson } from "../long-term-course/corsesApi";

function SearchInput(params) {
  const [input, setInput] = useState("");
  const router = useRouter();
  const allCourses = [...courses, ...LongTermsJson];

  const handleSearch = () => {
    if (input.trim() === "") return;
    router.push(`/search?query=${encodeURIComponent(input)}`);
  };
  return (
    <>
      <div className="bg-white px-4 py-2 flex items-center justify-between w-fit md:w-full rounded-md shadow-lg">
        <input
          className="focus:outline-none w-full"
          type="text"
          placeholder="Search for Courses"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <CiSearch
          onClick={handleSearch}
          className="bg-orange-500 text-white w-10 h-10 p-2 rounded-md cursor-pointer"
        />
      </div>
    </>
  );
}

export default SearchInput;
