import { Suspense } from "react";
import BlogListPage from "./BlogListPage";

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogListPage />
    </Suspense>
  );
}
