"use client";

import { Suspense } from "react";
import Navbar from "../nav";
import Footer from "../footer";
import SearchResults from "./searchResults";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
