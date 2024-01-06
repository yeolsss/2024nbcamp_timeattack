export type PostType = {
  nickname?: string;
  id: string;
  password: string;
  passwordCheck?: string;
};

export type signInResponseType = {
  accessToken: string;
  avatar?: string;
  nickname: string;
  success: false;
  userId: string;
};
