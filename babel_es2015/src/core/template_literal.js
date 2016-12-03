export default function templateLiteral() {
  console.group('Template literal');
  {
    console.group('ES-next: Stage-2: Template Literal Revision');
    {
      function tagFunc(tmplObj, substs) {
        return {
          Cooked: tmplObj,
          Raw: tmplObj.raw,
        };
      }
      console.log(tagFunc`\u{4B}`);

      // NOTICE: This code cannot be built at the moment of Dec. 4, 2016.
      // @see https://github.com/babel/babel/issues/4798
      /*
      function latex(strings) {
        return strings;
      }
      console.log(latex`
      \newcommand{\fun}{\textbf{Fun!}}  // works just fine
      \newcommand{\unicode}{\textbf{Unicode!}} // Illegal token!
      \newcommand{\xerxes}{\textbf{King!}} // Illegal token!
      Breve over the h goes \u{h}ere // Illegal token!
      `);
      */
    }
    console.groupEnd();
  }
  console.groupEnd();
}
