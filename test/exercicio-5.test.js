import { expect } from "chai";
import { describe, it } from "mocha";

import {
  calcularMedia,
  classificarFilme,
  avaliarFilme,
} from "../source/exercicio-5.js";

describe("Exercício 5 - Avaliação de filmes", function () {
  it("deve calcular a média das notas", function () {
    expect(calcularMedia([5, 4, 4, 4, 5])).to.equal(4.4);
  });

  it("deve contar a quantidade de votos", function () {
    const filme = {
      nome: "Minha mãe é uma peça",
      avaliacoes: [5, 4, 4, 4, 5],
    };

    expect(avaliarFilme(filme).quantidadeVotos).to.equal(5);
  });

  it("deve recomendar filmes com média maior ou igual a 4", function () {
    expect(classificarFilme(4.4)).to.equal("Filme recomendado");
  });

  it("deve classificar filmes com média entre 3 e 4 como razoáveis", function () {
    expect(classificarFilme(3.2)).to.equal("Filme razoável");
  });

  it("deve classificar filmes com média abaixo de 3 como ruins", function () {
    expect(classificarFilme(2)).to.equal("Filme ruim");
  });

  it("deve avaliar os três filmes do enunciado", function () {
    const filmes = [
      {
        nome: "Minha mãe é uma peça",
        avaliacoes: [5, 4, 4, 4, 5],
      },
      {
        nome: "Saneamento Básico",
        avaliacoes: [3, 4, 2, 3, 4],
      },
      {
        nome: "Se eu fosse você",
        avaliacoes: [1, 2, 3],
      },
    ];

    const resultado1 = avaliarFilme(filmes[0]);
    const resultado2 = avaliarFilme(filmes[1]);
    const resultado3 = avaliarFilme(filmes[2]);

    expect(resultado1.quantidadeVotos).to.equal(5);
    expect(resultado1.media).to.equal(4.4);
    expect(resultado1.classificacao).to.equal("Filme recomendado");

    expect(resultado2.quantidadeVotos).to.equal(5);
    expect(resultado2.media).to.equal(3.2);
    expect(resultado2.classificacao).to.equal("Filme razoável");

    expect(resultado3.quantidadeVotos).to.equal(3);
    expect(resultado3.media).to.equal(2);
    expect(resultado3.classificacao).to.equal("Filme ruim");
  });
});
