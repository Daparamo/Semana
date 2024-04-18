import { Card } from "@tremor/react";

interface PostsEmptyProps {
  tag: string;
}

export const PostsEmpty = ({ tag }: PostsEmptyProps) => {
  return (
    <Card className="mx-auto max-w-md text-white flex text-xl p-4">
      Nothing post with {tag} tag 😐
    </Card>
  );
};
