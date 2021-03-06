export abstract class Product {
  id: number;
  name: string;
  vendorCode: string;
  price: number;

  protected constructor(id: number, name: string, vendorCode: string, price: number) {
    this.id = id;
    this.name = name;
    this.vendorCode = vendorCode;
    this.price = price;
  }

  public getPriceString() {
    return `${this.price} руб`;
  }
  public getDescription(): string {
    return '';
  }
  getCategory(): string {
    if (this instanceof Motherboard) {
      return 'motherboards';
    } else if (this instanceof CPU) {
      return 'cpu';
    } else if (this instanceof VideoCard) {
      return 'video-cards'
    } else {
      return null;
    }
  }

  getJson(): Object {
    return {
      name: this.name,
      id: String(this.id),
      'vendor-code':this.vendorCode,
      'price': String(this.price),
      'category': this.getCategory()
    }
  }
}
export class Motherboard extends Product {
  chipset: string;
  formFactor: string;

  constructor(id: number, name: string, vendorCode: string, price: number, chipset: string, formFactor: string) {
    super(id, name, vendorCode, price);
    this.chipset = chipset;
    this.formFactor = formFactor;
  }

  public static init(id: string, name: string, vendorCode: string, price: string, chipset: string, formFactor: string): Motherboard {
    return new Motherboard(Number(id), name, vendorCode, Number(price), chipset, formFactor)
  }

  public getDescription(): string {
    return super.getDescription() + `Чипсет: ${this.chipset}, форм-фактор: ${this.formFactor}`;
  }
  getJson(): Object {
    return {
      name: this.name,
      id: String(this.id),
      'vendor-code':this.vendorCode,
      'price': String(this.price),
      'chipset': this.chipset,
      'form-factor': this.formFactor,
      'category': this.getCategory()
    }
  }
}
export class CPU extends Product {
  socket: string;
  coreNumber: number;
  frequency: number;

  constructor(id: number, name: string, vendorCode: string, price: number, socket: string, coreNumber: number, frequency: number) {
    super(id, name, vendorCode, price);
    this.socket = socket;
    this.coreNumber = coreNumber;
    this.frequency = frequency;
  }

  public static init(id: string, name: string, vendorCode: string, price: string, socket: string, coreNumber: string, frequency: string): CPU {
    return new CPU(Number(id), name, vendorCode, Number(price), socket, Number(coreNumber), Number(frequency))
  }

  public getDescription(): string {
    return super.getDescription() + `Сокет: ${this.socket}, количество ядер: ${this.coreNumber}, частота: ${this.frequency} МГц`;
  }

  getJson(): Object {
    return {
      name: this.name,
      id: String(this.id),
      'vendor-code':this.vendorCode,
      'price': String(this.price),
      'socket': this.socket,
      'core-number': String(this.coreNumber),
      'frequency': String(this.frequency),
      'category': this.getCategory()
    }
  }
}
export class VideoCard extends Product {
  videoMemory: number;

  constructor(id: number, name: string, vendorCode: string, price: number, videoMemory: number) {
    super(id, name, vendorCode, price);
    this.videoMemory = videoMemory;
  }

  public static init(id: string, name: string, vendorCode: string, price: string, videoMemory: string): VideoCard {
    return new VideoCard(Number(id), name, vendorCode, Number(price), Number(videoMemory))
  }
  getDescription(): string {
    return super.getDescription() + `Видеопамять: ${this.videoMemory} Гб`;
  }
  getJson(): Object {
    return {
      name: this.name,
      id: String(this.id),
      'vendor-code':this.vendorCode,
      'price': String(this.price),
      'video-memory': String(this.videoMemory),
      'category': this.getCategory()
    }
  }
}
