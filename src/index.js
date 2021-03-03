module.exports = function reverse(n) {
    let newArr = Math.abs(n).toString().split("");
    let revNewArr = newArr.reverse();
    let newString = revNewArr.join("");

    return Number(newString);
};
