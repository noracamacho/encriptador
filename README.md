# Proyecto de Encriptación y Desencriptación de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto utilizando un conjunto específico de reglas. El texto encriptado se muestra en un área de salida, y el usuario puede copiarlo al portapapeles.

## Funcionalidades

- **Encriptar Texto:** Convierte las vocales de un texto en secuencias específicas.
- **Desencriptar Texto:** Convierte las secuencias específicas de vuelta a las vocales originales.
- **Validación:** El texto a encriptar debe estar en minúsculas. Si no lo está, se mostrará una alerta.
- **Copiar al Portapapeles:** El texto encriptado o desencriptado puede ser copiado al portapapeles.

## Reglas de Encriptación

Las reglas para encriptar el texto son las siguientes:

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

## Estructura del Proyecto

El proyecto consta de un archivo HTML principal, un archivo JavaScript para manejar la lógica de encriptación/desencriptación y la interacción con el DOM, y un archivo CSS para los estilos.

### HTML

```html ```
<textarea id="input-text" placeholder="Ingrese el texto aqui"></textarea>
<textarea id="output-text" readonly></textarea>
<button id="encrypt-btn">Encriptar</button>
<button id="decrypt-btn">Desencriptar</button>
<button id="copy-btn" style="display:none;">Copiar</button>
<div class="result" style="display:none;"></div>
<div class="placeholder" style="display:flex;">Texto aquí...</div>

### JavaScript
El archivo JavaScript incluye las funciones para encriptar y desencriptar el texto, manejar la validación y actualizar la interfaz de usuario.

### CSS
El archivo CSS define el estilo de los elementos de la interfaz de usuario, como los botones y las áreas de texto.

### Instrucciones de Uso

**Encriptar Texto:**
- Ingrese el texto que desea encriptar en el área de texto de entrada.
- Asegúrese de que el texto esté en minúsculas.
- Haga clic en el botón "Encriptar".
- El texto encriptado se mostrará en el área de salida.

**Desencriptar Texto:**
- Ingrese el texto encriptado en el área de texto de entrada.
- Haga clic en el botón "Desencriptar".
- El texto desencriptado se mostrará en el área de salida.

**Copiar al Portapapeles:**
- Después de encriptar o desencriptar el texto, haga clic en el botón "Copiar" para copiar el texto al portapapeles.

### Requisitos

Este proyecto solo requiere un navegador web moderno para funcionar. No se necesitan dependencias adicionales.

### Licencia

Este proyecto está licenciado bajo la MIT License.

