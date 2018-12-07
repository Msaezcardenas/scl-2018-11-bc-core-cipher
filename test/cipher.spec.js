describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar " " para " " con offest 3', () => {
      assert.equal(cipher.encode(" ", 3), " ");
    });

    it('debería retornar "DEF" para "ABC" con offset 3', () => {
      assert.equal(cipher.encode ("ABC",3), "DEF");
    });

    it('debería retornar "Z" para "C" con offest -3', () => {
      assert.equal(cipher.encode("C", -3), "Z");
    });

    it('debería retornar "BPQLV MOLYXKAL" para "estoy probando" con offest -3', () => {
      assert.equal(cipher.encode("ESTOY PROBANDO", -3), "BPQLV MOLYXKAL");
    });

    it('debería retornar "LZAVF WYVIHUKV" para "ESTOY PROBANDO" con offest 33', () => {
      assert.equal(cipher.encode("ESTOY PROBANDO", 33), "LZAVF WYVIHUKV");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABC" para "DEF" con offest 3', () => {
      assert.equal(cipher.decode("DEF", 3), "ABC");
    });

    it('debería retornar " " para " " con offset 3', () => {
      assert.equal(cipher.decode (" ",3), " ");
    });

    it('debería retornar "Z" para "C" con offest 3', () => {
      assert.equal(cipher.decode("C", 3), "Z");
    });

    it('debería retornar "estoy probando" para "BPQLV MOLYXKAL" con offest -3', () => {
      assert.equal(cipher.decode("BPQLV MOLYXKAL", -3), "ESTOY PROBANDO");
    });

    it('debería retornar "estoy probando" para "LZAVF WYVIHUKV" con offest 33', () => {
      assert.equal(cipher.decode("LZAVF WYVIHUKV", 33), "ESTOY PROBANDO");
    });

  });

});
  