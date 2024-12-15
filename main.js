//Funktion til at scrolle på siden når man klikker i nav-bar
function scrollToAbout() {
    //Finder alle elementer på siden med klassen "about-container". Siden vi ved vi kun skal bruge den første kan vi tage position nul [0]
    var container = document.getElementsByClassName("about-container")[0];
    //Scroller vinduet hen til starten af containeren med en "smooth" animation
    container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

//Funktion til at scrolle på siden når man klikker i nav-bar
function scrollToPortfolio() {
    //Finder alle elementer på siden med klassen "portfolio-container". Siden vi ved vi kun skal bruge den første kan vi tage position nul [0]
    var container = document.getElementsByClassName("portfolio-container")[0];
    //Scroller vinduet hen til starten af containeren med en "smooth" animation
    container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

//Funktion til at scrolle på siden når man klikker i nav-bar
function scrollToContact() {
    //Finder alle elementer på siden med klassen "contact-container". Siden vi ved vi kun skal bruge den første kan vi tage position nul [0]
    var container = document.getElementsByClassName("contact-container")[0];
    //Scroller vinduet hen til starten af containeren med en "smooth" animation
    container.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToTop() {
    //Sætter scroll to body til 0 = i toppen
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

//Funktioner til at åbne vinduerne
function openPortrait() {
    //Finder kun et element på siden som har id "portrait-modal"
    var modal = document.getElementById("portrait-modal");
    
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closePortrait();
        }
    }
}

function closePortrait() {
    //Finder elementet med id "portrait-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("portrait-modal");
    modal.style.display = "none";
}

function openWebdesign() {
    //Finder kun et element på siden som har id "webdesign-modal"
    var modal = document.getElementById("webdesign-modal");
   
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closeWebdesign();
        }
    }
}

function closeWebdesign() {
    //Finder elementet med id "webdesign-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("webdesign-modal");
    modal.style.display = "none";
}

function openArt() {
    //Finder kun et element på siden som har id "art-modal"
    var modal = document.getElementById("art-modal");
    
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closeArt();
        }
    }
}

function closeArt() {
    //Finder elementet med id "art-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("art-modal");
    modal.style.display = "none";
}

function openEmotes() {
    //Finder kun et element på siden som har id "emotes-modal"
    var modal = document.getElementById("emotes-modal");
   
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closeEmotes();
        }
    }
}

function closeEmotes() {
    //Finder elementet med id "emotes-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("emotes-modal");
    modal.style.display = "none";
}

function openApp() {
    //Finder kun et element på siden som har id "app-modal"
    var modal = document.getElementById("app-modal");
    
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closeApp();
        }
    }
}

function closeApp() {
    //Finder elementet med id "app-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("app-modal");
    modal.style.display = "none";
}

function openPhoto() {
    //Finder kun et element på siden som har id "photo-modal"
    var modal = document.getElementById("photo-modal");
    
    //Går ind og sætter en "style" med display til at være block for at vise vinduet
    modal.style.display = "block";

    //Registerer kliks på siden, og tjekker for om klikket er lig med vores baggrund på vinduet. Hvis det er, så lukker vi vinduet da det er et tryk udenfor
    window.onclick = function(event) {
        if (event.target == modal) {
            closePhoto();
        }
    }
}

function closePhoto() {
    //Finder elementet med id "photo-modal" og går ind og sætter en "style" med display til at være none for at skjule vinduet
    var modal = document.getElementById("photo-modal");
    modal.style.display = "none";
}