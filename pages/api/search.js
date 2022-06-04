import { getPosts } from "@/lib/posts";

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === "production") {
    //
  } else {
    posts = getPosts();
  }
  console.log(posts)
  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1
  );


  res.status(200).json({results});
}
