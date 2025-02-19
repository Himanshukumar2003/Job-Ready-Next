"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Head from 'next/head';
import courses from "../courses/courses-api";
import { LongTermsJson } from "../long-term-course/corsesApi";
import Link from "next/link";
import Navbar from "../nav";
import Footer from "../footer";
import SearchInput from "./searchInput";

const allCourses = [...courses, ...LongTermsJson];

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const filteredCourses = useMemo(() => {
    if (!query) return [];
    return allCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      <Head>
        <title>Search Results for: {query}</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className="rounded-xl p20 relative breadcrumb bg-theme-dark-gradient">
          <div className="grid grid-cols-1 lg:grid-cols-8 justify-center">
            <div className="flex flex-col items-start justify-center p-10 md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Search Results for: <span className="text-white">{query}</span>
              </h2>
              <SearchInput className="w-full" />
            </div>
          </div>
        </div>
        <div className="mx-auto p-4 bg-theme-gradient">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="mb-4 rounded-lg overflow-hidden search-card"
              >
                <Link
                  href={
                    LongTermsJson.some((c) => c.id === course.id)
                      ? `/long-term-course/${course.sulg}`
                      : `/courses/${course.sulg}`
                  }
                  className="rounded-md"
                >
                  <div>
                    <h1 className="font-bold mb-2">{course.title}</h1>
                    <p className="mb-2">{course.description}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-theme-primary-one font-semibold text-4xl text-center">
              No results found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;