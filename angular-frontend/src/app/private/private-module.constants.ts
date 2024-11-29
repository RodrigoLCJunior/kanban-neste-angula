import {Complexity, Status, TodoItem} from "./private-module.interfaces";

export const complexityValues: Complexity[] = ['FACIL', 'MEDIO', 'DIFICIL'];
export const statusValues: Status[] = ['A FAZER', 'EM PROGRESSO', 'CONCLUIDO'];

export const todoExampleItems: TodoItem[] = [
  {
    title: 'Item Dificil',
    complexity: 'DIFICIL',
    subTitle: 'Subtitle',
    text: 'Text',
    status: 'A FAZER'
  },
  {
    title: 'Item Medio',
    complexity: 'MEDIO',
    subTitle: 'Subtitle',
    text: 'Text',
    status: 'EM PROGRESSO'
  },
  {
    title: 'Item Facil',
    complexity: 'FACIL',
    subTitle: 'Subtitle',
    text: 'Text',
    status: 'CONCLUIDO'
  },
  {
    title: 'Item MEDIO',
    complexity: 'MEDIO',
    subTitle: 'Subtitle',
    text: 'Text',
    status: 'CONCLUIDO'
  }
]
