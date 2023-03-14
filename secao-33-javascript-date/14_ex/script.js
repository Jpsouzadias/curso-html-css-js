(function () {
   var data = new Date();
    data.setDate(2);
    data.setMonth(2);

    

    function formatDate(data) {
        var dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();

        var mes = data.getMonth() + 1;
        mes = mes < 10 ? '0' + mes : mes;
    
        return dia + '/' + mes + '/' + data.getFullYear();
    }

   console.log(formatDate(data));
})()