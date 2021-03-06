import { UserInfo } from "contexts/types";
import React from "react";

export interface Message {
  type: "text" | "image";
  message: string | React.ReactNode;
  read?: boolean;
  sending?: boolean;
  idLocal?: string;
}

export interface MessageBlock {
  message: Message[];
  isSender: boolean;
  createdAt: string;
}

export interface HistoryChat {
  _id: string;
  avatar: string;
  fullName: string;
  lastMessage: string;
  updatedAt: string;
}

export interface Chat {
  page: number;
  historyChat: HistoryChat[];
  current: string;
  typing: boolean;
  friend: UserInfo;
  focus: boolean;
  listMess: MessageBlock[];
}

export interface Profile {
  user: UserInfo;
}

export interface Searchs {
  isSearch: boolean;
  result: UserInfo[];
}

export interface State {
  chat: Chat;
  profile: Profile;
  search: Searchs;
}
