//Carrega dados
let database = [
    {
        "país": "Afeganistão",
        "altura_masculina": 1.68,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-afghanistan_1f1e6-1f1eb.png"
    },
    {
        "país": "África Central",
        "altura_masculina": 1.68,
        "altura_feminina": 1.59,
        "link": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/flag-central-african-republic_1f1e8-1f1eb.png"
    },
    {
        "país": "África do Sul",
        "altura_masculina": 1.69,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-central-african-republic_1f1e8-1f1eb.png"
    },
    {
        "país": "Albânia",
        "altura_masculina": 1.74,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-albania_1f1e6-1f1f1.png"
    },
    {
        "país": "Alemanha",
        "altura_masculina": 1.8,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-germany_1f1e9-1f1ea.png"
    },
    {
        "país": "Andorra",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-andorra_1f1e6-1f1e9.png"
    },
    {
        "país": "Angola",
        "altura_masculina": 1.68,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-angola_1f1e6-1f1f4.png"
    },
    {
        "país": "Antígua e Barbuda",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-antigua-barbuda_1f1e6-1f1ec.png"
    },
    {
        "país": "Arábia Saudita",
        "altura_masculina": 1.7,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-saudi-arabia_1f1f8-1f1e6.png"
    },
    {
        "país": "Argélia",
        "altura_masculina": 1.74,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-algeria_1f1e9-1f1ff.png"
    },
    {
        "país": "Argentina",
        "altura_masculina": 1.74,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-argentina_1f1e6-1f1f7.png"
    },
    {
        "país": "Austrália",
        "altura_masculina": 1.79,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-australia_1f1e6-1f1fa.png"
    },
    {
        "país": "Áustria",
        "altura_masculina": 1.78,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-austria_1f1e6-1f1f9.png"
    },
    {
        "país": "Bangladesh",
        "altura_masculina": 1.65,
        "altura_feminina": 1.52,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-bangladesh_1f1e7-1f1e9.png"
    },
    {
        "país": "Bélgica",
        "altura_masculina": 1.79,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-belgium_1f1e7-1f1ea.png"
    },
    {
        "país": "Bermuda",
        "altura_masculina": 1.79,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-bermuda_1f1e7-1f1f2.png"
    },
    {
        "país": "Bielorrússia",
        "altura_masculina": 1.78,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-belarus_1f1e7-1f1fe.png"
    },
    {
        "país": "Bolívia",
        "altura_masculina": 1.68,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-bolivia_1f1e7-1f1f4.png"
    },
    {
        "país": "Bósnia e Herzegovina",
        "altura_masculina": 1.82,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-bosnia-herzegovina_1f1e7-1f1e6.png"
    },
    {
        "país": "Brasil",
        "altura_masculina": 1.75,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-brazil_1f1e7-1f1f7.png"
    },
    {
        "país": "Brunei",
        "altura_masculina": 1.66,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-brunei_1f1e7-1f1f3.png"
    },
    {
        "país": "Bulgária",
        "altura_masculina": 1.73,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-bulgaria_1f1e7-1f1ec.png"
    },
    {
        "país": "Burundi",
        "altura_masculina": 1.67,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-burundi_1f1e7-1f1ee.png"
    },
    {
        "país": "Camarões",
        "altura_masculina": 1.71,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-cameroon_1f1e8-1f1f2.png"
    },
    {
        "país": "Camboja",
        "altura_masculina": 1.65,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-cambodia_1f1f0-1f1ed.png"
    },
    {
        "país": "Canadá",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-canada_1f1e8-1f1e6.png"
    },
    {
        "país": "Catar",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-qatar_1f1f6-1f1e6.png"
    },
    {
        "país": "Cazaquistão",
        "altura_masculina": 1.74,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-kazakhstan_1f1f0-1f1ff.png"
    },
    {
        "país": "Chade",
        "altura_masculina": 1.71,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-chad_1f1f9-1f1e9.png"
    },
    {
        "país": "Chile",
        "altura_masculina": 1.73,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-chile_1f1e8-1f1f1.png"
    },
    {
        "país": "China",
        "altura_masculina": 1.75,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-china_1f1e8-1f1f3.png"
    },
    {
        "país": "Colombia",
        "altura_masculina": 1.71,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-colombia_1f1e8-1f1f4.png"
    },
    {
        "país": "Coréia do Norte",
        "altura_masculina": 1.74,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-north-korea_1f1f0-1f1f5.png"
    },
    {
        "país": "Coréia do Sul",
        "altura_masculina": 1.75,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-south-korea_1f1f0-1f1f7.png"
    },
    {
        "país": "Costa do Marfim",
        "altura_masculina": 1.68,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-cote-divoire_1f1e8-1f1ee.png"
    },
    {
        "país": "Costa Rica",
        "altura_masculina": 1.74,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-costa-rica_1f1e8-1f1f7.png"
    },
    {
        "país": "Croácia",
        "altura_masculina": 1.81,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-croatia_1f1ed-1f1f7.png"
    },
    {
        "país": "Cuba",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-cuba_1f1e8-1f1fa.png"
    },
    {
        "país": "Dinamarca",
        "altura_masculina": 1.82,
        "altura_feminina": 1.69,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-denmark_1f1e9-1f1f0.png"
    },
    {
        "país": "Dominica",
        "altura_masculina": 1.8,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-dominica_1f1e9-1f1f2.png"
    },
    {
        "país": "Egito",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-egypt_1f1ea-1f1ec.png"
    },
    {
        "país": "El Salvador",
        "altura_masculina": 1.7,
        "altura_feminina": 1.56,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-el-salvador_1f1f8-1f1fb.png"
    },
    {
        "país": "Emirados Árabes Unidos",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-united-arab-emirates_1f1e6-1f1ea.png"
    },
    {
        "país": "Equador",
        "altura_masculina": 1.67,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-ecuador_1f1ea-1f1e8.png"
    },
    {
        "país": "Eritrea",
        "altura_masculina": 1.7,
        "altura_feminina": 1.57,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-eritrea_1f1ea-1f1f7.png"
    },
    {
        "país": "Eslováquia",
        "altura_masculina": 1.81,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-slovakia_1f1f8-1f1f0.png"
    },
    {
        "país": "Eslovênia",
        "altura_masculina": 1.81,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-slovenia_1f1f8-1f1ee.png"
    },
    {
        "país": "Espanha",
        "altura_masculina": 1.76,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-spain_1f1ea-1f1f8.png"
    },
    {
        "país": "Estados Unidos",
        "altura_masculina": 1.77,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-united-states_1f1fa-1f1f8.png"
    },
    {
        "país": "Estônia",
        "altura_masculina": 1.82,
        "altura_feminina": 1.68,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-estonia_1f1ea-1f1ea.png"
    },
    {
        "país": "Etiópia",
        "altura_masculina": 1.68,
        "altura_feminina": 1.57,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-ethiopia_1f1ea-1f1f9.png"
    },
    {
        "país": "Filipinas",
        "altura_masculina": 1.65,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-philippines_1f1f5-1f1ed.png"
    },
    {
        "país": "Finlândia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-finland_1f1eb-1f1ee.png"
    },
    {
        "país": "França",
        "altura_masculina": 1.78,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-france_1f1eb-1f1f7.png"
    },
    {
        "país": "Geórgia",
        "altura_masculina": 1.75,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-georgia_1f1ec-1f1ea.png"
    },
    {
        "país": "Granada",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-grenada_1f1ec-1f1e9.png"
    },
    {
        "país": "Grécia",
        "altura_masculina": 1.79,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-greece_1f1ec-1f1f7.png"
    },
    {
        "país": "Guatemala",
        "altura_masculina": 1.64,
        "altura_feminina": 1.51,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-guatemala_1f1ec-1f1f9.png"
    },
    {
        "país": "Guiné Equatorial",
        "altura_masculina": 1.67,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-equatorial-guinea_1f1ec-1f1f6.png"
    },
    {
        "país": "Haiti",
        "altura_masculina": 1.72,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-haiti_1f1ed-1f1f9.png"
    },
    {
        "país": "Holanda",
        "altura_masculina": 1.84,
        "altura_feminina": 1.7,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-netherlands_1f1f3-1f1f1.png"
    },
    {
        "país": "Hong Kong",
        "altura_masculina": 1.74,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-hong-kong-sar-china_1f1ed-1f1f0.png"
    },
    {
        "país": "Hungria",
        "altura_masculina": 1.76,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-hungary_1f1ed-1f1fa.png"
    },
    {
        "país": "Iémen",
        "altura_masculina": 1.63,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-yemen_1f1fe-1f1ea.png"
    },
    {
        "país": "Ilhas Cook",
        "altura_masculina": 1.78,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-cook-islands_1f1e8-1f1f0.png"
    },
    {
        "país": "Ilhas Maurício",
        "altura_masculina": 1.73,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-mauritius_1f1f2-1f1fa.png"
    },
    {
        "país": "Índia",
        "altura_masculina": 1.66,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-india_1f1ee-1f1f3.png"
    },
    {
        "país": "Indonésia",
        "altura_masculina": 1.66,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-indonesia_1f1ee-1f1e9.png"
    },
    {
        "país": "Irã",
        "altura_masculina": 1.75,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-iran_1f1ee-1f1f7.png"
    },
    {
        "país": "Irlanda",
        "altura_masculina": 1.79,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-ireland_1f1ee-1f1ea.png"
    },
    {
        "país": "Islândia",
        "altura_masculina": 1.81,
        "altura_feminina": 1.68,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-iceland_1f1ee-1f1f8.png"
    },
    {
        "país": "Israel",
        "altura_masculina": 1.76,
        "altura_feminina": 1.62,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-israel_1f1ee-1f1f1.png"
    },
    {
        "país": "Itália",
        "altura_masculina": 1.74,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-italy_1f1ee-1f1f9.png"
    },
    {
        "país": "Japão",
        "altura_masculina": 1.72,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-japan_1f1ef-1f1f5.png"
    },
    {
        "país": "Kiribati",
        "altura_masculina": 1.7,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-kiribati_1f1f0-1f1ee.png"
    },
    {
        "país": "Laos",
        "altura_masculina": 1.62,
        "altura_feminina": 1.53,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-laos_1f1f1-1f1e6.png"
    },
    {
        "país": "Letônia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.68,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-latvia_1f1f1-1f1fb.png"
    },
    {
        "país": "Líbano",
        "altura_masculina": 1.78,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-lebanon_1f1f1-1f1e7.png"
    },
    {
        "país": "Lituânia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-lithuania_1f1f1-1f1f9.png"
    },
    {
        "país": "Luxemburgo",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-luxembourg_1f1f1-1f1fa.png"
    },
    {
        "país": "Macedônia do Norte",
        "altura_masculina": 1.76,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-north-macedonia_1f1f2-1f1f0.png"
    },
    {
        "país": "Madagascar",
        "altura_masculina": 1.65,
        "altura_feminina": 1.53,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-madagascar_1f1f2-1f1ec.png"
    },
    {
        "país": "Malaísa",
        "altura_masculina": 1.68,
        "altura_feminina": 1.57,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-malaysia_1f1f2-1f1fe.png"
    },
    {
        "país": "Maldivas",
        "altura_masculina": 1.68,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-maldives_1f1f2-1f1fb.png"
    },
    {
        "país": "Marrocos",
        "altura_masculina": 1.75,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-morocco_1f1f2-1f1e6.png"
    },
    {
        "país": "México",
        "altura_masculina": 1.7,
        "altura_feminina": 1.57,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-mexico_1f1f2-1f1fd.png"
    },
    {
        "país": "Micronésia",
        "altura_masculina": 1.69,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-micronesia_1f1eb-1f1f2.png"
    },
    {
        "país": "Mongólia",
        "altura_masculina": 1.7,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-mongolia_1f1f2-1f1f3.png"
    },
    {
        "país": "Montenegro",
        "altura_masculina": 1.83,
        "altura_feminina": 1.7,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-montenegro_1f1f2-1f1ea.png"
    },
    {
        "país": "Myanmar",
        "altura_masculina": 1.66,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-myanmar-burma_1f1f2-1f1f2.png"
    },
    {
        "país": "Nauru",
        "altura_masculina": 1.69,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-nauru_1f1f3-1f1f7.png"
    },
    {
        "país": "Nepal",
        "altura_masculina": 1.64,
        "altura_feminina": 1.52,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-nepal_1f1f3-1f1f5.png"
    },
    {
        "país": "Nigéria",
        "altura_masculina": 1.7,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-nigeria_1f1f3-1f1ec.png"
    },
    {
        "país": "Niue",
        "altura_masculina": 1.77,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-nigeria_1f1f3-1f1ec.png"
    },
    {
        "país": "Noruega",
        "altura_masculina": 1.8,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-norway_1f1f3-1f1f4.png"
    },
    {
        "país": "Nova Zelândia",
        "altura_masculina": 1.78,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-new-zealand_1f1f3-1f1ff.png"
    },
    {
        "país": "Palau",
        "altura_masculina": 1.7,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-palau_1f1f5-1f1fc.png"
    },
    {
        "país": "Paquistão",
        "altura_masculina": 1.67,
        "altura_feminina": 1.54,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-pakistan_1f1f5-1f1f0.png"
    },
    {
        "país": "Polinésia Francesa",
        "altura_masculina": 1.78,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-french-polynesia_1f1f5-1f1eb.png"
    },
    {
        "país": "Polônia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-poland_1f1f5-1f1f1.png"
    },
    {
        "país": "Porto Rico",
        "altura_masculina": 1.79,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-puerto-rico_1f1f5-1f1f7.png"
    },
    {
        "país": "Portugal",
        "altura_masculina": 1.74,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-portugal_1f1f5-1f1f9.png"
    },
    {
        "país": "Quênia",
        "altura_masculina": 1.7,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-kenya_1f1f0-1f1ea.png"
    },
    {
        "país": "Reino Unido",
        "altura_masculina": 1.78,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-united-kingdom_1f1ec-1f1e7.png"
    },
    {
        "país": "República Democrática do Congo",
        "altura_masculina": 1.68,
        "altura_feminina": 1.56,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-congo-kinshasa_1f1e8-1f1e9.png"
    },
    {
        "país": "República Tcheca",
        "altura_masculina": 1.81,
        "altura_feminina": 1.68,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-czechia_1f1e8-1f1ff.png"
    },
    {
        "país": "Romênia",
        "altura_masculina": 1.77,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-romania_1f1f7-1f1f4.png"
    },
    {
        "país": "Rússia",
        "altura_masculina": 1.76,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-russia_1f1f7-1f1fa.png"
    },
    {
        "país": "Samoa",
        "altura_masculina": 1.73,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-samoa_1f1fc-1f1f8.png"
    },
    {
        "país": "Samoa Americana",
        "altura_masculina": 1.77,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-american-samoa_1f1e6-1f1f8.png"
    },
    {
        "país": "Santa Lúcia",
        "altura_masculina": 1.76,
        "altura_feminina": 1.65,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-st-lucia_1f1f1-1f1e8.png"
    },
    {
        "país": "Senegal",
        "altura_masculina": 1.75,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-senegal_1f1f8-1f1f3.png"
    },
    {
        "país": "Sérvia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.68,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-serbia_1f1f7-1f1f8.png"
    },
    {
        "país": "Singapura",
        "altura_masculina": 1.73,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-singapore_1f1f8-1f1ec.png"
    },
    {
        "país": "Sri Lanka",
        "altura_masculina": 1.67,
        "altura_feminina": 1.55,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-sri-lanka_1f1f1-1f1f0.png"
    },
    {
        "país": "Sudão",
        "altura_masculina": 1.71,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-sudan_1f1f8-1f1e9.png"
    },
    {
        "país": "Suécia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.67,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-sweden_1f1f8-1f1ea.png"
    },
    {
        "país": "Suíça",
        "altura_masculina": 1.79,
        "altura_feminina": 1.64,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-switzerland_1f1e8-1f1ed.png"
    },
    {
        "país": "Tailândia",
        "altura_masculina": 1.71,
        "altura_feminina": 1.59,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-thailand_1f1f9-1f1ed.png"
    },
    {
        "país": "Taiwan",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-taiwan_1f1f9-1f1fc.png"
    },
    {
        "país": "Timor-Leste",
        "altura_masculina": 1.59,
        "altura_feminina": 1.52,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-timor-leste_1f1f9-1f1f1.png"
    },
    {
        "país": "Tonga",
        "altura_masculina": 1.75,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-tonga_1f1f9-1f1f4.png"
    },
    {
        "país": "Toquelau",
        "altura_masculina": 1.76,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-tokelau_1f1f9-1f1f0.png"
    },
    {
        "país": "Turquia",
        "altura_masculina": 1.76,
        "altura_feminina": 1.61,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-turkey_1f1f9-1f1f7.png"
    },
    {
        "país": "Tuvalu",
        "altura_masculina": 1.71,
        "altura_feminina": 1.63,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-tuvalu_1f1f9-1f1fb.png"
    },
    {
        "país": "Ucrânia",
        "altura_masculina": 1.8,
        "altura_feminina": 1.66,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-ukraine_1f1fa-1f1e6.png"
    },
    {
        "país": "Venezuela",
        "altura_masculina": 1.73,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-venezuela_1f1fb-1f1ea.png"
    },
    {
        "país": "Vietnã",
        "altura_masculina": 1.68,
        "altura_feminina": 1.58,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-vietnam_1f1fb-1f1f3.png"
    },
    {
        "país": "Zimbábue",
        "altura_masculina": 1.7,
        "altura_feminina": 1.6,
        "link": "https://em-content.zobj.net/thumbs/240/apple/354/flag-zimbabwe_1f1ff-1f1fc.png"
    }
]

//Cria variável para selecionar <select>
let sexo = document.querySelector( 'select' )

//Cria evento para quando opção "sexo" for escolhida no clique
sexo.addEventListener('change', validaSexo)

//Função para guardar a opção "sexo" selecionada
function validaSexo(){
    let escolhaSexo = sexo.value

    calcular(escolhaSexo)
    histograma(escolhaSexo)
    }

//Cria variável para pegar a altura digitada em <input>
let altura = document.querySelector( 'input' )

//Cria evento para quando for digitado algo no input da altura
altura.addEventListener('change', validaAltura)

//Função para guardar altura
function validaAltura(){

    //Cria variável para pegar string digitada
    let valorAltura = altura.value

    //Converte a string para float
    valorAltura = parseFloat(valorAltura)

    //Se a pessoa digital algo NaN, o código ignora
    if (valorAltura > 0){
        calcular(valorAltura)
        mostraTexto(valorAltura)
    }
}


//Função que pega resposta sexo +  altura e criar variáveis que serão usadas
function calcular(escolhaSexo, valorAltura){

    document.querySelector('#flags').innerHTML = ""
    //Loop pegando a database e passando por cada dict
    for (let data of database){

        //Se é masculino
        if (escolhaSexo == data.altura_masculina){
            //Cria variável com países
            let pais = data.país
            //Cria variável com link para imagem
            let link = data.link
            mostraFlags(pais, link)

            //Se é feminino
            }else if (escolhaSexo == data.altura_feminina){
                //Cria variável com países
                let pais = data.país
                //Cria variável com link para imagem
                let link = data.link
                mostraFlags(pais, link)
            }
        }
    }

//Função para mostrar a resposta ao acionar change na altura
function mostraDiv() {
    //Cria variável para selecionar as divs answer e histograma 
    let mostraDiv = document.getElementsByClassName('mostra-div')

    //Torna a opacidade das divs 100%
    for (let div of mostraDiv){
        div.style.opacity = 1
    }
 }

//Função para agrupar as bandeiras dos país com mesma altura média
function mostraFlags(pais, link){

    //Cria elemento img
    let img = document.createElement("IMG")
    //Cria src com a variável link
    img.src = link

    //Cria atributos para que apareça nome do país ao passar mouse sobre bandeiras
    img.setAttribute("data-toggle", "tooltip")
    img.setAttribute ("data-html", "true")
    img.setAttribute ("title", pais)

    //Define largura e altura
    img.style.width = "2.5rem"
    img.style.height = "2.5rem"

    //Pega o id="flags" e adiciona elementos-filhos img
    document.getElementById('flags').appendChild(img)
}

//Função para personalizar texto da resposta e mostrá-los
function mostraTexto(valorAltura){

    //Insere altura digitada na resposta
    let alturaResposta = document.querySelector( 'output[value="altura-resposta"]')

    //Insere na resposta o valor da altura (estabelecendo 2 casas decimais)
    alturaResposta.innerText = valorAltura.toFixed(2)

    //Cria variável que seleciona output com valor "altura-compara"
    let compara = document.querySelector('output[value="altura-compara"]')

    //Cria variável que seleciona output value="altura"
    let sexoResposta = document.querySelector('output[value="altura"]')

    //Cria variável que seleciona output value="genero"
    let mediaBrasil = document.querySelector('output[value="genero"]')

    //Se o valor inserido em 'sexo' for masculino...
    if (sexo.value == "altura_masculina"){

        //Se o valor do input for maior que a média
        if (valorAltura > 1.75){
            //Insere texto "mais alto que"
            compara.innerText = "mais alto que"
        //Se o valor do input for igual a média
        }if (valorAltura == 1.75){
            //Insere texto "igual"
            compara.innerText = "igual"
        //Ou se o valor do input for menor que a média
        }else if(valorAltura < 1.75){
            //Insere texto "mais baixo que"
            compara.innerText = "mais baixo que"
        }
   
        //Insere a média de altura masculina do Brasil
        sexoResposta.innerText = "1.75"

        //Insere a palavra "masculina"
        mediaBrasil.innerText = "masculina"

        //Cria variável para achar alturas da database que coincidem com o valor inserido (input)
        let resultMasc = database.find( data => data.altura_masculina === valorAltura)

        //Se não coincidir (aparece undefined)
        if(resultMasc === undefined){
            //Cria variável que seleciona .answer
            let answer = document.querySelector(".answer")
            //Insere resposta de que não localizou
            answer.innerText = "Não encontramos sua altura entre as médias dos países."
        }
    //Se o valor inserido em 'sexo' for feminino
    }if (sexo.value == "altura_feminina"){

        //Se o valor do input for maior que a média
        if (valorAltura > 1.62){
            //Insere texto "mais alto que"
            compara.innerText = "mais alta que"
        //Se o valor do input for igual a média
        }if (valorAltura == 1.62){
            //Insere texto "igual"
            compara.innerText = "igual"
        //Ou se o valor do input for menor que a média
        }else if(valorAltura < 1.62){
            //Insere texto "mais baixo que"
            compara.innerText = "mais baixa que"
        }

        //Insere a média de altura feminina do Brasil
        sexoResposta.innerText = "1.62"

        //Insere a palavra "feminina"
        mediaBrasil.innerText = "feminina"

        //Cria variável para achar alturas da database que coincidem com o valor inserido (input)
        resultFem = database.find( data => data.altura_feminina === valorAltura)

        //Se não coincidir (aparece undefined)
        if(resultFem === undefined){
            //Cria variável que seleciona .answer
            let answer = document.querySelector(".answer")
             //Insere resposta de que não localizou
            answer.innerText = "Não encontramos sua altura entre as médias dos países."
        }
    }
}


//Função mostra histograma feminino ou masculino
function histograma(escolhaSexo){

    //Cria variável que seleciona .gender
    let tituloHistograma = document.querySelector(".gender")
    //Cria variável que seleciona .flags-list
    let listaHistograma = document.querySelector(".flags-list")

   // Se o "sexo" selecionado for masculino
    if (escolhaSexo == "altura_masculina"){

        //Insere o título formatado para masculino
        tituloHistograma.innerText = "Média de altura masculina"

        //Cria lista de alturas
        let listaValores = database.map(function (data){
            return data.altura_masculina
        })

        //Cria lista de valores únicos (baseado no listaValores)
        let listaValoresUnicos = listaValores.filter(function(d, i, a) {
            return a.indexOf(d) == i 
        })

        //Ordena lista
        listaValoresUnicos.sort((a,b) => a-b)

        //Para cada valor unico (altura) da lista 
        for(let valoresUnicos of listaValoresUnicos){
            //Cria uma div
            let div = document.createElement("div")
            //Insere atributo data na div e preencha com a altura
            div.dataset.altura = valoresUnicos
            //Cria um span
            let span = document.createElement("span")
            //Insere nesse span cada valor único (altura) - e especifica com 2 casas decimais
            span.innerText = valoresUnicos.toFixed(2)
            //Insere esse span na div criada
            div.appendChild(span)
            //Insere essa div na div com classe gender
            listaHistograma.appendChild(div)
        }

        //Para cada data da base de dados
        for (let data of database){
            //Cria variável para selecionar link das bandeiras
            let bandeiras = data.link
            //Cria variável para selecionar altura_masculina
            let alturaMasc = data.altura_masculina
            //Cria variável para selecionar a div data-altura com valor da altura
            let div = document.querySelector("[data-altura='"+alturaMasc+"']")

            //Cria elemento img, coloca link das bandeiras e insere no HTML
            let imgHist = document.createElement("img")
            //Insere atributo src com link das bandeiras
            imgHist.src = bandeiras

            //Cria atributos para que apareça nome do país ao passar mouse sobre bandeiras
            imgHist.setAttribute("data-toggle", "tooltip")
            imgHist.setAttribute ("data-html", "true")
            imgHist.setAttribute ("title", data.país)

            //Insere css de largura e altura
            imgHist.style.width = "1.5rem"
            imgHist.style.height = "1.5rem"
            //Insere na div a imagem
            div.appendChild(imgHist)

        // Se o "sexo" selecionado for feminino
        }
    }else if (escolhaSexo == "altura_feminina"){
        //Insere o título formatado para feminino
        tituloHistograma.innerText = "Média de altura feminina"

        //Cria lista de alturas
        let listaValores = database.map(function (data){
            return data.altura_feminina
        })

        //Cria lista de valores únicos (baseado no listaValores)
        let listaValoresUnicos = listaValores.filter(function(d, i, a) {
            return a.indexOf(d) == i 
        })

        //Ordena lista
        listaValoresUnicos.sort((a,b) => a-b)

        //Para cada valor unico (altura) da lista 
        for(let valoresUnicos of listaValoresUnicos){
            //Cria uma div
            let div = document.createElement("div")
            //Insere atributo data na div e preencha com a altura
            div.dataset.altura = valoresUnicos
            //Cria um span
            let span = document.createElement("span")
            //Insere nesse span cada valor único (altura) - e especifica com 2 casas decimais
            span.innerText = valoresUnicos.toFixed(2)
            //Insere esse span na div criada
            div.appendChild(span)
            //Insere essa div na div com classe gender
            listaHistograma.appendChild(div)
        }

        //Para cada data da base de dados
        for (let data of database){
            //Cria variável para selecionar link das bandeiras
            let bandeiras = data.link
            //Cria variável para selecionar altura_masculina
            let alturaFem = data.altura_feminina
            //Cria variável para selecionar a div data-altura com valor da altura
            let div = document.querySelector("[data-altura='"+alturaFem+"']")

            //Cria elemento img, coloca link das bandeiras e insere no HTML
            let imgHist = document.createElement("img")
            //Insere atributo src com link das bandeiras
            imgHist.src = bandeiras
            
            //Cria atributos para que apareça nome do país ao passar mouse sobre bandeiras
            imgHist.setAttribute("data-toggle", "tooltip")
            imgHist.setAttribute ("data-html", "true")
            imgHist.setAttribute ("title", data.país)

            //Insere css de largura e altura para a imagem
            imgHist.style.width = "1.5rem"
            imgHist.style.height = "1.5rem"
            //Insere a imagem na div
            div.appendChild(imgHist)
        }
    }   
}

//Cria variável para selecionar botão
let btn = document.querySelector("button")
//Cria um evento de clique, chamando a função limpar
btn.addEventListener('click', limpar)

//Função para resetar seleções
function limpar(sexo, altura){
    //Dá o relad na página, limpando todos os campos
    location.reload()
}
