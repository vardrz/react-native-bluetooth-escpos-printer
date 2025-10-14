export interface PrintOptions {
  width?: number;
  left?: number;
  autoCut?: boolean;
  center?: boolean;
  paperSize?: 58 | 80;
}

export interface BluetoothDevice {
  name: string;
  address: string;
  connected?: boolean;
}

export interface BluetoothManagerType {
  isBluetoothEnabled(): Promise<boolean>;
  enableBluetooth(): Promise<boolean>;
  disableBluetooth(): Promise<boolean>;
  scanDevices(): Promise<{ paired: BluetoothDevice[]; found: BluetoothDevice[] }>;
  connect(address: string): Promise<void>;
  disconnect(): Promise<void>;
  getConnectedDevice(): Promise<BluetoothDevice | null>;
}

export interface BluetoothEscposPrinterType {
  printText(text: string, options?: any): Promise<void>;
  printPic(base64: string, options?: PrintOptions): Promise<void>;
  printQRCode(content: string, size: number, align?: number): Promise<void>;
  printBarCode(
    content: string,
    symbology: number,
    width: number,
    height: number,
    align: number,
    textPosition: number
  ): Promise<void>;
  cutPaper(): Promise<void>;
  ERROR_CORRECTION: { L: number; M: number; Q: number; H: number };
  BARCODETYPE: Record<string, number>;
  ROTATION: { OFF: number; ON: number };
  ALIGN: { LEFT: number; CENTER: number; RIGHT: number };
}

export interface BluetoothTscPrinterType {
  DIRECTION: Record<string, number>;
  DENSITY: Record<string, number>;
  BARCODETYPE: Record<string, string>;
  FONTTYPE: Record<string, string>;
  EEC: Record<string, string>;
  ROTATION: Record<string, number>;
  FONTMUL: Record<string, number>;
  BITMAP_MODE: Record<string, number>;
  PRINT_SPEED: Record<string, number>;
  TEAR: Record<string, string>;
  READABLE: Record<string, number>;
}

export const BluetoothManager: BluetoothManagerType;
export const BluetoothEscposPrinter: BluetoothEscposPrinterType;
export const BluetoothTscPrinter: BluetoothTscPrinterType;
