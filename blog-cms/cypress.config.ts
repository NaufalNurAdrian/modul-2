import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://naufal-blog.vercel.app/"
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});