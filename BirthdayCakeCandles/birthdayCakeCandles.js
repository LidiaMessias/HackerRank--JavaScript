function birthdayCakeCandles(idade) {
    var maxHeigth = Math.max(...idade);

    let candles = 0;
    for (let i=0; i < idade.length; i++) {
        if (idade[i] === maxHeigth) {
            candles++;
        }
    }

    return candles;

}