import { Post } from "../../../types";

interface PostBodyProps {
  post: Post;
}

export const PostBody = ({ post }: PostBodyProps) => {
  return (
    <>
      <img className="rounded-lg" src={post.img}></img>
    </>
  );
};
