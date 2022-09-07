## PRUEBA DE CONOCIMIENTO - INGENIERO DE DESARROLLO IGAC
## NICOLAS PINZÓN OSORIO
## 06/09/2022

TECNOLOGIAS USADAS PARA EL DESARROLLO DE ESTA PRUEBA:
	* Backend: Spring Boot (Framework Java)
	* Frontend: Angular
	* Motor de Base de datos: MySql

DATOS A TENER EN CUENTA:
	* Debe estar instalado en la maquina donde se va a ejecutar Java, MySql, Angular CLI version 14.2.1. y npm.
	* La variable JAVA_HOME debe estar registrada en las variables de entorno.
	* Validar que los puertos 8080 y 4200 esten libres.

PASOS PARA SU EJECUCIÓN:
	* MySql:
		1. Ejecutar el Script script_bd_igac
	* Spring Boot: 
		1. En el archivo backend_igac\src\main\resources\application.properties debera actualizar los datos para la conexion con MySql (username y password).
		1. Abrir un terminal en la ubicacion del proyecto "backend_igac".
		2. Ejecutar el comando: .\mvnw.cmd spring-boot:run, allí iniciara el backend en la url localhost:8080.
	* Angular:
		1. Abrir un terminal en la ubicacion del proyecto "frontend_igac".
		2. Ejecutar el comando: npm install (Instala las dependecias usadas en el proyecto).
		3. Ejecutar el comando: ng serve, se iniciará el frontend en la url localhost:4200.

		
