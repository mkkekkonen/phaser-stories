import Immutable from 'immutable';
import { injectable, inject } from 'inversify';

import * as constants from '../constants';
import { IStory } from '.';

const { types } = constants;

export interface IState {
  stories: Immutable.List<IStory>
}

@injectable()
export class State implements IState {
  private mStories: Immutable.List<IStory>;

  constructor(
    @inject(types.STORIES) private storyList: IStory[],
  ) {
    this.mStories = Immutable.fromJS(storyList);
  }

  get stories() {
    return this.mStories;
  }
}
