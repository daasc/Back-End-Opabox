//arquivo onde manipulamos os dados, onde fica a regra do negócio, e onde ocorrer a comunicação com o banco de dados 
class Interlace {
  _converterStringOfArray(valor) {
    //verificando se o dados estão vindo como string ou object caso seja string vou transforma-la 
    //em um array e todos do seus valores serão do tipo numéricos
    if(typeof valor === "string"){
      return valor
        .replace(/[\[\].'@><|://\\]/g, "")
        .split(",")
        .map(Number);
    } 
    //retorna o array com valores do tipo numéricos
    return valor.map(Number);
  }
  async intervalo(paramentroA, paramentroB) {
    const intervaloA = this._converterStringOfArray(paramentroA);
    const intervaloB = this._converterStringOfArray(paramentroB);
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
