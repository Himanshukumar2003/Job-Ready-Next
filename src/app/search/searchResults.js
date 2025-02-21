"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import courses from "../courses/courses-api";
import { LongTermsJson } from "../long-term-course/corsesApi";

const SearchResults = ({ setQuery, setFilteredCourses }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const allCourses = [...courses, ...LongTermsJson];

  useEffect(() => {
    setQuery(query);
    if (query) {
      const results = allCourses.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(results);
    }
  }, [query, setQuery, setFilteredCourses]);

  return null; // This component only handles logic, no UI.
};

export default SearchResults;
