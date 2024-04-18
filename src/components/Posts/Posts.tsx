import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPosts } from "../../api/post";
import { useFilteredPosts } from "../../hooks/useFilteredPosts";
import { Post } from "../../types";
import { FilterPost } from "./FilterPost";
import { ListPost } from "./ListPost";
import { PostsEmpty } from "./PostsEmpty";

export const Posts = () => {
  const { data, isLoading } = useQuery<Post[]>({
    refetchOnWindowFocus: false,
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const [tag, setTag] = useState("all");
  const { filteredPosts } = useFilteredPosts(tag, data);

  return (
    <>
      {isLoading && <h1 className="text-white">Loading</h1>}
      <FilterPost tagSelected={tag} setTag={setTag} />
      <>
        {!isLoading && filteredPosts && filteredPosts.length === 0 && (
          <PostsEmpty tag={tag} />
        )}
        {data && data.length > 0 && <ListPost posts={filteredPosts ?? []} />}
      </>
    </>
  );
};
