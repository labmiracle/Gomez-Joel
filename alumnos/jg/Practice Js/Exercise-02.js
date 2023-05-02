function sum(arr, n) {
    if (n === 0) return 0;
    else if (n > arr.length) return "n out of range";
    else if (n === 1) return arr[0];
    return arr[n-1] + sum(arr, n-1);
}

let summ = prompt ('Sum of numbers 10, 50, 1, 60', 2);

alert(`The sum of the first ${summ} numbers is${sum([10, 50, 1, 60], summ)}`);
//console.log(sum([10, 50, 1, 60], 2));