export default function arrayBuffer() {
  console.group('ArrayBuffer/ArrayBufferView');
  {
    const buffer = new ArrayBuffer(8); // 8 bytes
    const view = new Int32Array(buffer);
    console.log(view);
  }
  console.groupEnd();
}
