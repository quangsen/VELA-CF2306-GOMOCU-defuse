describe('Test case 1', function() {
    it('Nguoi choi 1 bam vao mot o', function(done) {
        var map = [];
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                map[i][j] = 0;
            }
        }
        //Nguoi choi click vao hang 3 cot 4
        map[2][3] = 1

        assert.equal(1, map[2][3]);
    });
});

describe('Test case 2', function() {
    it('O nao da tich thi khong the duoc tich them nua', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

describe('Test case 3', function() {
    it('Nguoi choi 1 tich thi phai den luot nguoi thu 2 ', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

describe('Test case 4', function() {
    it('Nguoi choi tich duoc 5 o hang ngang thi bao thang va ket thuc', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

describe('Test case 5', function() {
    it('Nguoi choi tich duoc 5 o hang cheo thi bao thang va ket thuc', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

describe('Test case 6', function() {
    it('Nguoi choi tich duoc 5 o hang doc thi bao thang va ket thuc', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

describe('Test case 7', function() {
    it('Bat dau game thi cac o chua duoc tich', function(done) {
        // assert.typeOf(foo, 'string');
    });
});

