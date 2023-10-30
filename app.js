const { cv, cvTranslateError } = require('@dalongrong/opencv-wasm');

let mat = cv.matFromArray(2, 3, cv.CV_8UC1, [1, 2, 3, 4, 5, 6]);
console.log('cols =', mat.cols, '; rows =', mat.rows);
console.log(mat.data8S);

cv.transpose(mat, mat);
console.log('cols =', mat.cols, '; rows =', mat.rows);
console.log(mat.data8S);

/*
cols = 3 ; rows = 2
Int8Array(6) [ 1, 2, 3, 4, 5, 6 ]
cols = 2 ; rows = 3
Int8Array(6) [ 1, 4, 2, 5, 3, 6 ]
*/