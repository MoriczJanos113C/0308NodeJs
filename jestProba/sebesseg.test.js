const sebesseg = require('./sebesseg');

/*


*/
test('az ut 2m az ido 2sec, akkor a sebesseg 1m/s', () => {
    expect(sebesseg(2, 2)).toBe(1);
    //ide lehet bőven
});



test('Az ut 2 meter, az ido 0sec, akkor hibat kell kapjunk', () => {
    expect(sebesseg(2,0)).toBe('err'); //then
})

test('Az ut 2 meter, az ido negativ, akkor hibat kell kapjunk', () => {
    expect(sebesseg(2,-3)).toBe('err');
    expect(sebesseg(10,-1)).toBe('err');
})

test('Az ut 0 meter, az ido pozitiv, akkor hibat kell kapjunk', () => {
    expect(sebesseg(0,1)).toBe(0);
})