# Prueba Front End

### Requisitos
* Node >= 6.11.2
* npm >= 3.10.10
* MongoDB

##### Insturcciones para instalar MongoDB
```
 brew install mongodb
```
Despues de instalar Mongo, crear una carpeta "db".
```
sudo mkdir /data
sudo mkdir /data/db
```
Asegurarse que la carpeta /data/db tenga permisos 
```
> sudo chown -R `id -un` /data/db
> # Enter your password  
```

### Instrucciones para levantar las aplicaciones
- Correr npm install en la carpeta /api
- Correr npm install en la carpeta /website
- Correr npm start en la carpeta /api (levanta la aplicacion en el puerto 8000 y corre mongod)
- Correr npm start en la carpeta /website
- En un browser levantara el website en http://localhost:3000/ 
