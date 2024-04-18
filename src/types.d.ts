export interface CommentApi {
  id: string;
  message: string;
  owner: OwnerApi;
}

export interface Comment extends Omit<CommentApi, "owner"> {
  author: string;
  authorPicture: string;
}

export interface CommentsApi {
  data: CommentApi[];
}

export interface Post {
  id: string;
  title: string;
  tags: string[];
  author: string;
  authorPicture: string;
  img: string;
}

export interface OwnerApi {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface PostApi {
  id: string;
  text: string;
  tags: string[];
  owner: OwnerApi;
  publishDate: string;
  likes: number;
  image: string;
}

export interface PostsApi {
  data: PostApi[];
}

export interface OwnersApi {
  data: OwnerApi[];
}

export interface Owner {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface User {
  fullName: string;
  image: string | null;
}
