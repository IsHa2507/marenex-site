"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import Button from "@/component/ui/button";

const blogs = [
  {
    title:
      "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    desc:
      "For any local business, showing up on Google Maps is one of the most powerful...",
    image: "/blogs/blog1.jpg",
    date: "25 Nov, 2025",
  },
  {
    title:
      "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    desc:
      "If you’ve spent any time poking around in Google Ads, you’ve probably...",
    image: "/blogs/blog2.jpg",
    date: "10 Oct, 2025",
  },
  {
    title:
      "How to Use Negative Keywords in Google Ads to Save Money",
    desc:
      "Running Google Ads is kind of like playing poker. You can win big if you know what...",
    image: "/blogs/blog3.jpg",
    date: "05 Sep, 2025",
  },
];

export default function BlogHighlight() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Our Latest Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>

                <p className="mb-6 line-clamp-2 text-sm text-gray-600">
                  {blog.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Read Button */}
                  <button className="rounded bg-blue-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                    Read Blog
                  </button>

                  {/* Date */}
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 flex justify-center">
          <Button label="Veiw More Blogs"/>
        </div>
      </div>
    </section>
  );
}
