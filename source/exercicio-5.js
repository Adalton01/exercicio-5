export function calcularMedia(notas) {
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  return soma / notas.length;
}

export function classificarFilme(media) {
  if (media >= 4) {
    return "Filme recomendado";
  } else if (media >= 3) {
    return "Filme razoável";
  } else {
    return "Filme ruim";
  }
}

export function avaliarFilme(filme) {
  const media = calcularMedia(filme.avaliacoes);

  return {
    nome: filme.nome,
    quantidadeVotos: filme.avaliacoes.length,
    media: media,
    classificacao: classificarFilme(media),
  };
}
