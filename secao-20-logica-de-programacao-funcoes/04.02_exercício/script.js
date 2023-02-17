var n1 = parseFloat(prompt("digite um número"));
        escreve();

            function escreve(){
                var output = document.querySelector("#output");
                output.innerHTML = n1;
            }

            function calcular(simbolo){
                var n = parseFloat(prompt("digite um número"));
                switch(simbolo){
                    case '+':
                        n1 += n;
                        break;
                    case '-':
                        n1 -= n;
                        break;
                    case '*':
                        n1 *= n;
                        break;
                    case '/':
                        n1 /= n;
                }
                escreve();
            }