$(document).ready(function(){
    $("#convertTo").attr('disabled', 'disabled');
    let exchangeAPI = 'http://openexchangerates.org/api/latest.json?app_id=e5d9d6bff1b14da7aab69b531342eedc';
    $.getJSON(exchangeAPI, function (data){
        const currencies = Object.keys(data.rates);
        let currencyHTML = '<select>';
        currencies.forEach (function (currency) {
            currencyHTML += '<option value = ' +currency+ '>' +currency + '</option>';
        });
        document.getElementById('cdropFrom').innerHTML = currencyHTML;
        document.getElementById('cdropTo').innerHTML = currencyHTML;
        $('#convertFrom, #cdropFrom, #cdropTo').on ('input', function (event) {
            event.preventDefault();
            let currencyTo = $('#cdropTo option:selected').val();
            let currencyFrom = $('#cdropFrom option:selected').val();
            let currencyVal = Number.parseInt($('#convertFrom').val());
            let converted = currencyVal * (data.rates[currencyTo]) / (data.rates[currencyFrom]);
            document.getElementById('convertTo').value = converted;
        });
    });
});// end ready