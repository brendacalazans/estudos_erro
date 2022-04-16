function validateArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Erro - Parâmetros não válidos.");
        
        if(typeof arr != 'object') throw new TypeError("Erro - Array precisa ser do tipo object."); //typeof retorna uma string indicando o tipo de um operando.
            
        if(typeof num != 'number') throw new  TypeError("Erro - Número precisa ser do tipo number.");
                
        if(arr.length != num) throw new RangeError("Erro - Tamanho inválido.");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){ //instanceof testa se um objeto tem, em seu prototype, a função construtora.
            console.log("Este erro é um ReferenceError.");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este erro é um TypeError.");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este erro é um RangeError.");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validateArray());