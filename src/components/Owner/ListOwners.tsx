import { Card } from "@tremor/react";
import { Owner } from "../../types";

interface ListOwnerProps {
  owners: Owner[];
}

export const ListOwners = ({ owners }: ListOwnerProps) => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <h1 className="text-2xl capitalize font-semibold">owners 🧑‍🤝‍🧑</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 flex-wrap gap-4">
        {owners.map((owner) => (
          <Card
            key={owner.id}
            className="flex max-w-xs w-full items-center gap-4 "
          >
            <img className="size-16 rounded-full" src={owner.picture} />
            <p>
              {owner.firstName} {owner.lastName}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
