export class Movimiento {
	//Incompleto
  id: number;
  name: string;
  url: string;
  accuracy:number;
  power:number;
  pp:number;

  public constructor(init?: Partial<Movimiento>) {
    Object.assign(this, init);
  }

}