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
  
## Crédito
Esta aplicación está inspirada en el concepto <a href="https://dev1992.com/ufree/#/">ufree</a>  Diseñado por <a href="https://github.com/obrian-code">obrian-code </a>


### License

 ```
Copyright 20202 obrian-code

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 ```
