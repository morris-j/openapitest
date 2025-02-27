window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

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
      {
        components: {
          Logo: () => (
            <img alt="My Logo" height="40" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTM3IiBoZWlnaHQ9IjEzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMy40Nzc2OSAwIDAgMy4yNjA2NyAtNjczLjEyOCAtNjkxLjk5MykiIHN0cm9rZT0iIzAwMCIgZm9udC1zdHlsZT0ibm9ybWFsIiBmb250LXdlaWdodD0ibm9ybWFsIiB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInT3BlbiBTYW5zIEV4dHJhQm9sZCciIGZvbnQtc2l6ZT0iMjQiIGlkPSJzdmdfMSIgeT0iMjQxLjIyMTkyIiB4PSIxOTYuOTY5MjEiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzYyYTAzZiI+TXkgTG9nbzwvdGV4dD4KICA8cGF0aCBpZD0ic3ZnXzIiIGQ9Im0zOTUuNjAyNSw1MS4xODM1OWw1My44Nzc3MSwwbDE2LjY0ODYzLC01MS4xODM1OGwxNi42NDg2NCw1MS4xODM1OGw1My44Nzc3LDBsLTQzLjU4NzksMzEuNjMyODNsMTYuNjQ5NDksNTEuMTgzNThsLTQzLjU4NzkyLC0zMS42MzM2OWwtNDMuNTg3OTEsMzEuNjMzNjlsMTYuNjQ5NDksLTUxLjE4MzU4bC00My41ODc5MiwtMzEuNjMyODN6IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzYyYTAzZiIvPgogPC9nPgo8L3N2Zz4="/>
          )
        }
      }
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
