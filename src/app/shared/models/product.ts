export abstract class Product {
  id: number;
  name: string;
  vendorCode: string;
  price: number;
  public getDescription(): string {
    return `${this.vendorCode}, цена: ${this.price}`;
  }
}
export class Motherboard extends Product {
  chipset: string;
  formFactor: string;
  public getDescription(): string {
    return super.getDescription() + `, чипсет: ${this.chipset}, форм-фактор: ${this.formFactor}`;
  }
}
export class CPU extends Product {
  socket: string;
  coreNumber: number;
  frequency: number;
  public getDescription(): string {
    return super.getDescription() + `, сокет: ${this.socket}, количество ядер: ${this.coreNumber}, частота: ${this.frequency}`;
  }
}
export class VideoCard extends Product {
  videoMemory: number;
  getDescription(): string {
    return super.getDescription() + `, видеопамять: ${this.videoMemory}`;
  }
}
