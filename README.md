# Final-project
Final project at TheBridge;

## Definicion de cliente 

Como usuario podras acceder a la pagina de registro a la pagina de productos a la pagina de cesta y a la pagina de login si te registras te redirige a login.

En la pagina de registro te podrias registrar y tendrias enlaces para ir a la pagina de login y a la de productos, si te registras te lleva directamente ala pagina de productos.

En la pagina de login te podras loguear y tendras enlaces para ir a la pagina de productos y a la pagina de registro, si te logueas te lleva directamente a la pagina de productos.

En la pagina de productos se podran ver los tipos de productos agrupados, podras ir a ver la agrupacion de productos que desees y cada producto tendra una imagen, precio, descripcion de las caracteristicas del producto y un boton para añadir a la cesta.
  
En la parte superior de la pagina tendras un boton que te llevara a la pagina de cesta, en la pagina de cesta se veran todos los productos que hayas añadido a la cesta y tendras un total de precio que sera la suma de todos los productos tendras un boton de realizar pedido que si no estas logueado te llevara a la pagina de login y si estas logueado te mandara un email y te dara las gracias por confiar en unas de las mejores app del mercado;

## Definicion tecnica

## Backend

Crea tres tablas user, products y orders.

Crear tabla de user para guardar usuarios, debera tener los siguientes campos:


- id (uuid, PK)
- email (TEXT NOT NULL)
- username (TEXT NOT NULL)
- password (TEXT NOT NULL)




Crear tabla de products para guardar los productos, debera tener los siguientes campos:

- id (uuid, PK)
- name(TEXT NOT NULL)
- brand(TEXT NOT NULL)
- description (TEXT NOT NULL)
- price (FLOAT NOT NULL)
- quantity(NUMBER NOT NULL)
- category (TEXT NOT NULL)
- id order (uuid)
- references (orders)



La tabla de orders para guardar los pedidos, debera tener los siguientes campos :

- id (uuid, PK).
- id_user(uuid).
- id_products(uuid).
- fecha (DATE).
- total (NUMBER NOT NULL).




-- Crea un  endpoint POST /user para añadir a los usuarios que se registren.

-- Crea un endpoint GET /products para mostrar todos los productos.

-- Crea un endpoint POST /orders/new para añadir nuevos pedidos.

-- Crea un endpoint GET /orders para mostrar los pedidos.


## Frontend


Pagina de registro contendra un formulario:


- H1 titulo "Crea tu cuenta".
- Campo email(requerido).
- Campo username(requerido).
- Campo password(requerido, longitud minima 4 caracteres).
- Campo submit, si todo va bien redirigir a login.

Pagina de login contendra un formulario:

- H1 titulo "Login"
- Campo email(requerido).
- Campo password(requerido, longitud minima 4 caracteres).
- Campo submit, si todo va bien redirigir a productos.

Pagina de productos contendra en el centro varias agrupaciones de tipos de componentes si clicas en cualquier grupo te mostrara todos los productos de ese tipo:

- Placas base.
- Discos duros.
- Tarjetas graficas.
- Procesadores.
- Memorias ram.
- Fuentes de alimentacion.
- Ventiladores.

La pagina de productos contendra en la esquina superior derecha :

- Nombre de usuario (si estas logueado)
- Si no estas logueado tendras un enlace que te llevara ala pagina de login.
- Cesta (qu ete llevara ala pagina de cesta).

La pagina de tipos de productos te mostrara todos los productos de ese tipo que cada producto tendra:

- Imagen.
- Precio.
- Caracteristicas.
- Un boton para añadir dicho producto a la cesta.