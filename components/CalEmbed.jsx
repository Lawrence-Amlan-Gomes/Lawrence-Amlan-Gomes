"use client";
import { useEffect } from "react";

const CAL_LINK = "lawrence-amlan-gomes/15-minutes-meeting";
const NAMESPACE = "15-minutes-meeting";

export default function CalEmbed({ theme }) {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", NAMESPACE, { origin: "https://cal.com" });

    const container = document.getElementById("cal-inline-container");
    if (container) container.innerHTML = "";

    window.Cal.ns[NAMESPACE]("inline", {
      elementOrSelector: "#cal-inline-container",
      config: { layout: "month_view", theme: theme ? "light" : "dark" },
      calLink: CAL_LINK,
    });

    window.Cal.ns[NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: theme ? "light" : "dark",
    });
  }, [theme]);

  return (
    <div
      id="cal-inline-container"
      style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "scroll" }}
    />
  );
}
