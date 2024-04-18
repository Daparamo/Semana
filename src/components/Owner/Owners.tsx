import { useQuery } from "@tanstack/react-query";
import { getOwners } from "../../api/owners";
import { Owner } from "../../types";
import { ListOwners } from "./ListOwners";

export const Owners = () => {
  const { data, isLoading } = useQuery<Owner[]>({
    refetchOnWindowFocus: false,
    queryKey: ["owners"],
    queryFn: getOwners,
  });

  return (
    <>
      {isLoading && <h1 className="text-white">Loading</h1>}
      <>{data && data.length > 0 && <ListOwners owners={data ?? []} />}</>
    </>
  );
};
