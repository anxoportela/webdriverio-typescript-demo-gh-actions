import allure from "allure-commandline";

export const config: WebdriverIO.Config = {
  runner: "local", // Ejecutar las pruebas localmente

  tsConfigPath: "./tsconfig.json", // Ruta al archivo de configuración de TypeScript

  specs: ["./test/specs/**/*.ts"], // Ruta a los archivos de especificaciones de prueba

  exclude: [], // No hay exclusiones

  maxInstances: 3, // Ejecutar hasta 3 instancias en paralelo

  capabilities: [
    {
      browserName: "chrome", // Ejecutar en el navegador Chrome
      "goog:chromeOptions": {
        args: [
          "--headless", // Ejecutar Chrome en modo headless (sin interfaz gráfica)
          "--disable-gpu", // Desactivar la aceleración de GPU
          "--no-sandbox", // Desactivar el sandboxing
          "--disable-dev-shm-usage", // Evitar problemas con la memoria compartida
          "--window-size=1920,1080", // Establecer el tamaño de la ventana del navegador
        ],
      },
    },
  ],

  logLevel: "info", // Nivel de registro configurado a "info" para registros básicos

  waitforTimeout: 10000, // Tiempo de espera para localizar los elementos
  connectionRetryTimeout: 90000, // Tiempo de espera para reintentar la conexión
  connectionRetryCount: 3, // Número de intentos de reconexión en caso de fallo

  framework: "mocha", // Utilizar Mocha como framework de pruebas

  reporters: [
    "spec", // Mostrar los resultados de las pruebas en la consola
    [
      "allure", // Utilizar Allure para generar los informes de las pruebas
      {
        outputDir: "./reports/allure-results", // Directorio de salida para los resultados de Allure
        disableWebdriverStepsReporting: false, // Incluir los pasos de WebDriverIO en el informe
        disableWebdriverScreenshotsReporting: false, // Incluir capturas de pantalla de WebDriverIO en el informe
        disableWebdriverLogsReporting: false, // Incluir los registros de WebDriverIO en el informe
        addConsoleLogs: true, // Añadir los registros de consola al informe de Allure
        addFailedScreenshots: true, // Incluir capturas de pantalla de las pruebas fallidas en el informe
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd", // Estilo de desarrollo guiado por comportamiento de Mocha
    timeout: 60000, // Tiempo de espera para cada prueba (60 segundos)
  },

  onComplete: async function () {
    const reportError = new Error("No se pudo generar el informe de Allure");

    try {
      // Generar el informe de Allure después de que se completen todas las pruebas
      const generation = allure([
        "generate",
        "./reports/allure-results", // Carpeta con los resultados de Allure
        "--clean", // Limpiar los resultados previos antes de generar un nuevo informe
        "-o",
        "./reports/allure-report", // Carpeta de salida para el informe de Allure
      ]);

      // Timeout para la generación del informe
      const generationTimeout = setTimeout(() => {
        throw reportError; // Lanza un error si el tiempo de espera se supera
      }, 5000);

      return new Promise<void>((resolve, reject) => {
        generation.on("exit", (exitCode: number) => {
          clearTimeout(generationTimeout); // Limpiar el timeout cuando termine la generación

          if (exitCode !== 0) {
            reject(reportError); // Rechazar la promesa si hay error en la generación
          } else {
            console.log("Informe de Allure generado con éxito");
            resolve(); // Resolver la promesa si el informe se generó correctamente
          }
        });
      });
    } catch (error) {
      console.error("Error al generar el informe de Allure:", error);
      throw error; // Lanzar el error si no se puede generar el informe
    }
  },
};
