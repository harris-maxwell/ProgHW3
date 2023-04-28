const x = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("textbox1").value = x[0];
    document.getElementById("textbox2").value = x[1];
    document.getElementById("textbox3").value = x[2];

    document.getElementById("cubed").addEventListener("click", function() {
        let x = x.map(myCubed);

        document.getElementById("textbox1").value = x[0];
        document.getElementById("textbox2").value = x[1];
        document.getElementById("textbox3").value = x[2];
    });

    document.getElementById("fourth").addEventListener("click", doFourthFunction)

    function doFourthFunction() {
        let x = x.map(fourthFunction)

        document.getElementById("textbox1").value = x[0];
        document.getElementById("textbox2").value = x[1];
        document.getElementById("textbox3").value = x[2];
    }

    function fourthFunction(oneNum){
        return Math.pow(oneNum, 4);
    }

    function mySquare (oneNum)  {
        return Math.pow(oneNum, 2);
    }

    document.getElementById("square").addEventListener("click", function() {
        let x = x.map(mySquare);
        document.getElementById("textbox1").value = x[0];
        document.getElementById("textbox2").value = x[1];
        document.getElementById("textbox3").value = x[2];
    });

    let myCubed = function (oneNum) {
        return Math.pow(oneNum, 3);
    }

});















































































































// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("textbox1").value = origArray[0];
//     document.getElementById("textbox2").value = origArray[1];
//     document.getElementById("textbox3").value = origArray[2];

//     document.getElementById("button2").addEventListener("click", function() {
//         const cubeArray = origArray.map(x => x**3);
//         document.getElementById("textbox1").value = cubeArray[0];
//         document.getElementById("textbox2").value = cubeArray[1];
//         document.getElementById("textbox3").value = cubeArray[2];
//     });

//     document.getElementById("button3").addEventListener("click", fourthPowerValues);
// });

// // function squareValues() {
// //     const squareArray = origArray.map(x => x**2);
// //     document.getElementById("textbox1").value = squareArray[0];
// //     document.getElementById("textbox2").value = squareArray[1];
// //     document.getElementById("textbox3").value = squareArray[2];
// // }
// // function squareArray() {
// //   const squareArray = origArray.map(num => num * num);
// //   document.getElementById('textbox1').value = squareArray[0];
// //   document.getElementById('textbox2').value = squareArray[1];
// //   document.getElementById('textbox3').value = squareArray[2];
// // }
// function squareValues() {
//     const val1 = document.getElementById("textbox1").value;
//     const val2 = document.getElementById("textbox2").value;
//     const val3 = document.getElementById("textbox3").value;
  
//     const squaredArray = [val1**2, val2**2, val3**2];
  
//     document.getElementById("textbox1").value = squaredArray[0];
//     document.getElementById("textbox2").value = squaredArray[1];
//     document.getElementById("textbox3").value = squaredArray[2];}



// function fourthPowerValues() {
//     const fourthArray = origArray.map(x => x**4);
//     document.getElementById("textbox1").value = fourthArray[0];
//     document.getElementById("textbox2").value = fourthArray[1];
//     document.getElementById("textbox3").value = fourthArray[2];
// }}
