// DESCRIZIONE:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// quindi qua o rifacciamo da capo o finiamo il layout come da screeshot (che vi metto sotto).
// BONUS: (ma solo se il resto è fatto)
//  Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.


$(document).ready(function(){

var source = $("#entry-template").html();
var template = Handlebars.compile(source);

// attiva il monitoraggio su filtro album (select)-> che è il suo contenuto con le diverse opzioni di scelta
$(".filtro-album select").on({

// per qualunque input sia tastiera o click al cambio della selezione
  input:function() {

    var optionChoosed = $(this).val();
      // console.log(optionChoosed);
      // inizio chiamata ajax
      $.ajax({

        url:"https://flynn.boolean.careers/exercises/api/array/music",
                        method: "GET",
                        data: {
                              language: "en-US"
                          },
                        success:function (data) {
      // inserisci tutti i dati in una var
                          var albumList = data.response;

      // cicla i risultati ottenuti e restituiscimeli per ogni oggetto solo per le categorie richieste
                          for (var i = 0; i < albumList.length; i++) {

                            var singleobj = albumList[i];
                            optionChoosed = singleobj.author
                            var obj = {
                              genre:singleobj.genre,
                              poster:singleobj.poster,
                              author:singleobj.author,
                              year:singleobj.year
                            };

                            var html = template(singleobj);
                        $(".cds-container").append(html);

                          }

                        },
                        error: function(richiesta, stato, errori){
                        console.log('La richiesta ha prodotto un errore: ', richiesta, stato, errori);
                        }


      });

  }



})







})
