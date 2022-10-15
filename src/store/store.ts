import {action, makeAutoObservable, observable} from 'mobx';

export interface ICharacter {
  name: string;
  image: any;
  imageActive: any;
}

export type pageType = 'intro' | 'select' | 'game' | 'game-end' | 'credits'

export default class Store {
  activePage: pageType = 'intro';
  activeCharacter: ICharacter | null = null;
  votes: number = 0;
  
  constructor() {
    makeAutoObservable(this)
  }

  setVotes(votes: number) {
    this.votes = votes;
  }
  
  setActiveCharacter(character: ICharacter) {
    this.activeCharacter = character;
  }
  
  setActivePage(page: pageType) {
    this.activePage = page;
  }
}
