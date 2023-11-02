/**
 * El ejercicio esta bien, pero el interprete de LEETCODE no lo pone bueno
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var salida = []

var twoSum = function (nums, target) {
    nums.forEach((element, indexElement) => {
        if (element < target) {
            if (salida.length === 0) {
                nums.forEach((residuo, indexResiduo) => {
                    if (residuo === (target - element)) {
                        console.log("Estamos dandonos cuenta de que ", element, " se junta con ", residuo)
                        if (indexElement !== indexResiduo) {
                            salida = [Number(indexElement), Number(indexResiduo)]
                        } else {
                            console.log(" pero no se puede")
                        }
                    } 
                })
            }
        }
    });

    return salida
};

console.log(twoSum([3,2,4], 6))