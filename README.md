# ⚖️ BMI calculator

This is a simple BMI calculator

If you have any question, suggestion or want to contact, mail me:

📧 igornoiasilva@gmail.com.

***

# 📌 Table of Contents

* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
* 🤝 [Contributing](#Contributing)
* 🧾 [License](#License)

***

# <a name="features"></a>💡 Features

* ⚖️ Calculate your BMI
* 🔍 Link explaining each result 
***

# <a name="Purpose"></a>🎯 Purpose

My purpose with this project is to train my JavaScript.

***

# <a name="Installation"></a>🛠 Installation

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/bmi-calculator.git

```

***

# <a name="Utilization"></a>📝 Utilization

There are two inputs in which you can enter your weight and height.

```html
<form class="form">
    <input type="number" step="any" name="" class="weight" id="" placeholder="Weight">
    <input type="number" step="any" name="" class="height" id="" placeholder="Height">
    <button>Submit</button>
</form>
```

After get the height and weight we will do the BMI calculation.

```javascript
function getBmi(weight, height) {
    return (weight / (height ** 2)).toFixed(2);
}
```

Then we will get the message according to the BMI value.

```javascript
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
```

Inserting message in HTML
```html
<section>
    <div class="result"></div>
</section>
```

```javascript
function insertResult(bmi, msg) {
    const html = document.querySelector('.result')
    html.innerHTML = `
    <p>Your BMI is ${bmi}</p>
    <p>This is classified like ${msg.msg}</p>
    <a target=”_blank” href="${msg.link}">More about ${msg.msg}</a>
    `
}
```

Listening the form and calling the functions

```javascript
const form = document.querySelector('.form');
 
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting weight and height
    const inputWeight = e.target.querySelector('.weight');
    const inputHeight = e.target.querySelector('.height');

    const height = inputHeight.value;
    const weight = inputWeight.value;

    // Getting the BMI
    const bmi = getBmi(weight, height)

    // Getting a message according to the BMI value
    const msg = getMsgResult(bmi)

    // Inserting message in HTML
    insertResult(bmi, msg)

    console.log('[height]', height)
    console.log('[weight]', weight)
    console.log('[BMI]', bmi)
    console.log('[MSG]', msg)
});
```

***

# <a name="Contributing"></a>🤝 Contributing

Feel free to contribute 🙂

***

# <a name="License"></a>🧾 License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/bmi-calculator/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 👋
