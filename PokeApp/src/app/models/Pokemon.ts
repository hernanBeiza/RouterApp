import { Estadistica } from './Estadistica';
import { Habilidad } from './Habilidad';
import { Movimiento } from './Movimiento';
import { Tipo } from './Tipo';

export class Pokemon {
	//Incompleto
  id: number;
  name: string;
  url: string;
  height:number;
  weight:number;
  base_experience:number;
  moves:Array<Movimiento>;
  stats:Array<Estadistica>;
  abilities:Array<Habilidad>;
  types:Array<Tipo>;
  
  sprites:any;

  public constructor(init?: Partial<Pokemon>) {
    Object.assign(this, init);
  }

}