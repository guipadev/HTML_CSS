:hover

Esta psudo clase se usa para cambiar el estilo de ese elemento cuando colocamos el ratón encima

    .button:hover {
        color: purpe;
        background-color: orange
    }

Es importante recordad qe esta es pseudo clase da problemas en pantallas táctiles, por lo que se recomienda aplicarla SIEMPRE en el estilo escritorio y que no esté presente en estilo móvil, también tenemos la opción de meter estos estilos en la media query hover, la cual detecta si el dispositivo usa cursor, en móvil no actua.

    @media (hover: hover) {
        .button:hover {
        color: purpe;
        background-color: orange
        }
    }

Para el suo en dispositivos se debe realizar lo siguiente:

:active

Esta pseudo clase se usa generalmente sobre link o botones para establecer el estado activo de ese elemento cuando hacemos click. Este estado comienza al hacer click sobre el elemento con el botón izquierdo y finaliza al soltar el click.

    .button:active {
        color: orange;
        background-color: purple
    }

NOTA: Es importante que no se use las pseudo clases hover o active en elementos no clickables, por temas de usabilidad eso confunde al usuario.
