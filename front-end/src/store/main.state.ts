import { makeVar } from "@apollo/client";
import { getJoinChannelsQuery_getJoinChannels_channels_master } from "../__generated__/getJoinChannelsQuery";

export type IUserChannles = {
  id: number;
  name: string;
  master: getJoinChannelsQuery_getJoinChannels_channels_master;
};

export const curTabVar = makeVar<number>(-1);
export const userChannelsVar = makeVar<IUserChannles[]>([]);
