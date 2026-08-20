"use client";

import { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaStar } from "react-icons/fa";
import MediaFramer from "./MediaFramer";
import projects from "@/app/projects/projects";
import {
  requestUploadUrl,
  adminCreateTestimonialAction,
  adminUpdateTestimonialAction,
} from "@/app/actions/testimonials";
import { uploadToPresignedPost } from "@/utils/upload-util";

export default function AdminTestimonialEditor({ existing, onSaved, onCancel }) {
  const { theme } = useTheme();
  const isEdit = !!existing;

  const [rating, setRating] = useState(existing?.rating ?? 5);
  const [comment, setComment] = useState(existing?.comment ?? "");
  const [name, setName] = useState(existing?.name ?? "");
  const [designation, setDesignation] = useState(existing?.designation ?? "");
  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [photoPosition, setPhotoPosition] = useState(existing?.photoPosition ?? { x: 50, y: 50 });
  const [videoPosition, setVideoPosition] = useState(existing?.videoPosition ?? { x: 50, y: 50 });
  const [videoHidden, setVideoHidden] = useState(existing?.videoHidden ?? false);
  const [projectUrlTitle, setProjectUrlTitle] = useState(existing?.projectUrlTitle ?? "");
  const [locked, setLocked] = useState(existing?.locked ?? false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const photoPreview = photoFile ? URL.createObjectURL(photoFile) : existing?.photoUrl;
  const videoPreview = videoFile ? URL.createObjectURL(videoFile) : existing?.videoUrl;

  const inputClass = `w-full px-4 py-2.5 rounded-md border-[1px] text-[14px] outline-none ${
    theme
      ? "bg-[#ffffff] border-[#dddddd] text-[#333333] focus:border-blue-700"
      : "bg-[#000000] border-[#222222] text-[#dddddd] focus:border-blue-600"
  }`;
  const labelClass = `text-[13px] font-medium mb-1.5 block ${
    theme ? "text-[#555555]" : "text-[#aaaaaa]"
  }`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEdit && !photoFile) {
      setError("A photo is required.");
      return;
    }
    if (!comment.trim() || !name.trim() || !designation.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const payload = {
        rating,
        comment,
        name,
        designation,
        photoPosition,
        videoPosition,
        videoHidden,
        projectUrlTitle: projectUrlTitle || null,
        locked,
      };

      if (photoFile) {
        const { url, fields, key, publicUrl } = await requestUploadUrl({
          kind: "photo",
          contentType: photoFile.type,
        });
        await uploadToPresignedPost({ url, fields }, photoFile);
        payload.photoKey = key;
        payload.photoUrl = publicUrl;
      }

      if (videoFile) {
        const { url, fields, key, publicUrl } = await requestUploadUrl({
          kind: "video",
          contentType: videoFile.type,
        });
        await uploadToPresignedPost({ url, fields }, videoFile);
        payload.videoKey = key;
        payload.videoUrl = publicUrl;
      }

      if (isEdit) {
        await adminUpdateTestimonialAction(existing.id, payload);
      } else {
        await adminCreateTestimonialAction(payload);
      }

      onSaved?.();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-lg border-[1px] w-full max-w-[640px] ${
        theme ? "border-[#dddddd] bg-[#ffffff]" : "border-[#222222] bg-[#000000]"
      }`}
    >
      <div className="mb-4">
        <span className={labelClass}>Rating</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button type="button" key={star} onClick={() => setRating(star)} aria-label={`${star} star`}>
              <FaStar
                className={`text-lg ${
                  star <= rating ? "text-yellow-400" : theme ? "text-[#dddddd]" : "text-[#333333]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass}>Name</label>
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Designation</label>
          <input
            className={inputClass}
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass}>Comment</label>
        <textarea
          className={`${inputClass} min-h-[100px] resize-none`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className={labelClass}>Project link</label>
        <select
          className={inputClass}
          value={projectUrlTitle}
          onChange={(e) => setProjectUrlTitle(e.target.value)}
        >
          <option value="">None</option>
          {projects.map((p) => (
            <option key={p.urlTitle} value={p.urlTitle}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label className={labelClass}>Photo (1:1)</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
            className={`text-[13px] mb-3 ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}
          />
          <MediaFramer
            type="photo"
            src={photoPreview}
            aspectClass="aspect-square"
            position={photoPosition}
            onChange={setPhotoPosition}
          />
        </div>
        <div>
          <label className={labelClass}>Video (2:3)</label>
          <input
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
            className={`text-[13px] mb-3 ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}
          />
          {videoPreview ? (
            <>
              <MediaFramer
                type="video"
                src={videoPreview}
                aspectClass="aspect-[2/3]"
                position={videoPosition}
                onChange={setVideoPosition}
              />
              <label className={`flex items-center gap-2 mt-3 text-[13px] ${theme ? "text-[#555555]" : "text-[#aaaaaa]"}`}>
                <input
                  type="checkbox"
                  checked={videoHidden}
                  onChange={(e) => setVideoHidden(e.target.checked)}
                />
                Hide video on public site
              </label>
            </>
          ) : (
            <div className={`text-[12px] ${theme ? "text-[#999999]" : "text-[#777777]"}`}>
              No video uploaded.
            </div>
          )}
        </div>
      </div>

      <label className={`flex items-center gap-2 mb-6 text-[13px] ${theme ? "text-[#555555]" : "text-[#aaaaaa]"}`}>
        <input type="checkbox" checked={locked} onChange={(e) => setLocked(e.target.checked)} />
        Lock (prevents visitor edits)
      </label>

      {error && <div className="mb-4 text-[13px] text-red-600">{error}</div>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={submitting}
          className={`px-5 py-2.5 rounded-md text-[14px] font-medium ${
            theme
              ? "bg-blue-800 text-white hover:bg-white hover:text-blue-800 border-[1px] border-blue-800"
              : "bg-blue-700 text-white hover:bg-black hover:text-blue-600 border-[1px] border-blue-600"
          } disabled:opacity-60`}
        >
          {submitting ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`px-5 py-2.5 rounded-md text-[14px] font-medium border-[1px] ${
            theme ? "border-[#dddddd] text-[#555555]" : "border-[#222222] text-[#aaaaaa]"
          }`}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
