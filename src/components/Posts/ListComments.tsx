import { Divider } from "@tremor/react";
import { Comment } from "../../types";

interface ListCommentsProps {
  comments: Comment[] | undefined;
  isLoading: boolean;
}

export const ListComments = ({ comments, isLoading }: ListCommentsProps) => {
  return (
    <div className="mx-auto max-w-md p-4 flex flex-col gap-4">
      {isLoading && <h1 className="text-white">Loading... 🕐</h1>}
      {!isLoading && comments && comments?.length === 0 && (
        <h1 className="text-white">No comments... 😿</h1>
      )}
      {!isLoading &&
        comments &&
        comments.map((comment) => (
          <div key={comment.id} className="flex flex-col">
            <div className="flex gap-1">
              <img
                className="rounded-full size-12"
                src={comment.authorPicture}
              ></img>
              <div>
                <p className="text-white text-sm">{comment.author}</p>
                <p className="text-md">{comment.message}</p>
              </div>
            </div>
            <Divider></Divider>
          </div>
        ))}
    </div>
  );
};
