import * as React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import bahir_dar_picture from "../static/media/Bahir-dar-5.jpg";
import bahir_dar_picture_1 from "../static/media/Bahir-dar-3.jpg";
import bahir_dar_picture_2 from "../static/media/Bahir-dar-1.jpg";

const mainFeaturedPost = {
  title: "Welcome to Bahir Dar City community website",
  description: "Connecting Bahir Dar: A Global Community Hub",
  image: bahir_dar_picture,
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Give back to the community",
    date: "May 4",
    description:
      "Want to make a difference but feeling overwhelmed?  Forget capes and tights – everyday acts of giving back can be your superpower!  This post will show you how simple actions can create ripples of positive change in your community.",
    image: bahir_dar_picture_1,
    imageLabel: "Image Text",
  },
  {
    title: "What to visit in Bahir Dar",
    date: "May 4",
    description: `Bahir Dar's stunning scenery, with Lake Tana shimmering under the midday sun, leaves you speechless. But this city offers so much more! Venture beyond the picture-perfect views to discover a rich tapestry of history, culture, and adventure.`,
    image: bahir_dar_picture_2,
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Welcome to our non-profit community website, dedicated to connecting individuals born in Bahir Dar, now residing around the globe. Our mission is to facilitate swift information exchange, foster collaboration, and support one another. Join us in building a stronger, united community.",
  archives: [{ title: "Coming soon...", url: "#" }],
  social: [
    { name: "X (Coming soon)", icon: XIcon },
    { name: "Facebook (Coming soon)", icon: FacebookIcon },
  ],
};

export default function Home() {
  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="News and Updates" posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
}
