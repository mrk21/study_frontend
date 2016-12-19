export default function arrayBuffer() {
  console.group('ArrayBuffer/TypedArray/DataView');
  {
    console.group('ArrayBuffer');
    {
      console.group('base');
      {
        const buffer = new ArrayBuffer(4); // 4 bytes
        console.log('buffer bytes =>', buffer.byteLength);
      }
      console.groupEnd();

      console.group('buffer sharing');
      {
        const buffer = new ArrayBuffer(2); // 2 bytes
        {
          const view = new Uint8Array(buffer);
          view[0] = 0xFF;
          view[1] = 0xFF;
          console.log('Uint8: 0xFF 0xFF =>', view);
        }
        {
          const view = new Int16Array(buffer);
          console.log('Int16: 0xFF 0xFF =>', view); // -1
        }
      }
      console.groupEnd();
    }
    console.groupEnd();

    console.group('TypedArray');
    {
      console.group('base');
      {
        console.log(`
          const buffer = new ArrayBuffer(8); // 8 bytes
          const view = new Uint8Array(buffer);
          view[0] = 0xFF;
          view[1] = 0x0F;
          view[2] = 0x0A;
        `);
        const buffer = new ArrayBuffer(8); // 8 bytes
        const view = new Uint8Array(buffer);
        view[0] = 0xFF;
        view[1] = 0x0F;
        view[2] = 0x0A;
        console.log('view =>', view);
      }
      console.groupEnd();

      console.group('range error');
      {
        try {
          console.log(`
            const buffer = new ArrayBuffer(7); // 7 bytes
            const view = new Uint16Array(buffer);
          `);
          const buffer = new ArrayBuffer(7); // 7 bytes
          const view = new Uint16Array(buffer);
        } catch (e) {
          console.error(e);
        }
      }
      console.groupEnd();
    }
    console.groupEnd();

    console.group('DataView');
    {
      console.group('base');
      {
        const buffer = new ArrayBuffer(2); // 2 bytes
        const view = new DataView(buffer);
        console.log('set Uint8: 0xFF 0xFF');
        view.setUint8(0, 0xFF);
        view.setUint8(1, 0xFF);
        console.log('get Int16 =>', view.getInt16(0));
      }
      console.groupEnd();

      console.group('endianness');
      {
        const buffer = new ArrayBuffer(2); // 2 bytes
        const view = new DataView(buffer);
        console.log('set Uint8: 0xFF 0x00');
        view.setUint8(0, 0xFF);
        view.setUint8(1, 0x00);
        console.log('get Int16: litle endianness =>', view.getInt16(0, false));
        console.log('get Int16: big endianness =>', view.getInt16(0, true));
      }
      console.groupEnd();
    }
    console.groupEnd();
  }
  console.groupEnd();
}
