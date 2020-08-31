// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione
// una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop,
// rock, metal e jazz. In base a cosa scegliamo nella select
// vedremo i corrispondenti cd.



$(document).ready(function () {
    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (risposta) {
	               var response = risposta.response;
	               var source = $('#entry-template').html();
	               var template = Handlebars.compile(source);
	               for (var i = 0; i < response.length; i++){
		               var disco = template(response[i]);
		               $('.cds-container').append(disco);
	                }
	        },
            error: function () {
                alert("errore impossibile caricare");
            }
        });

        $(".scelta option").click(function(){
            var genere = $(this).val();
            if (genere == "All") {
                $(".cd").show();
            } else {
                $(".cd").hide();
                $(".cd." + genere).show();
            }
        });
});
