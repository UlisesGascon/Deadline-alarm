var five = require('johnny-five'),
    songs = require('j5-songs'),
    Scheduled = require("scheduled");
 
five.Board().on('ready', function () {
	// Hardware
	var zumbador = new five.Piezo(3),
		lampara = new five.Led(9),
		boton = new five.Button(2),
		motorVibrador = new five.Motor({
			pin: 5
		});
	// Modos
	var modoSilencioso = false;

	// reseteando el Hardware en el arranque
	pararAlarma();

	// Eventos Botón
	boton.on("press", function() {
		pararAlarma();
	});

	// Funciones Programadas
	var alertaDescanso = new Scheduled({
		id: "tareaAlertaDescanso",
		// lunes y miércoles a las 20.30
		pattern: "30 20 * * 1,3 *",  
		task: function(){
			iniciarAlarma();
			console.log("Recreo!");
		}
	}).start();

	var alertaFinClase = new Scheduled({
		id: "tareaAlertaFinClase",
		// lunes y miércoles a las 22.00
		pattern: "0 22 * * 1,3 *",
		task: function(){
			iniciarAlarma();
			console.log("Fin de la Clase!");
		}
	}).start();	

	// Funciones Hardware
	function pararAlarma() {
		lampara.stop().off();
		motorVibrador.stop();
		zumbador.noTone();
	}
	
	function iniciarAlarma (cancion){
		var sonidoActivado,
		luzActivado; 

		if (modoSilencioso) {
			sonidoActivado = false;
			luzActivado = false;
		} else {
			sonidoActivado = true;
			luzActivado = true;
		}
		
		if (sonidoActivado){
			var cancionElegida = songs.load(cancion || 'pew-pew-pew');
			zumbador.play(cancionElegida);
		}
		if (modoSilencioso){
			motorVibrador.start(255);
		}
		if (luzActivado){
			// Ajustando salida a 3.3v
			lampara.brightness(168);
			lampara.strobe(500);
		}
	}
});
