import Phaser from 'phaser';

import { Container, interfaces } from 'inversify';
import 'reflect-metadata';

import { IStory } from '../app';
import { State, IState } from '../app/state';
import { types } from '../constants';
import { RootScene } from '../scenes';

export const initContainer = (
  config: Phaser.Types.Core.GameConfig,
  stories: IStory[],
) => {
  const container = new Container();

  container.bind<Phaser.Types.Scenes.SettingsConfig>(types.ROOT_SCENE_CONFIG)
    .toConstantValue({
      active: true,
    });

  container.bind<IStory[]>(types.STORIES).toConstantValue(stories);
  container.bind<IState>(types.STATE).to(State).inSingletonScope();

  container.bind<RootScene>(types.ROOT_SCENE).to(RootScene);

  container.bind<Phaser.Game>(types.GAME)
    .toDynamicValue((context: interfaces.Context) => {
      const rootScene = context.container.get<RootScene>(types.ROOT_SCENE);
      const state = context.container.get<IState>(types.STATE);

      const otherScenes = state.stories.map((story) => story.scene).toJS();

      const gameConfig: Phaser.Types.Core.GameConfig = {
        ...config,
        scene: [
          rootScene,
          ...otherScenes,
        ],
      };

      return new Phaser.Game(gameConfig);
    }).inSingletonScope();

  return container;
};
