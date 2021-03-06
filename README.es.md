# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Segunda parte de la TODO List, agregando fetch

Debes hacer este ejercicio despu茅s de la [aplicaci贸n de la TODO List](https://projects.breatheco.de/d/todo-list#readme) porque la primera parte es el boilerplate perfecto para comenzar a usar API's.

Para esta segunda parte, sincronizaremos nuestra lista de tareas con una base de datos real, usando la siguiente [RESTful](http://content.breatheco.de/lesson/understanding-rest-apis) y API p煤blica realizada para este ejercicio.

馃敆 Clic aqu铆 para acceder a la [documentaci贸n de la API del TODO-list ](http://assets.breatheco.de/apis/fake/todos/).

馃憜[Aqui hay un video explicando como usar el TodoList API con Fetch.](https://www.youtube.com/watch?v=s6_-c0LFDRo)

Todo este ejercicio se trata de la programaci贸n de asincrona porque las interacciones `from` y` to` del servidor deben realizarse de forma as铆ncrona. De esa manera, el usuario no tiene que esperar a que llegue la informaci贸n.

## 馃尡  C贸mo iniciar este proyecto

No clones este repositorio. El primer paso para comenzar a codificar es clonar el [react.js boilerplate](https://github.com/4GeeksAcademy/react-hello) en tu compjutador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aqu铆](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: 
```sh
$ git clone https://github.com/4GeeksAcademy/react-hello
````

馃挕 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu c贸digo en tu nuevo repositorio usando `add`, `commit` y `push`.

## Instrucciones:

- Haz que tu TODO List se sincronice con la API de backend cada vez que se agregue o elimine una tarea.
- Agregue un bot贸n de limpieza de todas las tareas que eliminar谩 toda la lista del servidor y actualizar谩 la lista vac铆a en el front-end.

Hay 3 momentos cr铆ticos en la l铆nea de tiempo de la aplicaci贸n (denominado tiempo de ejecuci贸n) para centrarse en su integraci贸n:
- **Despu茅s de que la lista se carga vac铆a por primera vez (componentDidMount)**: debes obtener (GET) los datos de la API y actualizar las tareas cuando la informaci贸n finalmente llegue.
- **Cuando se agrega una nueva tarea**: debes PONER (PUT) la nueva lista en el servidor.
- **Cuando se elimina una tarea**: Debes PONER (PUT) la nueva lista en el servidor.

## Pista

Utiliza la siguiente fetch call para sincronizar tus tareas con el servidor cada vez que haya un cambio en la lista.

```js
fetch('http://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Ser谩 true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el c贸digo de estado = 200 o c贸digo = 400 etc.
        console.log(resp.text()); // Intentar谩 devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aqu铆 es donde debe comenzar tu c贸digo despu茅s de que finalice la b煤squeda
        console.log(data); //esto imprimir谩 en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });
```

Para cualquier otra solicitud, debes seguir cambiando las variables en el fetch:El URL, el m茅todo y el payload (carga 煤til).
