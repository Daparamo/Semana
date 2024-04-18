import { Card } from "@tremor/react";
import { Post } from "../../types";
import { PostBody } from "./Post/PostBody";
import { PostFooter } from "./Post/PostFooter";
import { PostHeader } from "./Post/PostHeader";

interface ListPostProps {
  posts: Post[];
}

export const ListPost = ({ posts }: ListPostProps) => {
  return (
    <div className="mx-auto max-w-md p-4 flex flex-col gap-4">
      {posts.map((post) => (
        <Card key={post.id} className="text-white flex flex-col gap-4">
          <PostHeader post={post} />
          <PostBody post={post} />
          <PostFooter post={post} />
        </Card>
      ))}
    </div>
  );
};
