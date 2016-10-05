$("#translate").on("click", function(event){
    event.preventDefault();
    if ($("#translate").text() === "Français"){
        $("#summary").text("Un moderne réflexe développeur full-stack")
        $("#politipic_desc").html("<p class='light' id='politipic_desc'>Aide de la technologie du visage-analyse pour révolutionner le micro-ciblage des électeurs. PolitiPic est une preuve de concept que essaye d'estimer les opinions politiques d'un individu par des contours de leur visage.</p>")
        $("#baseball_desc").html("<p class='light'id='baseball_desc'>Un outil pour traduire la probabilite en situations de baseball comperable. Il est basé sur la données réelles chaque saison depuis 1957. Il est inspiré par <a href='https://gregstoll.dyndns.org/~gregstoll/baseball/stats.html#V.0.8.2.1'>Win Expectancy Finder</a> et Nate Silver.</p>")
        $("#waitertwelve_desc").html("<p class='light' id='waitertwelve_desc'>Une startup dédiée à la recherche innovante perspectives des médias classiques. Actuellement en développement d'un jeu vidéo JRPG-style.</p>")
        $("#translate").text("English")
              
    }
    else{
        $("#summary").text("A modern responsive full-stack coder")
        $("#politipic_desc").html("<p class='light' id='politipic_desc'>Using facial analysis innovation to revolutionize voter micro-targetting. PolitiPic is a proof of concept which attempts to estimate an individual's political opinions based solely on the contours of their face. Ultimately this type of technology could be used to enhance voter contact for political campaigns.</p>")
        $("#baseball_desc").html("<p class='light' id='baseball_desc'>A tool to translate probability into comperable baseball situations, based on real data from every season since 1957. Inspired by <a href='https://gregstoll.dyndns.org/~gregstoll/baseball/stats.html#V.0.8.2.1'>Win Expectancy Finder</a> and Nate Silver.</p>")
        $("#waitertwelve_desc").html("<p class='light' id='waitertwelve_desc'>A startup devoted to finding innovative takes on classic media. Currently developing a JRPG-style video game.</p>")
        $("#translate").text("Français")
    }
})
