{
    function fibonacci(n){
        if (n < 0){
            return [];
        }else if(n == 1){
            return[];
        }else if(n == 2){
            return[0, 1]
        }

        let fibosequence = [0, 1];
        for(let i = 2; i < n; i++) {
            fibosequence.push(fibosequence[i - 1] + fibosequence[i - 2]);
        }
        return fibosequence;    
    }
    console.log(fibonacci(10))
}