export enum Action {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W',
}

export type Surroundings = {
  gridWidth: number;
  gridHeight: number;
  x: number;
  y: number;
}

export type RobotCoordinates = {
  x: number;
  y: number;
}