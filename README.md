# ListasEnlazadasNodeJS

Este repositorio existe para **migrar paso a paso** lo que se trabaja en Java hacia Node.js.

La idea no es empezar desde cero, sino tomar como referencia el proyecto Java
`ListasEnlazadas` y trasladar su logica a JavaScript para practicar:

- sintaxis de Node.js,
- manejo de clases y objetos,
- estructura de proyectos,
- y validacion de comportamiento entre dos lenguajes.

## Relacion con el repositorio Java

Repositorio base (referencia funcional): [wcordova/ListasEnlazada](https://github.com/wcordova/ListasEnlazada)

Flujo recomendado:

1. Implementar o entender un metodo en Java.
2. Pasar ese mismo metodo a Node.js.
3. Ejecutar demos y retos en Node.js.
4. Comparar salida esperada entre ambos proyectos.

El objetivo academico es que el estudiante vea que la **logica de estructuras de datos**
se mantiene, aunque cambie la sintaxis del lenguaje.

## Objetivo de este scaffold

- Mantener la misma separacion por responsabilidades del proyecto Java.
- Replicar clases de nodos y listas (`simple` y `doubly`).
- Probar rapidamente con ejemplos y retos de consola.
- Dejar retos pendientes para que el estudiante implemente metodos clave.

## Estructura

```text
src/
  index.js
  challenges/
    linkedListChallenges.js
  structures/
    simple/
      SimpleNode.js
      SinglyLinkedList.js
    doubly/
      DoublyNode.js
      DoublyLinkedList.js
  examples/
    simpleListExample.js
    doublyListExample.js
    migrationGuideExample.js
```

## Ejecutar y probar

```bash
npm install
npm run demo
```

El comando ejecuta:

- ejemplos base de lista simple y doble,
- ejemplo guia de migracion Java -> Node.js,
- retos pendientes con mensajes `[PENDIENTE]`.

## Mapa Java -> Node.js

- `addFirst(T value)` -> `addFirst(value)`
- `addLast(T value)` -> `addLast(value)`
- `removeFirst()` -> `removeFirst()`
- `removeLast()` -> `removeLast()`
- `countOccurrences(T value)` -> `countOccurrences(value)`
- `clean()` -> `clean()`
- `reverseInPlace()` -> `reverseInPlace()`
- `removeDuplicates()` -> `removeDuplicates()`

## Retos pendientes para estudiantes

Los siguientes metodos quedan intencionalmente con `TODO` y `throw new Error(...)`
para que sean implementados durante la migracion:

- `SinglyLinkedList.countOccurrences(value)`
- `SinglyLinkedList.clean()`
- `SinglyLinkedList.reverseInPlace()`
- `SinglyLinkedList.removeDuplicates()`
- `DoublyLinkedList.countOccurrences(value)`
- `DoublyLinkedList.clean()`
- `DoublyLinkedList.reverseInPlace()`
- `DoublyLinkedList.removeDuplicates()`

## Guia de trabajo sugerida

1. Resolver primero el metodo en Java (`ListasEnlazadas`).
2. Repetir la implementacion en Node.js (`ListasEnlazadasNodeJS`).
3. Ejecutar `npm run demo` y validar resultados.
4. Revisar invariantes despues de cada cambio: `head`, `tail`, `size`.
5. Documentar diferencias de sintaxis encontradas entre Java y Node.js.
