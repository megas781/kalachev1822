export abstract class Product {
  id: number;
  name: string;
  vendorCode: string;
  price: number;
}
export class Motherboard extends Product {
  chipset: string;
  formFactor: string;
}
export class CPU extends Product {
  socket: string;
  coreNumber: number;
  frequency: number;
}
export class VideoCard extends Product {
  videoMemory: number;
}
