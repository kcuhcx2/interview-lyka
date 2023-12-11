import {Robot} from "../src/Robot";

describe('Robot tests suite', () => {
  describe('Robot movement', () => {
    [{
      actions: 'N',
      expected: { x: 0, y: 1 }
    }, {
      actions: 'S',
      expected: { x: 0, y: 0 }
    }, {
      actions: 'E',
      expected: { x: 1, y: 0 }
    }, {
      actions: 'W',
      expected: { x: 0, y: 0 }
    }, {
      actions: 'N E N E N E N E',
      expected: { x: 4, y: 4 }
    }, {
      actions: 'N E N E N E N E N S W',
      expected: { x: 3, y: 4 }
    }, {
      actions: 'N E N E N E N E N E',
      expected: { x: 5, y: 5 }
    }, {
      actions: 'N E N E N E N E N E N N N N N N N E E E E E E',
      expected: { x: 9, y: 9 }
    }].forEach(({actions, expected}) => {
      it(`should move correctly for ${actions}`, () => {
        const robot = new Robot();
        robot.exec(actions);
        expect(robot.getCoordinates()).toStrictEqual(expected);
      });
    });
  });

  describe('tests grid boundaries', () => {
    it('should be able to handle a larger grid', () => {
      const robot = new Robot();
      robot.initialiseSurroundings({gridWidth: 20, gridHeight: 20, x: 0, y: 0 });
      robot.exec('N E N E N E N E N E N N N N N N N E E E E E E');
      expect(robot.getCoordinates()).toStrictEqual({ x: 11, y: 12 });
    });

    it('should be able to handle a smaller grid', () => {
      const robot = new Robot();
      robot.initialiseSurroundings({gridWidth: 5, gridHeight: 5, x: 0, y: 0 });
      robot.exec('N E N E N E N E N E N N N N N N N E E E E E E');
      expect(robot.getCoordinates()).toStrictEqual({ x: 4, y: 4 });
    });
  });
});
