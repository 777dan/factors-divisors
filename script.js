function divisors() {
    let n = prompt("Input a number");
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res = n / i;
            document.write(`${res} `);
        }
    }
}


function factors() {
    let n = prompt("Input a number");
    let k = 2;
    let i = 0;
    document.write(`40 = `)
    while (n > 1) {
        if (n % k == 0) {
            if (i !== 0) {
                document.write(" * " + k);
            } else {
                document.write(k);
            }
            n /= k;
        } else {
            k++;
        }
        i++;
    }
}