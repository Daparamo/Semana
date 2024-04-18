import { Post, PostsApi } from "../types";

export const getPostsFm = (data: PostsApi): Post[] => {
  const posts: Post[] = [];
  data.data.forEach((data) => {
    posts.push({
      id: data.id,
      title: data.text,
      tags: data.tags,
      author: data.owner.firstName + " " + data.owner.lastName,
      authorPicture: data.owner.picture,
      img: data.image,
    });
  });

  return posts;
};
