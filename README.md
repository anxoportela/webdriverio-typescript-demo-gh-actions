<!-- omit from toc -->
# 🚀 **WebDriverIO Automation Testing with TypeScript**

Este proyecto utiliza **WebDriverIO** para realizar pruebas de automatización de aplicaciones web utilizando **TypeScript**. Las pruebas cubren funcionalidades básicas como el login y la interacción con la página de ejemplo **SauceDemo**. Además, se utiliza **Mocha** como framework de pruebas y **Selenium Standalone** como servicio de automatización.

<!-- omit from toc -->
## 📋 Tabla de Contenidos

- [🚀 **Descripción**](#-descripción)
- [🔧 **Tecnologías Utilizadas**](#-tecnologías-utilizadas)
- [📂 **Estructura del Proyecto**](#-estructura-del-proyecto)
- [🏃‍♂️ **Cómo Ejecutar las Pruebas**](#️-cómo-ejecutar-las-pruebas)
- [🛠️ **Comandos Útiles**](#️-comandos-útiles)
- [🤝 **Contribución**](#-contribución)
- [📜 **Licencia**](#-licencia)

---

## 🚀 **Descripción**

Este proyecto tiene como objetivo mostrar cómo automatizar pruebas web utilizando **WebDriverIO** con **TypeScript**. Se configura el entorno de pruebas, se escriben scripts para realizar tests de integración, y se usan herramientas como **Mocha** y **Selenium** para ejecutar las pruebas en un entorno controlado.

---

## 🔧 **Tecnologías Utilizadas**

- **WebDriverIO**: Herramienta de automatización de pruebas para aplicaciones web.
- **TypeScript**: Lenguaje de programación que mejora la calidad y mantenimiento del código JavaScript.
- **Mocha**: Framework de pruebas utilizado para escribir y ejecutar los tests.

---

## 📂 **Estructura del Proyecto**

La estructura del proyecto es la siguiente:

```bash
webdriverio-typescript-demo/             # Dependencias instaladas
├── wdio.conf.ts                # Configuración de WebDriverIO en TypeScript
├── package.json                # Configuración del proyecto
├── tsconfig.json               # Configuración de TypeScript
└── tests/
    ├── specs/                  # Carpeta para los scripts de prueba
      ├── saucedemo.e2e.ts      # Ejemplo de prueba en TypeScript
LICENSE
README.md                       # Este archivo
```

- **`wdio.conf.ts`**: Archivo de configuración de **WebDriverIO** para ejecutar las pruebas.
- **`saucedemo.e2e.ts`**: Script de prueba en TypeScript que interactúa con la página **SauceDemo**.

---

## 🏃‍♂️ **Cómo Ejecutar las Pruebas**

1. **Instalar las dependencias**:

   Si aún no has instalado las dependencias, navega al directorio del proyecto y ejecuta el siguiente comando:

   ```bash
   npm install
   ```

2. **Ejecutar las pruebas**:

   Para ejecutar las pruebas en el navegador, utiliza el siguiente comando:

   ```bash
   npx wdio run wdio.conf.ts
   ```

   Esto ejecutará las pruebas definidas en los archivos de la carpeta `tests/specs` utilizando **WebDriverIO**.

---

## 🛠️ **Comandos Útiles**

Aquí tienes algunos comandos útiles para trabajar con WebDriverIO:

- **`browser.url(url: string)`**: Abre una URL en el navegador.
- **`browser.getTitle()`**: Obtiene el título de la página.
- **`$(selector)`**: Encuentra un solo elemento con el selector especificado.
- **`setValue(value: string)`**: Establece un valor en un campo de texto.
- **`click()`**: Hace clic en un elemento.
- **`getText()`**: Obtiene el texto de un elemento.
- **`waitForDisplayed(timeout: number)`**: Espera a que un elemento sea visible.

---

## 🤝 **Contribución**

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu feature o corrección de bug (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-feature`).
5. Crea un **pull request**.

---

## 📜 **Licencia**

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
