let generate_possible_arr = [];
let generate_new_arr = [];
let variance_attr = $('#variance').data('attribute-term');
let calculate_loop = 0;
let output = "";

for (let loop in variance_attr) {
    generate_possible_arr[loop] = [];
    for (let inner_loop in variance_attr[loop]['terms']) {
        generate_possible_arr[loop].push(variance_attr[loop]['terms'][inner_loop])
    }
}

function getPermutation(array, prefix) {
    prefix = prefix || '';
    if (!array.length) {
        return prefix;
    }

    var result = array[0].reduce(function (result, value) {
        if (prefix != '') {
            return result.concat(getPermutation(array.slice(1), prefix + '_' + value));
        } else {
            return result.concat(getPermutation(array.slice(1), prefix + value));
        }
    }, []);
    return result;
}

output = getPermutation(generate_possible_arr)
for (let split in output) {
    generate_new_arr.push(output[split].split("_"));
}

console.log(...generate_possible_arr);
console.log(output);
console.log(generate_new_arr);