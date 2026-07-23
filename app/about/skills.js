// Each item: [name, lightThemeIcon, darkThemeIcon] — icon is null when no local asset exists yet.
const skills = [
  {
    category: "Frontend",
    items: [
      ["Next.js", "/NextJs.png", "/NextJs.png"],
      ["React", "/React.png", "/React.png"],
      ["TypeScript", "/ts.png", "/ts.png"],
      ["JavaScript", "/js.png", "/js.png"],
      ["Tailwind CSS", "/TailwindCss.png", "/TailwindCss.png"],
      ["Redux Toolkit", "/redux.png", "/redux.png"],
      ["Framer Motion", "/framerMotion.png", "/framerMotion.png"],
    ],
  },
  {
    category: "Backend & Data",
    items: [
      ["Node.js", "/node.png", "/node.png"],
      ["Express", "/express.png", "/express.png"],
      ["MongoDB", "/Mongodb.png", "/Mongodb.png"],
      ["PostgreSQL / SQL", "/postgresql.png", "/postgresql.png"],
      ["Redis", "/redis.png", "/redis.png"],
      ["WebSockets", "/socketio.png", "/socketio.png"],
      ["AWS S3", "/awsS3.png", "/awsS3.png"],
    ],
  },
  {
    category: "Practices & Integrations",
    items: [
      ["Auth & Security", null, null],
      ["Testing & Tooling", null, null],
      ["AI Integration (Gemini)", "/gemini.png", "/gemini.png"],
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      ["Git / GitHub", "/gitHubLight.png", "/gitHubDark.png"],
      ["Vercel", "/vercel.png", "/vercel.png"],
      ["Netlify", "/netlify.png", "/netlify.png"],
      ["Coolify", "/coolify.png", "/coolify.png"],
      ["Paddle", "/paddle.png", "/paddle.png"],
      ["CI/CD", null, null],
    ],
  },
];

export default skills;
