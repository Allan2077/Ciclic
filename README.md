# README

<p align="center"> Ciclic</p>

<p align="center">
<a href="#sobre">Sobre *</a>
<a href="#tecnologia">Tecnologias *</a>
<a href="#autor">Autor</a>
</p>


# SOBRE 

<p>Foi fornecido as idéias do desafio onde consistia em fazer duas telas, A primeira tela deve ter um formulário com os campos: nome, mensalidade, tempo de contribuição e um botão simular.

Ao clicar em simular, deve ser feito um POST na api http://api.mathjs.org/v4/.

O body deverá ser um JSON com a seguinte estrutura: { "expr": "" }. Em expr vai a expressão matemática para calcular o juros compostos. Deverá ser usada a seguinte fórmula: [valor da mensalidade * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros]).

Exemplo:

Se os parametros forem:

Valor da mensalidade: R$ 20,00
Taxa de juros: 0,517% ao mês
Tempo de contribuição: 2 anos

O body da request deverá ser:

{ "expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)" }

A segunda tela deverá exibir um texto com as informaçoes dos campos de nome, mensalidade, tempo e o resultado da request.

Exemplo:

Olá [nome], juntando R$[mensalidade] todo mês, você terá R$[resultado da request] em [tempo].
</p>


# Desafio
![prototipo](https://user-images.githubusercontent.com/63480432/186793674-77dfc681-3eed-4387-869e-2eb980d97d7e.png)

# Apresentação 
https://user-images.githubusercontent.com/63480432/186793151-90467259-af3a-4ab5-8840-4ee4a55e75cf.mp4


# Tecnologia



Html&Css e JavaScript

# Autor

Allan Cesar da Silva
