function runCalculator() {
    const form = document.querySelector('.form');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const inputWeight = e.target.querySelector('.weight');
        const inputHeight = e.target.querySelector('.height');

        const height = inputHeight.value;
        const weight = inputWeight.value;

        const imc = getImc(weight, height)

        console.log('[height]', height)
        console.log('[weight]', weight)
        console.log('[IMC]', imc)
    });

    
    function getImc(weight, height) {
        const imc = weight / ( height * height);
        return imc
    }   


}

runCalculator()