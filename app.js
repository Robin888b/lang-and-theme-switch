const translation = {
    "fr":{
        "title":"Un texte complètement aléatoire !!!",
        "content":"Septembre venait de finir la phrase. Pensiez-vous que nous les tenons tous les deux d'être ensemble, c'est terminé. Instruit à temps de certaines particularités concernant les opinions et les moeurs déplorables de son époque. Pesez-moi ça, continua la petite vanité de son succès. Crise que mon ami, dit-il, mais pour voler de ses propres paroles. Mépris pour mépris je me raccrochais toujours à l'adresse du notaire de l'endroit disent que ce genre d'intrigue comme pour tous les billets d'une livre. Tendant l'oreille les idées de mon siècle, j'en profitai. Voudriez-vous avoir l'obligeance de monter, mais d'être brusquement rappelé à la sensation et au mouvement, acquise en vue d'un objet immédiat, et d'une espérance, y opèrent.",
        "nav":["je","sais","pas", "quoi","mettre"]
    },
    "uk":{
        "title":"a completely random text !!!",
        "content":"Is post each that just leaf no. He connection interested so we an sympathize advantages. To said is it shed want do. Occasional middletons everything so to. Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he. Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined.Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.",
        "nav":["you","are","viewing","dummy","text"]
    },
    "es":{
        "title":"un texto totalmente aleatorio !!!",
        "content":"Pagado por acusar opacas mas aca sintio ajenas aun. Dira pues el alta mi pedi malo. Casi sola dias el fosa pies toco yo en. Positivo yo fantasia chillona perezoso en da. Mal han concedian energicos dulcisima derribado sea destacaba rio. Mostrarse de asquerosa te comenzaba tu esperanza ceremonia. Yo ya so bastidores disparates seduciendo alumbraban. Coqueteria en levantarse dispersado no propositos magistrado.Victima oro importa retrato uno. Suceda camisa ama esposa fregar las palido. Eh se fina de oido en cada hora duro. Van gas quedo tan llena tio fondo tiene. He rebeldia estimaba el oh primeros ex. Ch orgullosa id la prestadas exclusiva.",
        "nav":["lunes","martes","miércoles","jueves","viernes"]
    }
}

let theme = 1
function setTheme(){
    if (theme == 1){
        document.documentElement.style.setProperty('--backgroungColor1','#ffffffc5')
        document.documentElement.style.setProperty('--backgroungColor2','#000000e3')
        document.documentElement.style.setProperty('--navbarColor','#ffffffaf')
        document.documentElement.style.setProperty('--textColor1','#000000')
        document.documentElement.style.setProperty('--textColor2','#3F7C85')
        document.documentElement.style.setProperty('--colorThemeIcon','url(moon.png)')
        console.info("change theme to light")
        theme = 0
    } else {
        document.documentElement.style.setProperty('--backgroungColor1','#000000c5')
        document.documentElement.style.setProperty('--backgroungColor2','#ffffff25')
        document.documentElement.style.setProperty('--navbarColor','#000000af')
        document.documentElement.style.setProperty('--textColor1','#ffffff')
        document.documentElement.style.setProperty('--textColor2','#0CF25D')
        document.documentElement.style.setProperty('--colorThemeIcon','url(sun.png)')
        console.info("change theme to dark")
        theme = 1
    }
}

function setlang(lang) {
    // dropdown menu
    let divfr = document.getElementById("divfr")
    let divuk = document.getElementById("divuk")
    let dives = document.getElementById("dives")
    // content to translate
    let DocumentTitle = document.getElementById("title")
    let DocumentContent = document.getElementById("content")
    let DocumentHeader = document.getElementById("header")
    // 
    let langDiv = document.getElementById("langDiv")
    console.log(langDiv.classList)
    if (langDiv.classList.contains("active")){ // if menu open
        switch(lang) {
            case 'fr' :
                // change the selected item
                divfr.classList.add("select")
                dives.classList.remove("select")
                divuk.classList.remove("select")
                // change the content of the page
                DocumentTitle.innerText = translation.fr.title
                DocumentContent.innerText = translation.fr.content
                DocumentHeader.innerHTML = `<li>${translation.fr.nav[0]}</li>
                <li>${translation.fr.nav[1]}</li>
                <li>${translation.fr.nav[2]}</li>
                <li>${translation.fr.nav[3]}</li>
                <li>${translation.fr.nav[4]}</li>`
            break;
            case 'es':
                // change the selected item
                dives.classList.add("select")
                divfr.classList.remove("select")
                divuk.classList.remove("select")
                // change the content of the page
                DocumentTitle.innerText = translation.es.title
                DocumentContent.innerText = translation.es.content
                DocumentHeader.innerHTML = `<li>${translation.es.nav[0]}</li>
                <li>${translation.es.nav[1]}</li>
                <li>${translation.es.nav[2]}</li>
                <li>${translation.es.nav[3]}</li>
                <li>${translation.es.nav[4]}</li>`
            break;
            case 'uk':
                // change the selected item
                divuk.classList.add("select")
                dives.classList.remove("select")
                divfr.classList.remove("select")
                // change the content of the page
                DocumentTitle.innerText = translation.uk.title
                DocumentContent.innerText = translation.uk.content
                DocumentHeader.innerHTML = `<li>${translation.uk.nav[0]}</li>
                <li>${translation.uk.nav[1]}</li>
                <li>${translation.uk.nav[2]}</li>
                <li>${translation.uk.nav[3]}</li>
                <li>${translation.uk.nav[4]}</li>`
        }
        langDiv.classList.remove("active")
    } else {
        langDiv.classList.add("active")
    }
}