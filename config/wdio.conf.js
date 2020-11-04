exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',

    cucumberOpts: {
        timeout: 40000,
        require: ['tests/step_definitions/*.js'],        // <string[]> (file/dir) require files before executing features
        requireModule: ['@babel/register'],
        backtrace: true, // <boolean> show full backtrace for errors
        compiler: ['js:@babel/register'], // <string[]> filetype:compiler used for processing required features
        failAmbiguousDefinitions: true, // <boolean< Treat ambiguous definitions as errors
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings
        name: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        format: ['json'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true, // <boolean> disable colors in formatter output
        snippets: false, // <boolean> hide step definition snippets for pending steps
        source: false, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: true, // <boolean> fail if there are any undefined or pending steps
        tagExpression: null, // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
        tagsInTitle: false, // <boolean> add cucumber tags to feature or scenario name
        snippetSyntax: undefined, // <string> specify a custom snippet syntax
    },


    path: '/',
    port: 4444,
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true,
        }]],

    specs: [
        './tests/features/Checkout.feature',
    ],

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
          browserName: 'chrome'
        },
      ],



    // ====================
    // Wdio services
    // ====================
    services: ['selenium-standalone'],
    port: 4723,
};
