var n2 = parseFloat(prompt("digite um número"));
        escreve(n2);

            function iniciarCalculo(simbolo){
                var n1 =  parseFloat(document.querySelector('#output').textContent);

                var n2 = parseFloat(prompt("digite outro número"));

                var msg = calcular(simbolo, n1, n2);

                escreve(msg);
            }

            function escreve(mensagem){
                var output = document.querySelector("#output");
                output.innerHTML = mensagem;
            }
            
            function calcular(simbolo, n1, n2){
                
                var numeroCalculado = null;

                switch(simbolo){
                    case '+':
                        numeroCalculado = n1 + n2;
                        break;
                    case '-':
                        numeroCalculado = n1 - n2;
                        break;
                    case '*':
                        numeroCalculado = n1 * n2;
                        break;
                    case '/':
                        numeroCalculado = n1 / n2;
                }
                
                return numeroCalculado;
            }
