"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "./BlogCard";
import blogs from "@/app/blogs/blogs";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

export default function LandingBlogs() {
  const { theme } = useTheme();
  const [numBlogs, setNumBlogs] = useState(6);

  useEffect(() => {
    const updateNumBlogs = () => {
      if (window.innerWidth < 768) {
        setNumBlogs(2);
      } else if (window.innerWidth < 1024) {
        setNumBlogs(2);
      } else {
        setNumBlogs(3);
      }
    };

    updateNumBlogs();
    window.addEventListener("resize", updateNumBlogs);

    return () => window.removeEventListener("resize", updateNumBlogs);
  }, []);

  return (
    <div className="px-[5%] sm:px-[10%] mb-[5%] pb-[5%] w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-8"
      >
        <motion.div
          variants={fadeUp}
          className={`flex items-center mb-5 gap-4 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            My Writings
          </h1>
          <div
            className="flex-grow h-[1px]"
            style={{
              backgroundImage: theme
                ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))",
            }}
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className={`text-base lg:text-md w-full md:w-[50%] mt-2 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          I write about the practical decisions behind shipping real products — architecture choices, payment flows, deployment pipelines, and lessons from production.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {blogs.slice(0, numBlogs).map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            img={blog.img}
            shortDescription={blog.shortDescription}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <Link href="/blogs">
            <div
              className={`px-4 py-2 rounded-md text-sm sm:text-[15px] font-medium hover:cursor-pointer ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              View All Blogs
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
