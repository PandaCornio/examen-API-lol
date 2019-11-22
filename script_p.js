var fill_data = "";
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("rc");

$.ajax({
    type: "GET",
    url: "http://ddragon.leagueoflegends.com/cdn/9.23.1/data/es_MX/champion/" + c + ".json",
    dataType: "json",
    success: function(data){
        $.each(data.data, function(key, value){
            $("#name").html(value.name);
            $("#title").html(value.title);
            $('#bkimage').css("background-image", "url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+value.id+"_0.jpg)");
            $("#historia").html(value.lore);
        });
    },
    error: function(e){
        console.log(e.message);
    }
});