import { makeVar } from "@apollo/client";
import Cookies from "js-cookie";
import { getFriendsQuery_getFriends_friends } from "../__generated__/getFriendsQuery";

export type IUser = {
  email: string;
  name: string;
  tag: string;
};

const auth = Cookies.get("Authorization");
export const isLoggedInVar = makeVar(Boolean(auth));
export const currentUserVar = makeVar<IUser | null>(null);
export const friendListVar = makeVar<
  getFriendsQuery_getFriends_friends[] | null
>(null);
