import { makeVar } from "@apollo/client";

export type IUserChannles = {
  id: number;
  name: string;
};

export const curTabVar = makeVar<number>(-1);
export const userChannelsVar = makeVar<IUserChannles[]>([]);
