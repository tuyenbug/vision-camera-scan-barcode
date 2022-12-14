import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'vision-camera-scan-barcode' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const VisionCameraScanBarcode = NativeModules.VisionCameraScanBarcode  ? NativeModules.VisionCameraScanBarcode  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );
    
export function scanCodeFromLibrary(): Promise<number[]> {
  return VisionCameraScanBarcode.scanCodeFromLibrary();
}