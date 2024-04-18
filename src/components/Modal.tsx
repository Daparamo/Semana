import { useQuery } from "@tanstack/react-query";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { getComments } from "../api/comments";
import { Comment } from "../types";
import { ListComments } from "./Posts/ListComments";

interface ModalProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  postId: string;
}

export const Modal = ({ isOpen, setIsOpen, postId }: ModalProps) => {
  const { data, isLoading } = useQuery<Comment[]>({
    refetchOnWindowFocus: false,
    queryKey: [postId],
    queryFn: () => {
      return getComments({
        id: postId,
      });
    },
  });

  return (
    <div className="flex justify-center">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-sm">
          <ListComments comments={data} isLoading={isLoading} />
          <Button
            className="mx-auto flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
};
