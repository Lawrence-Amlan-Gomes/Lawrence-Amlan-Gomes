"use client";

import { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { FaStar, FaRegStar, FaGripVertical } from "react-icons/fa";
import AdminTestimonialEditor from "./AdminTestimonialEditor";
import {
  getAllTestimonialsAction,
  adminUpdateSettingsAction,
  adminDeleteTestimonialAction,
  adminReorderTestimonialsAction,
} from "@/app/actions/testimonials";

export default function AdminTestimonials({ initialTestimonials, initialSubmissionsOpen }) {
  const { theme } = useTheme();
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [submissionsOpen, setSubmissionsOpen] = useState(initialSubmissionsOpen);
  const [editing, setEditing] = useState(null); // null | "create" | testimonial
  const [togglingSettings, setTogglingSettings] = useState(false);
  const [toggleError, setToggleError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [savingOrder, setSavingOrder] = useState(false);

  const refresh = async () => {
    const fresh = await getAllTestimonialsAction();
    setTestimonials(fresh);
  };

  const handleSaved = async () => {
    await refresh();
    setEditing(null);
  };

  const handleToggle = async () => {
    setTogglingSettings(true);
    setToggleError("");
    try {
      const updated = await adminUpdateSettingsAction(!submissionsOpen);
      setSubmissionsOpen(updated.testimonialSubmissionsOpen);
    } catch (err) {
      setToggleError(err.message || "Failed to update setting.");
    } finally {
      setTogglingSettings(false);
    }
  };

  const handleDragStart = (index) => () => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => (e) => {
    e.preventDefault();
    if (index !== dragOverIndex) setDragOverIndex(index);
  };

  const handleDrop = (index) => async (e) => {
    e.preventDefault();
    setDragOverIndex(null);
    if (draggedIndex === null || draggedIndex === index) return;

    const reordered = [...testimonials];
    const [moved] = reordered.splice(draggedIndex, 1);
    reordered.splice(index, 0, moved);
    setTestimonials(reordered);
    setDraggedIndex(null);

    setSavingOrder(true);
    try {
      await adminReorderTestimonialsAction(reordered.map((t) => t.id));
    } finally {
      setSavingOrder(false);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this testimonial? This also removes its photo/video from storage.")) return;
    setDeletingId(id);
    try {
      await adminDeleteTestimonialAction(id);
      await refresh();
    } finally {
      setDeletingId(null);
    }
  };

  const cardBorder = theme ? "border-[#dddddd]" : "border-[#222222]";
  const textMuted = theme ? "text-[#666666]" : "text-[#aaaaaa]";
  const textHeading = theme ? "text-[#333333]" : "text-[#dddddd]";

  return (
    <div>
      <div className={`text-[22px] lg:text-[28px] font-bold mb-1 ${textHeading}`}>Testimonials</div>
      <div className={`mb-6 text-[13px] lg:text-[15px] ${textMuted}`}>
        Manage client testimonials and public submissions.
      </div>

      <div
        className={`p-5 rounded-lg border-[1px] mb-6 flex items-center justify-between gap-4 ${cardBorder}`}
      >
        <div>
          <div className={`text-[14px] font-medium ${textHeading}`}>Accept public submissions</div>
          <div className={`text-[12px] ${textMuted}`}>
            When on, visitors can add a testimonial and edit any unlocked one.
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          disabled={togglingSettings}
          className={`w-14 h-8 p-0 rounded-full relative transition-colors flex-shrink-0 ${
            submissionsOpen ? "bg-blue-700" : theme ? "bg-[#dddddd]" : "bg-[#333333]"
          } disabled:opacity-60`}
          aria-label="Toggle public submissions"
        >
          <span
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${
              submissionsOpen ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
      {toggleError && (
        <div className="mb-6 -mt-4 text-[13px] text-red-600">{toggleError}</div>
      )}

      {editing ? (
        <div className="mb-6">
          <AdminTestimonialEditor
            existing={editing === "create" ? null : editing}
            onSaved={handleSaved}
            onCancel={() => setEditing(null)}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setEditing("create")}
          className={`mb-6 px-5 py-2.5 rounded-md text-[14px] font-medium ${
            theme
              ? "bg-blue-800 text-white hover:bg-white hover:text-blue-800 border-[1px] border-blue-800"
              : "bg-blue-700 text-white hover:bg-black hover:text-blue-600 border-[1px] border-blue-600"
          }`}
        >
          + Add testimonial
        </button>
      )}

      <div className={`mb-2 flex items-center gap-2 text-[12px] ${textMuted}`}>
        <FaGripVertical className="text-[11px]" />
        Drag to reorder — this order is shown on the public site.
        {savingOrder && <span className="italic">Saving order...</span>}
      </div>

      <div className="flex flex-col gap-3">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            draggable
            onDragStart={handleDragStart(index)}
            onDragOver={handleDragOver(index)}
            onDrop={handleDrop(index)}
            onDragEnd={handleDragEnd}
            className={`p-4 rounded-lg border-[1px] flex items-center gap-4 transition-opacity ${cardBorder} ${
              draggedIndex === index ? "opacity-40" : ""
            } ${
              dragOverIndex === index && draggedIndex !== index
                ? theme
                  ? "border-blue-700"
                  : "border-blue-600"
                : ""
            }`}
          >
            <FaGripVertical
              className={`cursor-grab active:cursor-grabbing flex-shrink-0 ${
                theme ? "text-[#bbbbbb]" : "text-[#555555]"
              }`}
            />
            <img
              src={t.photoUrl}
              alt={t.name}
              className="w-12 h-12 rounded-md object-cover flex-shrink-0"
              style={{ objectPosition: `${t.photoPosition?.x ?? 50}% ${t.photoPosition?.y ?? 50}%` }}
            />
            <div className="flex-1 min-w-0">
              <div className={`text-[14px] font-medium truncate ${textHeading}`}>{t.name}</div>
              <div className={`text-[12px] truncate ${textMuted}`}>{t.designation}</div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) =>
                  i <= t.rating ? (
                    <FaStar key={i} className="text-yellow-400 text-[10px]" />
                  ) : (
                    <FaRegStar key={i} className={`text-[10px] ${theme ? "text-[#dddddd]" : "text-[#333333]"}`} />
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-[11px] flex-shrink-0">
              <span className={t.locked ? "text-red-600 font-medium" : textMuted}>
                {t.locked ? "Locked" : "Unlocked"}
              </span>
              {t.videoUrl && (
                <span className={textMuted}>{t.videoHidden ? "Video hidden" : "Video visible"}</span>
              )}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => setEditing(t)}
                className={`text-[13px] font-medium underline-offset-2 hover:underline ${
                  theme ? "text-blue-700" : "text-blue-500"
                }`}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(t.id)}
                disabled={deletingId === t.id}
                className="text-[13px] font-medium text-red-600 hover:underline disabled:opacity-60"
              >
                {deletingId === t.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <div className={`text-[13px] ${textMuted}`}>No testimonials yet.</div>
        )}
      </div>
    </div>
  );
}
