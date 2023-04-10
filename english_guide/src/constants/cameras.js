import {
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
            icon: "",
            features: [],
          },
          {
            submodel: "6415",
            name: "CloudCam N1",
            description: "",
            icon: "",
            features: [],
          },
          {
            submodel: "6110",
            name: "CloudCam Mini",
            description: "",
            icon: "",
            features: [],
          },
          {
            submodel: "6430",
            name: "CloudCam Pro External",
            description: "",
            icon: "",
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
            description: "",
            icon: arloIndoor,
            features: [],
          },
          {
            submodel: "Spotlight",
            name: "Essential Spotlight",
            description: "",
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
