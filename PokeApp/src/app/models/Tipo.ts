import { Movimiento } from './Movimiento';

export class Tipo {
	//Incompleto
  id: number;
  name: string;
  url: string;
  moves:Array<Movimiento>;

  public constructor(init?: Partial<Tipo>) {
    Object.assign(this, init);
  }

}