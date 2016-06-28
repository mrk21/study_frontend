console.group('String API')
console.group('new API')
{
  console.log("'abcd'.includes('bc') =>", 'abcd'.includes('bc'));
  console.log("'abc'.repeat(3) =>", 'abc'.repeat(3));
}
console.groupEnd();

console.group('unicode')
{
  console.log("'𠮷'.length =>", '𠮷'.length);
  console.log("'𠮷'.match(/./u)[0].length =>", '𠮷'.match(/./u)[0].length);
  console.log("'\\u{20BB7}'=='𠮷'' =>", '\u{20BB7}'=='𠮷');
  console.log("'𠮷'=='\\uD842\\uDFB7' =>", '𠮷'=='\uD842\uDFB7');
  console.log("'𠮷'.codePointAt(0) =>", '𠮷'.codePointAt(0));
  console.group('for(const c of "𠮷") console.log(c)');
  for(const c of "𠮷") console.log(c);
  console.groupEnd();
}
console.groupEnd();
console.groupEnd();
