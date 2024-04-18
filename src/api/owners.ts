import axios, { AxiosError } from "axios";
import type { Owner, OwnersApi } from "../types";
import { getOwnersFm } from "../utils/owners.util";

export const getOwners = async (): Promise<Owner[]> => {
  try {
    const { data } = await axios.get<OwnersApi>(
      `https://dummyapi.io/data/v1/user`,
      {
        headers: {
          "app-id": "662024794864c6733288be0a",
        },
      }
    );
    return getOwnersFm(data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Error getting owners");
  }
};
