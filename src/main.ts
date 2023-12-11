import {Robot} from "./Robot";

const robot = new Robot();
/**
 * You can initialise the robot with a grid size and starting position
 * E.g.
  robot.initialiseSurroundings({gridWidth: 5, gridHeight: 5, x: 0, y: 0 });
  */
robot.exec('N E N E N E N E')
robot.printGrid();

// robot.exec('N E N E N E N E N E N N N N N N N E E E E E E');
// robot.printGrid()