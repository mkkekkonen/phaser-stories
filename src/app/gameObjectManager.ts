import Phaser from 'phaser';
import { State } from './state';

export abstract class GameObjectManager {
  abstract create(physics: Phaser.Physics.Arcade.ArcadePhysics, state: State): void;

  abstract update(): void;
}
