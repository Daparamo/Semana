import { useEffect, useState } from "react";
import { Post } from "../types";

export const useFilteredPosts = (tag: string, posts: Post[] | undefined) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filterAndSetPosts = (posts: Post[]) => {
      if (tag && tag.toLowerCase() !== "all") {
        posts = posts.filter((post) => post.tags.includes(tag.toLowerCase()));
      }
      setFilteredPosts(posts);
    };

    filterAndSetPosts(posts ?? []);
  }, [tag, posts]);

  return { filteredPosts };
};
