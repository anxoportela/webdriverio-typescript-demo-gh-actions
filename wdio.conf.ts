import allure from 'allure-commandline';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        './test/specs/**/*.ts'
    ],

    exclude: [],

    maxInstances: 3,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu', '--no-sandbox']
            }
        }
    ],

    logLevel: 'info',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            disableWebdriverLogsReporting: false,
            addConsoleLogs: true,
            addFailedScreenshots: true,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', './reports/allure-results', '--clean', '-o', './reports/allure-report']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000);

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout);

                if (exitCode !== 0) {
                    return reject(reportError);
                }

                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
};
