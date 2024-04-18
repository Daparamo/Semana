import { RiChat3Line } from "@remixicon/react";
import { Badge, Icon } from "@tremor/react";
import { useState } from "react";
import { Post } from "../../../types";
import { Modal } from "../../Modal";

interface PostFooterProps {
  post: Post;
}

export const PostFooter = ({ post }: PostFooterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <Icon
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between cursor-pointer"
          icon={RiChat3Line}
          tooltip="comments"
          size="md"
        />
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} postId={post.id} />
      )}
    </>
  );
};
