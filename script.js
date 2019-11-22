var fill_data = "";
$.ajax({
    type: "GET",
    url: "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/es_MX/champion.json",
    dataType: "json",
    success: function(data){
        $.each(data.data, function(key, value){
            fill_data += '<div class="col-lg-2 bg-info py-2 m-2 d-flex align-items-center flex-column personaje" onclick="datainfo(\'' + value.id + '\')">'+
                '<img src="http://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/'+ value.image.full +'" alt="">'+
                '<h2>' + value.name + '</h1>'+
                '<h5>' + value.title + '</h5>'+
            '</div>';
        });
        $("#fill").html(fill_data);
    },
    error: function(e){
        console.log(e.message);
    }
});

function datainfo(d){
    location.href="personaje.html?rc="+ d +"";
}