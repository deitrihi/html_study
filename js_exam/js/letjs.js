function letTest() { 
    var a1 = 1;
    a6 = a1;
    let a7 = a6;
    for(let a2 = 0; a2 < 1; a2 = a2 + 1 ) {
        var a3 = 'VAR_TEST';
        let a4 = 'LET_TEST';
        const a5 = 'CONST_TEST';
        console.log(a3 + ' : ' + a2);

        try { a5 = 'CONST_TEST2'; } catch (e)  { console.log(e); }
    }

    try { console.log('func_a1 : ' + a1); } catch(e) { console.log(e); }
    try { console.log('func_a2 : ' + a2); } catch(e) { console.log(e); }
    try { console.log('func_a3 : ' + a3); } catch(e) { console.log(e); }
    try { console.log('func_a4 : ' + a4); } catch(e) { console.log(e); }
    try { console.log('func_a5 : ' + a5); } catch(e) { console.log(e); }
    try { console.log('func_a6 : ' + a6); } catch(e) { console.log(e); }
    try { console.log('func_a7 : ' + a7); } catch(e) { console.log(e); }
}

letTest();

try { console.log('a1 : ' + a1); } catch(e) { console.log(e); }
try { console.log('a6 : ' + a6); } catch(e) { console.log(e); }
try { console.log('a7 : ' + a7); } catch(e) { console.log(e); }