import axios, { AxiosError } from "axios";
import { Post, PostsApi } from "../types";
import { getPostsFm } from "../utils/posts.util";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get<PostsApi>(
      `https://dummyapi.io/data/v1/post?page=1&limit=10`,
      {
        headers: {
          "app-id": "662024794864c6733288be0a",
        },
      }
    );
    return getPostsFm(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Error getting posts");
  }
};
