import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoItem } from '../todo.interface';

@Injectable()
export class SetupService implements OnApplicationBootstrap {
  constructor(private todoService: TodoService) {}

  onApplicationBootstrap(): any {
    const items: TodoItem[] = [
      {
        title: 'Item Diicil',
        complexity: 'DIFICIL',
        subTitle: 'Subtitle',
        text: 'Text',
        status: 'A FAZER',
      },
      {
        title: 'Item Mediio',
        complexity: 'MEDIO',
        subTitle: 'Subtitle',
        text: 'Text',
        status: 'EM PROGRESSO',
      },
      {
        title: 'Item Facil',
        complexity: 'FACIL',
        subTitle: 'Subtitle',
        text: 'Text',
        status: 'CONCLUIDO',
      },
      {
        title: 'Item Medio',
        complexity: 'MEDIO',
        subTitle: 'Subtitle',
        text: 'Text',
        status: 'CONCLUIDO',
      },
    ];
    this.todoService.saveAll(items);
  }
}
