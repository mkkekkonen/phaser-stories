import Phaser from 'phaser';

import { inject, injectable, decorate } from 'inversify';

import * as constants from '../constants';

const logo = require('../assets/logo.png');

const { types } = constants;

decorate(injectable(), Phaser.Scene);

@injectable()
export class RootScene extends Phaser.Scene {
  private logo?: Phaser.GameObjects.Image;

  constructor(
    @inject(types.ROOT_SCENE_CONFIG) config: Phaser.Types.Scenes.SettingsConfig,
  ) {
    super(config);
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    this.logo = this.add.image(300, 300, 'logo');
  }
}
