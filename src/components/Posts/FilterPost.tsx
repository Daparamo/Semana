import { Badge } from "@tremor/react";

const tags = [
  "all",
  "dog",
  "pet",
  "canine",
  "cat",
  "aventure",
  "ugly",
  "puppy",
];

interface FilterPostProps {
  tagSelected: string;
  setTag(value: string): void;
}

export const FilterPost = ({ tagSelected, setTag }: FilterPostProps) => {
  return (
    <div className="mx-auto max-w-md p-4 flex flex-wrap gap-4">
      {tags.map((tag) => (
        <Badge
          color={tagSelected === tag ? "blue" : "gray"}
          key={tag}
          size={"xl"}
          className="cursor-pointer"
          onClick={() => setTag(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};
