"use client";
import experiences from "@/app/about/experiences";
import { useTheme } from "@/app/hooks/useTheme";
import ExperienceCard from "./ExperienceCard";
import Footer from "./Footer";

export default function About() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-[5%] sm:px-0">
        {/* About Section */}
        <div className="mb-8">
          <div
            className={`flex items-center mb-5 gap-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              About Me
            </h1>
            <div
              className="flex-grow h-[1px]"
              style={{
                backgroundImage: theme
                  ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                  : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))",
              }}
            />
          </div>
          <div className="flex mt-2">
            <p
              className={`text-sm sm:text-base text-justify sm:text-left lg:text-md w-full ${
                theme ? "text-[#666666]" : "text-[#aaaaaa]"
              }`}
            >
              {`Greetings 👋 I am Lawrence, a dedicated Full-Stack Developer based in Bangladesh, specializing in building high-performance, scalable web applications. With expertise in React, Next.js, and Tailwind CSS, I craft responsive, SEO-optimized frontends, enhanced by Framer Motion for engaging animations. I streamline state management with Redux and Redux Toolkit, and develop robust backends using MongoDB and GraphQL for efficient data handling and API performance. My experience with Firebase enables real-time features, while my proficiency in integrating secure payment gateways like Stripe and PayPal ensures seamless transactions. Passionate about solving complex technical challenges, I am committed to delivering innovative, user-centric solutions that drive business impact.`}
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-10 overflow-hidden">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl w-full font-bold mb-8 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            Experience
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id}>
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
