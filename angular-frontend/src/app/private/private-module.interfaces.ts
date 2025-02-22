import {UserI} from "../public/public.interfaces";
import {FormControl} from "@angular/forms";

export type Status = 'A FAZER' | 'EM PROGRESSO' | 'CONCLUIDO';
export type Complexity = 'FACIL' | 'MEDIO' | 'DIFICIL';

export interface TodoItem {
  id?: number;
  createdBy?: UserI;
  updatedBy?: UserI;
  createdAt?: Date;
  updatetAt?: Date;

  status: Status;
  title: string;
  subTitle: string;
  text: string;
  complexity: Complexity;
}

export interface CreateTodoFormGroup {
  complexity: FormControl<Complexity | null>;
  text: FormControl<string | null>;
  subTitle: FormControl<string | null>;
  title: FormControl<string | null>;
  status: FormControl<Status | null>;
}
