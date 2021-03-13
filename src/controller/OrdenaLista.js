class OrdenaLista {
  _sort(a, b) {
    return a - b;
  }
  async order(list) {
    try {
      list.listas.salaN.sort(this._sort);
      list.listas.salaS.sort();
      return list;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = OrdenaLista;