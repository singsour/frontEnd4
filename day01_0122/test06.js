const path = require('path');
const userPath = ['foo', 'bar', 'baz/asdf', 'quux'];
//  /\ 원표시 / 

console.log(path.join(`${userPath}`));

const userPath2 = userPath.split( path.sep );
// \/ 원 / 통합 시켜 주는 기능

console.log(`${userPath2}`);
// foo/bar/baz/asdf/quux