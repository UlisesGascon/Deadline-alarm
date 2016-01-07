![shieldsIO](https://img.shields.io/github/issues/UlisesGascon/Deadline-alarm.svg)
![shieldsIO](https://img.shields.io/github/release/UlisesGascon/Deadline-alarm.svg)
![shieldsIO](https://img.shields.io/crates/l/rustc-serialize.svg)
![shieldsIO](https://img.shields.io/david/UlisesGascon/Deadline-alarm.svg)
# Deadline-alarm

![img_frontal](fotos/vista_frontal.jpg)
Dispositivo que nos avisa en momentos programados de manera visual y auditiva usando Node.js (J5) y Arduino

### [DEMO](https://twitter.com/kom_256/status/685056191341408256)

### Dependencias

- [Johnny-five](https://www.npmjs.com/package/johnny-five)
- [J5-songs](https://www.npmjs.com/package/j5-songs)
- [Scheduled](https://www.npmjs.com/package/scheduled)

### Esquemas
- **Protoboard:**
![img_proto](fotos/Protoboard_deadline_alarm.png)

- **Componentes:**
	- Motor (Vibración)
	- Buzzer
	- Botón
	- Resistencia 10k oms
	- Lámpara modificada

- **Conexiones:**
	- 5v
	- GND
	- pin 9 (lámpara)
	- pin 5 (motor)
	- pin 3 (zumbador)
	- pin 2 (botón)

### Construcción

**Modificación de la lámpara:**
![img_soldadura](fotos/soldadura.jpg)

**Montaje Final:**
![img_montaje](fotos/vista_interior.jpg)