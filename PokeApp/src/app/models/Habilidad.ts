import { Pokemon } from './Pokemon';

export class Habilidad {
	//Incompleto
  id: number;
  name: string;
  url: string;
  names:Array<any>;
  pokemon:Array<Pokemon>;

  public constructor(init?: Partial<Habilidad>) {
    Object.assign(this, init);
  }

}