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
    }
    console.groupEnd();
  }
  console.groupEnd();
}
