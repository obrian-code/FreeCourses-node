# Free Courses API
 
Free Courses es una API diseñada para subir Cursos y Cupones Gratis para Udemy platzi edteam crehana Itoo Domestica etc.

## Free Courses API

Free Courses es una plataforma diseñada para subir Cursos y Cupones Gratis, es pequeño proyecto que aportará a la comunidad y en un plazo determinado.

## Construido con

✓ cors<br>
✓ dotenv<br>
✓ express<br>
✓ morgan<br>
✓ mysql2<br>
✓ nodemon<br>
✓ promise-mysql<br>

## Estructura del Proyecto

index.js <br>
.env <br>
.gitignore <br>
src / <br>
└── connection <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bd.js <br>
└── controllers <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;controllers.js <br>
└── inc <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.js <br>
└── router <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;router.js <br>
app.js


## Instalación

Clonar el repositorio   
    
    ```
    git clone https://github.com/obrian-code/FreeCourses-node
    ```
    
Instalar paquetes
    
    ```
    npm install
    ```

Ejecutar código

    ```
    npm run dev
    npm run start
    ```

## Configuración .ENV

      ```
      HOST = 
      USER = 
      PASSWORD= 
      DATABASE= 
      ```

## Rutas del API

| Metodo  | Ruta | 
| ------------- | ------------- |
| GET  | /  |
| GET  | /courses  |
| GET  | /courses/:id  |
| POST  | /courses  |
| PUT  | /courses/:id  |
| DELETE  | /courses/:id |

## Muestra

 ```
    https://freecourses-node-production.up.railway.app/
  ```

### Frontend

  ```
    https://github.com/obrian-code/FreeCourses.git
  ```