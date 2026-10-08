//Gaveta: A  Método: startsWith

//----- A. Para que serve? -----
//R: O método startsWith tem a função de verificar na string apresentada,  textos ou caracters específcos que compõe a string.

//----- B. Como é escrito? Mostre sua sintaxe básica. ------
//R: string.startsWith(termoDeBusca, posicaoInicial)
//   *termoDeBusca: o texto que voc~e que verificar se está no início
//   *posicaoInicial: a posição (índice) ode a busca deve começar. Começando em 0 (padrão).

//----- C. O que recebe como entrada? Precisa de argumentos? -----
// R: O método recebe como entrada dois tipos de argumentos: um obrigatório e outro opcional. O argumento obrigatório é o texto ou caracter que irá ser verifiado se há na string.
// O argumento opcional é um número inteiro onde a busca na string deve começar (o padrão é sempre começar por 0).

//----- D. O que retorna? Texto, número, booleano, array, objeto ou outro resultado? -----
//R: O método retorna um booleano (true, false). 

//----- E. Onde poderia ser útil em um programa real? ------
//R: Validações de segurança, filtros de busca e organização de arquivos.

//----- F. Cole seu pequeno código de exemplo e o resultado observado.

const texto = "Ser ou não ser, eis a questão.";
texto.startsWith(Ser)

//G. O que você modificou no teste? Qual foi o novo resultado?
