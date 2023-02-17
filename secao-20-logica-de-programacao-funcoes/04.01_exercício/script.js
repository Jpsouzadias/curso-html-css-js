var n = parseFloat(prompt("digite um número"));
        escreve();

            function escreve(){
                var output = document.querySelector("#output");
                output.innerHTML = n;
            }

            function somar(){
                var somar = parseFloat(prompt("digite um número"));
                //n = n + somar
                n += somar;
                escreve();
            }

            function subtrair(){
                var subtrair = parseFloat(prompt("digite um número"));
                //n = n - subtrair
                n -= subtrair;
                escreve();
            }

            function multiplicar(){
                var multiplicar = parseFloat(prompt("digite um número"));
                //n = n * multiplicar       
                n *= multiplicar;
                escreve();
            }
            
            function dividir(){
                var dividir = parseFloat(prompt("digite um número"));
                //n = n / dividir
                n /= dividir;
                escreve();
            }

            function limpar(){
                n = 0
                escreve();
            }