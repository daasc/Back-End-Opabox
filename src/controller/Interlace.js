class Interlace {
  _converterStringOfArray(valor) {
    if(typeof valor === "string"){
      return valor
        .replace(/[\[\].'@><|://\\]/g, "")
        .split(",")
        .map(Number);
    } 
    return valor.map(Number);
  }
  async breaks(paramsA, paramsB) {
    const intervaloA = this._converterStringOfArray(paramsA);
    const intervaloB = this._converterStringOfArray(paramsB);
    try {
      if (
        (intervaloB[0] >= intervaloA[0]) & (intervaloB[0] <= intervaloA[1]) ||
        (intervaloB[1] >= intervaloA[0]) & (intervaloB[1] <= intervaloA[1])
      ) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = Interlace;
