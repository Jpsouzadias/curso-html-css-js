var n2 = parseFloat(prompt("digite um número"));
        escreve(n2);

            function iniciarCalculo(simbolo){
                var n1 =  parseFloat(document.querySelector('#output').textContent);

                var n2 = parseFloat(prompt("digite outro número"));

                try{
                    var msg = calcular(simbolo, n1, n2);
                } catch(e){
                    alert(e);
                    return;
                }
                escreve(msg);
            }

            function escreve(mensagem){
                var output = document.querySelector("#output");
                output.innerHTML = mensagem;
            }
            
            function calcular(simbolo, n1, n2){

                if(simbolo !== '+' && simbolo !== '-' && simbolo !== '*' && simbolo !== '/'){
                    throw new Error('digite um símbolo válido');
                }

                if( isNaN(n1) || isNaN(n2)){
                    throw new Error('chama passando somente números');
                }
                
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