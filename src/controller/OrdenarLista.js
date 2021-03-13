class OrdenarLista {
  _sort(a, b) {
    return a - b;
  }
  async ordernar(list) {
    try {
      list.listas.salaN.sort(this._sort);
      list.listas.salaS.sort();
      return list;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = OrdenarLista;