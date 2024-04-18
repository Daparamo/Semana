import axios, { AxiosError } from "axios";
import type { Comment, CommentsApi } from "../types";
import { getCommentsFm } from "../utils/comments.util";

interface GetCommentsProps {
  id: string;
}

export const getComments = async ({
  id,
}: GetCommentsProps): Promise<Comment[]> => {
  try {
    const { data } = await axios.get<CommentsApi>(
      `https://dummyapi.io/data/v1/post/${id}/comment`,
      {
        headers: {
          "app-id": "662024794864c6733288be0a",
        },
      }
    );
    return getCommentsFm(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Error getting comments");
  }
};
