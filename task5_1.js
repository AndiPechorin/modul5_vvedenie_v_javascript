let x = []
function whatIsIt (x){
    switch (typeof(x)) {
        case "number":
            console.log('х - число');
            break;
        case "string":
            console.log('х - строка');
            break;
        case "boolean":
            console.log('х - булев');
            break;
        case (isNaN(x)):
            console.log('Тип х не определен');
            break;
        default:
            console.log('Тип х не определен');
            console.log(typeof(x));
    }
}
whatIsIt()