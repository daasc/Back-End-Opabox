const { check } = require("express-validator");
//validando as dados com express-validator. Verificando se o campo tem valor, se é array, e se é um do tipo numérico ou string
class OrdenarListaValidation {
  order() {
    return [
      check("listas.salaN")
        .isArray()
        .withMessage("Campo tem que ser um valor tipo array")
        .notEmpty()
        .withMessage("Campo salaN obrigatório!")
        .custom((value) => {
          if (typeof value == "object") {
            value.forEach((element) => {
              if (typeof element !== "number") {
                throw new Error("Valores da salaN tem que ser do tipo number");
              }
            });
          }
          return [];
        }),
      check("listas.salaS")
        .isArray()
        .withMessage("Campo tem que ser um valor tipo array")
        .notEmpty()
        .withMessage("Campo salaS obrigatório!")
        .custom((value) => {
          if (typeof value == "object") {
            value.forEach((element) => {
              if (typeof element !== "string") {
                throw new Error("Valores da salaS tem que ser do tipo string");
              }
            });
          }
          return [];
        }),
    ];
  }
}

module.exports = OrdenarListaValidation;
