import Phaser from 'phaser';

import { run } from './index';

run({
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  parent: 'phaser-example',
}, []);
