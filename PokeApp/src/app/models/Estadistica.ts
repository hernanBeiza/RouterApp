export class Estadistica {

  base_stat: number;
  effort: number;

  name: string;
  url: string;

  public constructor(init?: Partial<Estadistica>) {
    Object.assign(this, init);
  }

}