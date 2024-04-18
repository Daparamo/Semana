import { Owner, OwnersApi } from "../types";

export const getOwnersFm = (data: OwnersApi): Owner[] => {
  const owners: Owner[] = [];
  data.data.forEach((data) => {
    owners.push({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      picture: data.picture,
    });
  });

  return owners;
};
