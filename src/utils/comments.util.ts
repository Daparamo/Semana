import { Comment, CommentsApi } from "../types";

export const getCommentsFm = (data: CommentsApi): Comment[] => {
  const comments: Comment[] = [];
  if (data.data.length === 0) return [];
  data.data.forEach((comment) => {
    comments.push({
      id: comment.id,
      message: comment.message,
      author: comment.owner.firstName + " " + comment.owner.lastName,
      authorPicture: comment.owner.picture,
    });
  });

  return comments;
};
