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
          },
          {
            submodel: "6415",
            name: "CloudCam N1",
            description: "",
            icon: samsungN1,
            features: [],
          },
          {
            submodel: "6110",
            name: "CloudCam Mini",
            description: "",
            icon: samsung6110,
            features: [],
          },
          {
            submodel: "6430",
            name: "CloudCam Pro External",
            description: "",
            icon: samsung6430,
            features: [],
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
            ],
          },
          {
            submodel: "Spotlight",
            name: "Essential Spotlight",
            description: {
              english:
                "Wireless weatherproof video camera featuring motion and audio detection alerts. It has solar panels",
              español:
                "Videocamara inalámbrica resistente a la intemperie, dispone de alertas de detección de movimiento y audio. Dispone de placas solares",
            },
            icon: arloSpotlight,
            features: [
              {
                english: "130 degrees Wide viewing angle",
                español: "Amplio ángulo de visión de 130 grados",
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
          },
          {
            submodel: "110",
            name: "IcanView 100",
            description: "",
            features: [],
          },
          {
            submodel: "Domo",
            name: "Domo",
            description: "",
            features: [],
          },
          {
            submodel: "Vsc@m",
            name: "Vsc@m",
            description: "",
            features: [],
          },
          {
            submodel: "Megapixel",
            name: "Megapixel",
            description: "",
            features: [],
          },
          {
            submodel: "Slim",
            name: "Smart Cam Slim",
            description: "",
            features: [],
          },
          {
            submodel: "Slim Night",
            name: "Slim Night",
            description: "",
            features: [],
          },
          {
            submodel: "OutDoor",
            name: "OutDoor",
            description: "",
            features: [],
          },
        ],
      },
    ],
  },
];

export { cameras };
