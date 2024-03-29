import { IFriendModel, IPlayerModel } from 'store';

export type TEventFormSubmit = (event: React.FormEvent<HTMLFormElement>) => void;
export type TChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;

export interface IPlayerFormProps {
  eventId: string;
}

export type TInputProps = {
  onChange: TChangeInput;
  value: string;
  error: boolean;
  label: string;
};

export type TPlayerForm = (
  props: IPlayerFormProps,
) => {
  isLoading: boolean;
  isDisabled: boolean;
  isFriendDisabled: boolean;
  isDeletePlayerPending: boolean;
  isPlayerLoading: boolean;
  playerStatus: boolean;
  friendStatus: boolean;
  nameProps: TInputProps;
  friendProps: TInputProps;
  handleSubmit: TEventFormSubmit;
  deleteFriend: (friendName: string) => void;
  addFriend: () => void;
  friends?: IFriendModel[];
  isShowForm: boolean;
  setIsShowForm: (state: boolean) => void;
  player: IPlayerModel | null;
  deletePlayer: () => void;
  changePlayerStatus: (status: boolean) => void;
  changeFriendStatus: (status: boolean) => void;
};
