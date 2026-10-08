"use client";

import { useTheme } from "@/app/hooks/useTheme";

export default function MediaFramer({
  type,
  src,
  aspectClass,
  position,
  onChange,
}) {
  const { theme } = useTheme();

  if (!src) return null;

  const objectPosition = `${position.x}% ${position.y}%`;

  return (
    <div className="w-full">
      <div
        className={`w-[160px] mx-auto rounded-lg overflow-hidden border-[1px] ${aspectClass} ${
          theme ? "border-[#dddddd]" : "border-[#222222]"
        }`}
      >
        {type === "photo" ? (
          <img
            src={src}
            alt="Framing preview"
            className="w-full h-full object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <video
            src={src}
            className="w-full h-full object-cover"
            style={{ objectPosition }}
            muted
            playsInline
            loop
            autoPlay
          />
        )}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <label className={`text-[12px] flex flex-col gap-1 ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
          Horizontal position
          <input
            type="range"
            min={0}
            max={100}
            value={position.x}
            onChange={(e) => onChange({ ...position, x: Number(e.target.value) })}
          />
        </label>
        <label className={`text-[12px] flex flex-col gap-1 ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}>
          Vertical position
          <input
            type="range"
            min={0}
            max={100}
            value={position.y}
            onChange={(e) => onChange({ ...position, y: Number(e.target.value) })}
          />
        </label>
      </div>
    </div>
  );
}
