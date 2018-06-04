transfer = (i, a, b) =>{
    return parseInt(i, a).toString(b);
};

process.stdout.write(transfer(process.argv[2], process.argv[3], process.argv[4]))

