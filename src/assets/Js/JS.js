function runCalculator() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputWeight = e.target.querySelector('.weight');
        const inputHeight = e.target.querySelector('.height');

        const height = inputHeight.value;
        const weight = inputWeight.value;

        const bmi = getBmi(weight, height)
        const msg = getMsgResult(bmi)
        insertResult(bmi, msg)

        console.log('[height]', height)
        console.log('[weight]', weight)
        console.log('[BMI]', bmi)
        console.log('[MSG]', msg)
    });


    function getBmi(weight, height) {
        return (weight / (height ** 2)).toFixed(2);
    }

    function getMsgResult(bmi) {
        const levels = [
            {
                msg: 'under weight',
                link: 'https://en.wikipedia.org/wiki/Underweight'
            },
            {
                msg: 'normal weight',
                link: 'https://www.hsph.harvard.edu/nutritionsource/healthy-weight/#:~:text=Maintaining%20a%20healthy%20weight%20is,risk%20of%20many%20different%20cancers.'
            },
            {
                msg: 'overweight',
                link: 'https://en.wikipedia.org/wiki/Overweight'
            },
            {
                msg: 'moderate obesity',
                link: 'https://pubmed.ncbi.nlm.nih.gov/15687394/'
            },
            {
                msg: 'severely obesity',
                link: 'https://www.obesityaction.org/get-educated/understanding-your-weight-and-health/what-is-obesity/#:~:text=and%20treat%20obesity.-,Severe%20Obesity,healthcare%20provider%20for%20treatment%20options.'
            },
            {
                msg: 'Morbidly obesity',
                link: 'https://www.medicalnewstoday.com/articles/320460'
            },
        ]

        if (bmi >= 39.9) {
            return levels[5]
        };
        if (bmi >= 34.9) {
            return levels[4]
        };
        if (bmi >= 29.9) {
            return levels[3]
        };
        if (bmi >= 24.9) {
            return levels[2]
        };
        if (bmi >= 18.5) {
            return levels[1]
        };
        if (bmi < 18.5) {
            return levels[0]
        };
    }

    function insertResult(bmi, msg) {
        const html = document.querySelector('.result')
        html.innerHTML = `
        <p>Your BMI is ${bmi}</p>
        <p>This is classified like ${msg.msg}</p>
        <a target=”_blank” href="${msg.link}">More about ${msg.msg}</a>
        `
    }

}

runCalculator()