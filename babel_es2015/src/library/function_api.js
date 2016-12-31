/* eslint no-unused-vars: 0 */
/* eslint spaced-comment: 0 */
/* eslint brace-style: 0 */
/* eslint block-spacing: 0 */

export default function functionApi() {
  console.group('Function API');
  {
    console.group('ES-next: Stage-3: Function.prototype.toString revision');
    {
      console.log(`
        function func1(param1) {
          /*hello*/
        }
        function func2(param1)
        {
          /*hello*/
        }
        function func3(param1) { /*hello*/ }
        function func4(param1) {/* hello */}
      `);

      function func1(param1) {
        /*hello*/
      }
      function func2(param1)
      {
        /*hello*/
      }
      function func3(param1) { /*hello*/ }
      function func4(param1) {/* hello */}

      console.log('func1.toString() =>', func1.toString());
      console.log('func2.toString() =>', func2.toString());
      console.log('func3.toString() =>', func3.toString());
      console.log('func4.toString() =>', func4.toString());
    }
    console.groupEnd();
  }
  console.groupEnd();
}
