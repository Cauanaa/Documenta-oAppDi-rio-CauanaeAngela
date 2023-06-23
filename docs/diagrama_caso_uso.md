# Diagrama de Caso de Uso

![Diagrama de Caso de Uso](/img/diagramacasodeuso.png)

## Descrição de Caso de Uso

### Primeiro caso de uso

Manter lembrete

``Descrição:`` este caso de uso é iniciado pelo usuário quando requisita ao sistema adicionar um lembrete em determinada data e hora.

``Objetivo:`` possibilitar que o usuário agende, altere, exclua e consulte um lembrete.

``Ator envolvido:`` Usuário.

``Interação entre Ator e Sistema:``

|     Usuário     |       Sistema       |  
| :-----------: | :-----------------: | 
| Solicita a adição de um lembrete. | |
|  | Exibe uma interface de calendário. |
| Escolhe a data a ser agendada. |  |
|  | Exibe campos de título e detalhamento. |
| Preenche os campos. |  |
|  | Exibe os lembretes cadastrados no calendário. |
|  | Fecha a interface. |
|  | Notifica 24h antes que falta um dia para o evento. |
|  | No dia, pede se o usuário realizou a ação. |
| Se Sim. |  |
|  | Exclui o lembrete automaticamente. |
| Se Não. |  |
|  | Pede se deseja adiar para uma nova data. |

### Segundo caso de uso

Manter Status do Estoma

``Descrição:`` este caso de uso é iniciado pelo usuário quando requisita ao sistema adicionar uma atualização do status do estoma.

``Objetivo:`` possibilitar que o usuário descreva e monitore a situação do seu estoma, se o trocou no dia, opções de características da pele na região, como foi a digestão, alguma alteração na rotina, quantas horas de exercício praticou e o comentário do dia (sujeito a alterações).

``Ator envolvido:`` Usuário.

``Interação entre Ator e Sistema:``

|     Usuário     |       Sistema       |  
| :-----------: | :-----------------: | 
| Solicita a adição do status diário. | |
|  | Exibe uma interface com campos onde informará a situação do seu estoma, se realizou a troca do estoma, situação da pele na região, digestão, alterações e horas de prática de exercícios. |
| Preenche os campos selecionando os que melhor descrevem seu dia. |  |
|  | Armazena as informações do status. |
|  | Retorna o resultado da operação. |
|  | Fecha a interface. |

``Exceção:`` EX01 – caso o usuário já tenha cadastrado o status daquele dia, a mensagem “Status diário já cadastrado” é apresentada.Exceção: EX01 – caso o usuário já tenha cadastrado o status daquele dia, a mensagem “Status diário já cadastrado” é apresentada.