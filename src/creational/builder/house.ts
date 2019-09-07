export class House {
  constructor(
    public foundation?: string,
    public floor?: string,
    public walls?: string,
    public roof?: string
  ) {}

  showHouse() {
    console.log(`${this.foundation}, ${this.floor}, ${this.walls}, ${this.roof}`);
  }
}
