// Escopo => local onde ficam variáveis, constantes e funções
// Existem dois tipos de escopo: global e local
// O escopo global é acessível em todo o código
// O escopo local é acessível apenas dentro de uma função ou bloco

// Podemos atribuir uma função a uma variável
const minhaFuncao = function() {
  console.log("Olá, mundo!");
};

// Podemos chamar a função através da variável
minhaFuncao();

// Funções seta: 
const cubo = (x) => {   // a função seta é uma forma mais concisa de escrever funções anônimas
  return x ** 3;       // Tambem não sao içadas 
};

// Funções puras: 
// Uma função pura é aquela que não causa efeitos colaterais e sempre retorna o mesmo resultado para os mesmos parâmetros.
// Funções não puras não podem ler nada que não é passado como parâmetro e não podem modificar nada fora de seu escopo.
// Em aplicações reais, é importante escrever funções puras sempre que possível, pois isso facilita o teste e a manutenção do código.
// Principalmente em aplicações web, onde há várias coisas acontecendo ao mesmo tempo, ter funções puras pode ajudar a evitar bugs e comportamentos inesperados.
let a = 0;
let b = 1;
function incrementa_pura(a, b)
{
  a = a + b;
  return a;
}

// Objetos: Propriedades


// Objetos: Métodos
// Um método é uma função que é propriedade de um objeto.
// Como os métodos devem ser acessados: 
nome_objeto.metodo();
// Referenciar o objeto dentro do próprioobjeto pode causar problemas, pois o nome pode mudar. Por isso, usamos 
// a palavra reservada this para referenciar o objeto atual, independentemente do nome que ele tenha.
let oMaria 
{
    tipo: "maçã";
    qtd: 2;
    comeu: function(){
        this.qtd--;
    }
}


// Vetores:
let vetor = [1, 2, 3, 4, 5];
vetor[0] === 1;
vetor[1] === 2;
// E assim por diante, os objetos são acessados da mesma forma que c++
//Caso precisemos, há várias funções pré-definidas para manipular vetores, como push, pop, shift, unshift, length
//  etc.








