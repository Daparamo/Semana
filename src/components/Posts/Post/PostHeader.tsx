import { Post } from "../../../types";

interface PostHeaderProps {
  post: Post;
}

export const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <>
      <h1 className="text-lg">{post.title}</h1>
      <div className="text-sm flex items-center gap-2">
        <img className="rounded-full size-10" src={post.authorPicture}></img>
        <p>{post.author}</p>
      </div>
    </>
  );
};
