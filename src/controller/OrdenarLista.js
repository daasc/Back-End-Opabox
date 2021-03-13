//arquivo onde manipulamos os dados, onde fica a regra do negócio, e onde ocorrer a comunicação com o banco de dados 
class OrdenarLista {
  _sort(a, b) {
    return a - b;
  }
  async ordernar(list) {
    try {
      //ordenando a lista
      list.listas.salaN.sort(this._sort);
      list.listas.salaS.sort();
      return list;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = OrdenarLista;