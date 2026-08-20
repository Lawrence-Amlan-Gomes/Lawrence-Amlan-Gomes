"use client";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function TestimonialVideo({ videoUrl, videoPosition, className }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
      setIsFullscreen(fsEl === videoRef.current);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current?.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen();
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const time = Number(e.target.value);
    if (videoRef.current) videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
      className={`relative ${className}`}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        muted={muted}
        loop
        playsInline
        className={`w-full h-full ${isFullscreen ? "object-contain bg-black" : "object-cover"}`}
        style={isFullscreen ? undefined : { objectPosition: `${videoPosition.x}% ${videoPosition.y}%` }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
      <div className="absolute bottom-0 left-0 right-0 px-2 pt-3 pb-1.5 bg-gradient-to-t from-black/75 to-transparent">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.01}
          value={currentTime}
          onChange={handleSeek}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          aria-label="Seek"
          className="w-full h-1 mb-1.5 accent-white cursor-pointer"
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="text-white text-[11px] hover:opacity-75"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="text-white text-[11px] hover:opacity-75"
            >
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="text-white text-[11px] hover:opacity-75"
            >
              <FaExpand />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCard({
  id,
  name,
  designation,
  comment,
  rating = 5,
  photoUrl,
  photoPosition = { x: 50, y: 50 },
  videoUrl,
  videoPosition = { x: 50, y: 50 },
  videoHidden,
  projectUrlTitle,
  locked,
  canEdit,
  onEdit,
  variant = "grid",
}) {
  const { theme } = useTheme();
  const hasVideo = !!(videoUrl && !videoHidden);
  const isLanding = variant === "row";
  const isRow = isLanding && hasVideo;

  const cardTone = theme
    ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#aaaaaa] border-blue-800 hover:shadow-lg hover:shadow-blue-900/10"
    : "bg-[#000000] hover:bg-[#060606] text-[#eeeeee] border-blue-800 hover:shadow-lg hover:shadow-blue-500/10";

  const header = (
    <div className="flex items-start justify-between gap-4 mb-3">
      <FaQuoteLeft className={`text-xl ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`} />
      {canEdit && !locked && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit?.();
          }}
          className={`text-xs font-medium underline-offset-2 hover:underline ${
            theme ? "text-blue-700" : "text-blue-500"
          }`}
        >
          Edit
        </button>
      )}
    </div>
  );

  const stars = (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />
        ) : (
          <FaRegStar
            key={i}
            className={`text-xs sm:text-sm ${theme ? "text-[#dddddd]" : "text-[#333333]"}`}
          />
        )
      )}
    </div>
  );

  const commentBlock = (
    <p
      className={`lg:text-md text-sm leading-relaxed text-justify mb-3 ${
        theme ? "text-[#666666]" : "text-[#aaaaaa]"
      }`}
    >
      {comment}
    </p>
  );

  const authorBlock = (
    <div>
      <div className="flex items-center gap-4 mb-3">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={photoUrl}
            alt={name}
            fill
            className="object-cover"
            style={{ objectPosition: `${photoPosition.x}% ${photoPosition.y}%` }}
          />
        </div>
        <div className="min-w-0">
          <h3
            className={`font-semibold lg:text-md text-sm truncate ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-xs sm:text-sm font-medium truncate ${
              theme ? "text-blue-700" : "text-blue-500"
            }`}
          >
            {designation}
          </p>
        </div>
      </div>

      {projectUrlTitle && (
        <Link
          href={`/project/${projectUrlTitle}`}
          onClick={(e) => e.stopPropagation()}
          className={`text-xs sm:text-sm font-medium underline-offset-4 transition-colors ${
            theme ? "text-blue-600 hover:text-blue-700" : "text-blue-700 hover:text-blue-800"
          }`}
        >
          View Project →
        </Link>
      )}
    </div>
  );

  const scrollableComment = (
    <div
      className={`flex-1 min-h-0 overflow-y-auto pr-1 my-1 scrollbar-thin scrollbar-track-transparent ${
        theme ? "scrollbar-thumb-blue-700" : "scrollbar-thumb-blue-600"
      }`}
    >
      {commentBlock}
    </div>
  );

  if (isRow) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`w-[480px] sm:w-[560px] lg:w-[640px] h-[320px] max-[425px]:h-[400px] sm:h-[360px] lg:h-[400px] mx-auto rounded-2xl border-[1px] flex flex-row items-stretch gap-6 p-8 relative overflow-hidden transition-shadow ${cardTone}`}
      >
        <div className="flex-1 min-w-0 h-full flex flex-col">
          {header}
          {stars}
          {scrollableComment}
          {authorBlock}
        </div>
        <TestimonialVideo
          videoUrl={videoUrl}
          videoPosition={videoPosition}
          className="self-stretch aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden border-[1px] border-blue-800/40"
        />
      </motion.div>
    );
  }

  if (isLanding) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`w-[340px] max-[425px]:w-[90vw] sm:w-[400px] lg:w-[460px] h-[320px] max-[425px]:h-[400px] sm:h-[360px] lg:h-[400px] mx-auto p-8 rounded-2xl border-[1px] flex flex-col relative overflow-hidden transition-shadow ${cardTone}`}
      >
        {header}
        {stars}
        {scrollableComment}
        {authorBlock}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`w-full h-full mx-auto p-8 rounded-2xl border-[1px] flex flex-col justify-between relative transition-shadow ${cardTone}`}
    >
      <div className="flex flex-col flex-grow">
        {header}
        {stars}
        {commentBlock}
        {hasVideo && (
          <TestimonialVideo
            videoUrl={videoUrl}
            videoPosition={videoPosition}
            className="w-full max-w-[240px] max-h-[360px] aspect-[2/3] mx-auto rounded-lg overflow-hidden mb-6 border-[1px] border-blue-800/40"
          />
        )}
      </div>
      {authorBlock}
    </motion.div>
  );
}
