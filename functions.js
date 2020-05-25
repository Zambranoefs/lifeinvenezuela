function help()
{
    alert("\nYou can help us by spreading the word!\n\nPlease share this website!")
}

/* The following function was extracted from: /* Part of the following calculator was created using the following as a guide: view-source:https://dolartoday.com/calculadora/*/
function formatCurrency(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num + '.' + cents);
}

function calculate()
{
    let amount = document.querySelector("#amount").value
    let rate = 193404.59;
    let exchange = amount * rate;
    let minimumWageVES = 400000

    document.querySelector("#exchange").innerHTML = formatCurrency(exchange);
    document.querySelector("#wages").innerHTML = formatCurrency(exchange / minimumWageVES);

}