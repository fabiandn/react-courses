const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: () => `Box(${x})`
});

const moneyToFloat = str => 
    Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(s => parseFloat(s));    

const percentToFloat = str => 
    Box(str)
    .map(s => s.replace(/\%/g, ''))
    .map(s => parseFloat(s))
    .map(f => f * 0.01);

const applyDiscount = (price, discount) => 
    moneyToFloat(price)
    .fold(cost => 
        percentToFloat(discount)
        .fold(savings => cost - cost * savings)
    )

const result = applyDiscount('$5,00', '20%')
console.log(String(result));
