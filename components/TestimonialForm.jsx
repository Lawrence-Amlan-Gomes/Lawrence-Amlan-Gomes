"use client";

import { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaStar } from "react-icons/fa";
import {
  requestUploadUrl,
  createPublicTestimonialAction,
  updatePublicTestimonialAction,
} from "@/app/actions/testimonials";
import { uploadToPresignedPost } from "@/utils/upload-util";
import DropzoneUpload from "./DropzoneUpload";

export default function TestimonialForm({ existing, onSaved, onCancel }) {
  const { theme } = useTheme();
  const isEdit = !!existing;

  const [rating, setRating] = useState(existing?.rating ?? 5);
  const [comment, setComment] = useState(existing?.comment ?? "");
  const [name, setName] = useState(existing?.name ?? "");
  const [designation, setDesignation] = useState(existing?.designation ?? "");
  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
    if (honeypot) return;

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
      const payload = { rating, comment, name, designation };

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
        await updatePublicTestimonialAction(existing.id, payload);
      } else {
        await createPublicTestimonialAction(payload);
      }

      onSaved?.();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-8 rounded-lg border-[1px] w-full ${
        theme ? "border-[#dddddd] bg-[#ffffff]" : "border-[#222222] bg-[#000000]"
      }`}
    >
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mb-4">
        <span className={labelClass}>Rating</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              aria-label={`${star} star`}
            >
              <FaStar
                className={`text-lg ${
                  star <= rating ? "text-yellow-400" : theme ? "text-[#dddddd]" : "text-[#333333]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass}>Name</label>
        <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className={labelClass}>Designation</label>
        <input
          className={inputClass}
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="e.g. Local Client, Dhaka"
        />
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
        <label className={labelClass}>Photo (square, 1:1) {isEdit && "— leave empty to keep current"}</label>
        <div className="max-w-[200px]">
          <DropzoneUpload
            accept="image/jpeg,image/png,image/webp"
            aspectClass="aspect-square"
            label="Drag & drop or click to upload a photo"
            file={photoFile}
            previewUrl={existing?.photoUrl}
            onFileSelected={setPhotoFile}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass}>Video, optional (portrait, 2:3) {isEdit && "— leave empty to keep current"}</label>
        <div className="max-w-[160px]">
          <DropzoneUpload
            accept="video/mp4,video/webm,video/quicktime"
            aspectClass="aspect-[2/3]"
            label="Drag & drop or click to upload a video"
            file={videoFile}
            previewUrl={existing?.videoUrl}
            onFileSelected={setVideoFile}
          />
        </div>
      </div>

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
          {submitting ? "Saving..." : isEdit ? "Save changes" : "Submit testimonial"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className={`px-5 py-2.5 rounded-md text-[14px] font-medium border-[1px] ${
              theme ? "border-[#dddddd] text-[#555555]" : "border-[#222222] text-[#aaaaaa]"
            }`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
