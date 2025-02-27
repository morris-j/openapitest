window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  const LogoPlugin = () => {
          return {
            components: {
                Logo: () => (
                    <img alt="My Logo" height="40" src="kochava_horizontal.png"/>
                  )
            }
          }
        }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "../K4P_OpenAPI_Spec.yaml",
    urls: [
      {
        url: "../K4P_OpenAPI_Spec.yaml",
        name: "Primary"
      },
      {
        url: "../K4P_OpenAPI_Spec2.yaml",
        name: "Secondary"
      },
      {
        url: "../K4P_OpenAPI_Spec3.yaml",
        name: "Another"
      },
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      LogoPlugin
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
