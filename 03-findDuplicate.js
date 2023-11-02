/**
 * @param {number[]} nums
 * @return {number}
 */

var salida = 0

var findDuplicate = function (nums) {
    nums.forEach((numero, indexNumero) => {
        nums.forEach((isDuplicated, indexDuplicated) => {
            if (indexNumero !== indexDuplicated) {
                if (isDuplicated === numero) {
                    salida = numero
                }
            } 

        })
    })
    return salida
};

console.log(findDuplicate([1, 3, 4, 2, 4]))