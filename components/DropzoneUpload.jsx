"use client";

import { useRef, useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FiUploadCloud } from "react-icons/fi";

export default function DropzoneUpload({
  accept,
  aspectClass,
  label,
  file,
  previewUrl,
  onFileSelected,
}) {
  const { theme } = useTheme();
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const allowedTypes = accept.split(",").map((t) => t.trim());
  const isVideo = accept.includes("video");
  const preview = file ? URL.createObjectURL(file) : previewUrl;

  const handleFiles = (fileList) => {
    const picked = fileList?.[0];
    if (!picked || !allowedTypes.includes(picked.type)) return;
    onFileSelected(picked);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      role="button"
      tabIndex={0}
      aria-label={label}
      className={`group relative w-full ${aspectClass} rounded-lg border-2 border-dashed cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-2 text-center px-3 transition-colors ${
        dragging
          ? theme
            ? "border-blue-800 bg-blue-50"
            : "border-blue-500 bg-blue-950/20"
          : theme
          ? "border-blue-700"
          : "border-blue-500"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {preview ? (
        <>
          {isVideo ? (
            <video
              src={preview}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-xs font-medium">Change</span>
          </div>
        </>
      ) : (
        <FiUploadCloud className={`text-2xl ${theme ? "text-blue-700" : "text-blue-500"}`} />
      )}
    </div>
  );
}
