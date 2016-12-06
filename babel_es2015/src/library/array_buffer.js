export default function arrayBuffer() {
  console.group('ArrayBuffer/ArrayBufferView');
  {
    const buffer = new ArrayBuffer(8); // 8 bytes
    const view = new Uint8Array(buffer);
    view[0] = 0xFF;
    view[1] = 0x0F;
    view[2] = 0x0A;
    console.log(view);
  }
  console.groupEnd();
}
