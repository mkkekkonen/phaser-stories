import Phaser from 'phaser';

import { Container, injectable, inject } from 'inversify';
import Immutable from 'immutable';

import * as constants from '../constants';
import { initContainer } from '../ioc';

export interface IStory {
  name: string
  scene: Phaser.Scene
}

const { types } = constants;

export const run = (config: Phaser.Types.Core.GameConfig, stories: IStory[]) => {
  const container = initContainer(config, stories);

  const game = container.get<Phaser.Game>(types.GAME);
};
