import { IPlayerModel } from 'store';

export interface IPlayersProps {
  players: IPlayerModel[];
}

export interface IPlayersRowProps {
  index: number;
  player: IPlayerModel;
}

export interface ICountInfoProps {
  playersAmount: number;
  minimum: number;
}
