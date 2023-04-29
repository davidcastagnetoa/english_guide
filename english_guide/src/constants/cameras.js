import {
  samsungN1,
  samsung6110,
  samsung6410,
  samsung6430,
  arloIndoor,
  arloSpotlight,
} from "../assets/images";

const cameras = [
  {
    models: [
      {
        model: {
          english: "Samsung",
          español: "Samsung",
        },
        submodels: [
          {
            submodel: "6410",
            name: "CloudCam Pro",
            description: "",
            icon: samsung6410,
            features: [],
            encoding: [
              {
                reason: {
                  english: "Not connecting to router",
                  español: "No conecta con router",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no comunica correctamente con router, reconfigurar cámara correctamente de nuevo sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no enciende led de estado, revisar cámara correctamente cambair de ser necesario, sin coste ni cargos gracias",
              },
            ],
          },
          {
            submodel: "6415",
            name: "CloudCam N1",
            description: "",
            icon: samsungN1,
            features: [],
            encoding: [
              {
                reason: {
                  english: "Not connecting to router",
                  español: "No conecta con router",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no comunica correctamente con router, reconfigurar cámara correctamente de nuevo sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no enciende led de estado, revisar cámara correctamente cambair de ser necesario, sin coste ni cargos gracias",
              },
            ],
          },
          {
            submodel: "6110",
            name: "CloudCam Mini",
            description: "",
            icon: samsung6110,
            features: [],
            encoding: [
              {
                reason: {
                  english: "Not connecting to router",
                  español: "No conecta con router",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no comunica correctamente con router, reconfigurar cámara correctamente de nuevo sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no enciende led de estado, revisar cámara correctamente cambair de ser necesario, sin coste ni cargos gracias",
              },
            ],
          },
          {
            submodel: "6430",
            name: "CloudCam Pro External",
            description: "",
            icon: samsung6430,
            features: [],
            encoding: [
              {
                reason: {
                  english: "Not connecting to router",
                  español: "No conecta con router",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no comunica correctamente con router, reconfigurar cámara correctamente de nuevo sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Cámara no enciende led de estado, revisar cámara correctamente cambair de ser necesario, sin coste ni cargos gracias",
              },
            ],
          },
        ],
      },
      {
        model: {
          english: "Arlo",
          español: "Arlo",
        },
        submodels: [
          {
            submodel: "Indoor",
            name: "Essential Indoor",
            sbn_zone: "2040A",
            description: {
              english:
                "Video camera with motion detection and audio alert system. Power supply required.",
              español:
                "Videocamara con sistema de alertas de detección de movimiento y audio. Requiere suministro electrico",
            },
            icon: arloIndoor,
            features: [
              {
                english: "130 degrees Wide viewing angle",
                español: "Amplio ángulo de visión de 130 grados",
              },
              {
                english: "Connection to power supply network.",
                español: "Conexión a la red electrica",
              },
              {
                english: "Built-in Spotlight",
                español: "Proyector incorporado",
              },
              {
                english: "Only internals zones ",
                español: "Solo interiores",
              },
              {
                english: "Black & White Night Vision",
                español: "Vision Nocturna Blanco/Negro",
              },
              {
                english: "No SmarthHub required",
                español: "Sin Estación Base",
              },
              {
                english: "Range - Up to 91 meters without obstacles",
                español: "Alcance	Hasta 91 metros sin obstáculos",
              },
              {
                english: "Frequency - 2.4 GHz",
                español: "Frecuencia 2,4 GHz",
              },
              {
                english: "Resolution - FHD 1080p",
                español: "Resolución FHD 1080p",
              },
              {
                english: "Digital Zoom x12.",
                español: "Zoon digital x12",
              },
            ],
            encoding: [
              {
                reason: {
                  english: "Not connecting to router",
                  español: "No conecta con router",
                },
                type: "1560",
                subtype: "1561",
                text: "Cámara no comunica correctamente con router, reconfigurar cámara correctamente de nuevo sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: " Error in Arlo account email",
                  español: "Error en email de cuenta de arlo",
                },
                type: "1560",
                subtype: "1562",
                text: "Error en email de cuenta de arlo del cliente , corregir y revalidar camara a mail que indique cliente gracias",
              },
            ],
          },
          {
            submodel: "Spotlight",
            name: "Essential Spotlight",
            sbn_zone: "2030B",
            description: {
              english:
                "Wireless weatherproof video camera featuring motion and audio detection alerts. It has solar panels",
              español:
                "Videocamara inalámbrica resistente a la intemperie, dispone de alertas de detección de movimiento y audio. Dispone de placas solares",
            },
            icon: arloSpotlight,
            features: [
              {
                english: "110 degrees Wide viewing angle",
                español: "Amplio ángulo de visión de 110 grados",
              },
              {
                english: "100% Wireless",
                español: "100% Inalámbrico",
              },
              {
                english: "Built-in Spotlight",
                español: "Proyector incorporado",
              },
              {
                english: "For externals zones ",
                español: "Apto para exteriores",
              },
              {
                english: "Colour Night Vision",
                español: "Vision Nocturna a Color",
              },
              {
                english: "SmarthHub required",
                español: "Requiere Estación Base",
              },
              {
                english: "Range - Up to 91 meters without obstacles",
                español: "Alcance	Hasta 91 metros sin obstáculos",
              },
              {
                english: "Frequency - 2.4 GHz",
                español: "Frecuencia 2,4 GHz",
              },
              {
                english: "Resolution - FHD 1080p",
                español: "Resolución FHD 1080p",
              },
              {
                english: "Digital Zoom x12.",
                español: "Zoon digital x12",
              },
            ],
            encoding: [
              {
                reason: {
                  english: "Not connecting to HUB/Internet",
                  español: "No conecta con HUB/Internet",
                },
                type: "1560",
                subtype: "1561",
                text: "Cámara no comunica correctamente con HUB, reconfigurar cámara correctamente de nuevo, reubicar o cambair HUB de ser necesario sin coste ni cargos gracias",
              },
              {
                reason: {
                  english: " Error in Arlo account email",
                  español: "Error en email de cuenta de arlo",
                },
                type: "1560",
                subtype: "1562",
                text: "Error en email de cuenta de arlo del cliente , corregir y revalidar camara a mail que indique cliente gracias",
              },
              {
                reason: {
                  english: "Battery not charging / not working",
                  español: "Bateria no carga / no funciona",
                },
                type: "1560",
                subtype: "1564",
                text: "Cámara bateria no carga se ha comprobado con cliente, cambiar bateria reubicar o cambiar placa solar de ser necesario sin coste ni cargos gracias",
              },
            ],
          },
        ],
      },
      {
        model: {
          english: "Icanteck",
          español: "Icanteck",
        },
        submodels: [
          {
            submodel: "100",
            name: "IcanView 100",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "110",
            name: "IcanView 100",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "Domo",
            name: "Domo",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "Vsc@m",
            name: "Vsc@m",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "Megapixel",
            name: "Megapixel",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "Slim",
            name: "Smart Cam Slim",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "Slim Night",
            name: "Slim Night",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
          {
            submodel: "OutDoor",
            name: "OutDoor",
            description: "",
            features: [],
            encoding: [
              {
                reason: {
                  english: "Waiting for more information",
                  español: "A la espera de mas datos",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
              {
                reason: {
                  english: "The LED is not turning on",
                  español: "No enciende LED",
                },
                type: "1550",
                subtype: "1551",
                text: "Waiting for more informatio",
              },
            ],
          },
        ],
      },
    ],
  },
];

export { cameras };
