// //gọi hàm thông báo
// var fullName = 'linh';
// var age = '23';

// // chạy code
// alert(fullName);
// alert(age);
// //  6 hàm dc xây dựng sẵn  built-in
// // 1 alert
// // 2 console
// // 3 cònirm
// // 4 prompt
// // 5 set timeout
// // 6 set interval

// // chạy biến
// console.log(' tao la linh');
// // chạy hàm var đã cho sẵn
// var fullName = 'linh';
// console.log(fullName);
// // cònfirm có tác dụng tạo 1 thẻ khai báo xác nhậ khi vào wed 
// confirm('xac nhan du tuoi!');
// // prompt có tác dụng bắt người dùng phải khai báo 1 phần tử lucs vào wed
// prompt('xac nhan ten');
// // set Timeout có tác dụng tạo 1 function làm tăng hoặc giảm tốc độ hiển thị của 1 bién 
// setTimeout(function() {
// alert('thong bao')
// },1000)
// // setInterval => chạy 1 đoạn code sau 1 khoảng thời gian và lặp đo lặp lại
    

// // setInterval(function() {
// //    console.log('day la olg' +Math.random())
// //     },1000)


//    //   toán tử javascript
// // 1 toán tử số học - arithemtic
// // 2 toán tử gán - assignment
// // 3 toán tử so sánh - comparison
// // 4 toán tử logic - logical
// // // số học
// var a= 1 + 2;
// console.log(a)
// // // gán
// var fullName = 'linh tran';
// // so sanh
// var a = 1;
// var b = 2;
// if(a < b) {
//    alert('dung');
// }

// if (a> 0 && b > 0) {
// alert('a & b lon hon 0 ')
// }

// // // toán tử số học
// // 1 +   cộng
// // 2 -   trừ
// // 3 *   nhân 
// // 4 **  lũy thừa
// // 5 /   chia 
// // 6 %   chia lấy số dư
// // 7 ++  tăng 1 giá trị số 
// // 8 --  giảm 1 giá trị số 
//   var d = 4; 
//   var b = 5;
//   var c = d - b;
//   console.log(c);

//   var age = 20;
//   var nextAge = ++ age;
//  console.log(nextAge)


 function tinhtong(a, b){
   return a + b;
 }
const so1 = 5;
const so2 = 7;
const ketqua = tinhtong(so1, so2);
console.log(ketqua)

function nguyento(){
   
}
function increasingValues(start, end) {
  if (start > end) {
    return "Invalid input. Start value should be less than or equal to the end value.";
  }

  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

// Sử dụng hàm
var startValue = 1;
var endValue = 5;
var increasingArray = increasingValues(startValue, endValue);
document.write(increasingArray + "<br>");
function tinhdodai(start, end) {
  if (start > end) {
    return
  }
  let tinh = []
  for (let i = start; i <= end; i ++) {
    tinh.push(i);
  }
  return tinh
}
const tinhtoan = tinhdodai(1, 10)
document.write(tinhtoan + "<br>")
// tim gia tri lon nhat
function timgiatrilonnhat(arr) {
  if (arr.length === 0) {
    return
  }
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

let choso = [1, 2, 5, 3, 5, 26, 43, 14]
let giatrilonnhat = timgiatrilonnhat(choso)
document.write("gia tri lon nhat: " + giatrilonnhat + "<br>")
// test
function timsolonnhat(arr) {
  if (arr.length)
}