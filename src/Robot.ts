import {Action, RobotCoordinates, Surroundings} from "./types";

export class Robot {
  private x: number;
  private y: number;
  private gridWidth: number;
  private gridHeight: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.gridHeight = 10;
    this.gridWidth = 10;
  }

  private move(action: Action): void {
    switch (action.toUpperCase()) {
      case Action.N:
        this.y++;
        break;
      case Action.S:
        this.y--;
        break;
      case Action.E:
        this.x++;
        break;
      case Action.W:
        this.x--;
        break;
    }
  }

  private isValidMove(action: Action): boolean {
    switch (action.toUpperCase()) {
      case Action.N:
        return this.y < this.gridHeight-1;
      case Action.S:
        return this.y > 0;
      case Action.E:
        return this.x < this.gridWidth-1;
      case Action.W:
        return this.x > 0;
      default:
        return false;
    }
  }

  private run(actions: Action[]): void {
    actions.forEach(action => {
      const validAction = this.isValidMove(action);
      if (validAction) {
        this.move(action)
      } else {
        // console.log('Invalid action: ', action);
        // console.log('--- SKIPPING ACTION ---')
      }
    });
  }

  exec(actions: string): void {
    const actionList = actions.split(' ') as Action[];
    this.run(actionList);
  }

  initialiseSurroundings(surroundings: Surroundings): void {
    this.gridHeight = surroundings.gridHeight;
    this.gridWidth = surroundings.gridWidth;
    this.x = surroundings.x;
    this.y = surroundings.y;
  }

  getCoordinates(): RobotCoordinates {
    return { x: this.x, y: this.y }
  }

  printGrid(): void {
    let grid = '';
    for (let i = this.gridHeight - 1; i >= 0; i--) {
      for (let j = 0; j < this.gridWidth; j++) {
        if (this.x === j && this.y === i) {
          grid += ' 🤖';
        } else {
          grid += ' - ';
        }
      }
      grid += '\n';
    }
    console.log(grid);
  }
}
