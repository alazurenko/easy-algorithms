function copyArray(values) {
    var array = [];

    values.forEach(item => {
      array.push(item);
    })

    return array;
}

module.exports = copyArray;
