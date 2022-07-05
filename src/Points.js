import { v4 as uuidv4 } from "uuid";

const Points = [
    {
        id: uuidv4(),
        situation: "PLATEAU DOKUI AZUR FACE PHARMACIE AZUR",
        coords: [ 5.39965797697602, -4.006345845480926],
        contact: "07 77 99 23 00",
        zone: "ABOBO DOKUI",
    },
    {
        id: uuidv4(),
        situation: "ESPACE SERVICE MOOV CENTER DJIBI FRED EPOPEE",
        coords: [5.392911034954644,-3.9759138031511636 ],
        contact: "01 03 26 34 72",
        zone: "COCODY ANGRE",
    },

    {
        id: uuidv4(),
        situation: "ANGRÉ CHÂTEAU",
        coords: [ 5.4198951299049325, -3.9833564919877187],
        contact: "07 07 06 40 36",
        zone: "COCODY ANGRÉ",
    },

    {
        id: uuidv4(),
        situation: "ESPLANADE SANTA MARIA SANTA MARIA / FACE MOSQUEE",
        coords: [5.382902925100022, -3.9929782704704855],
        contact: "07 47 62 23 71",
        zone: "COCODY II PLATEAUX",
    },

    {
        id: uuidv4(),
        situation: "GENDARMERIE",
        coords: [5.4265139789414585, -4.019863516187363],
        contact: "07 47 62 24 21",
        zone: "ABOBO",
    },

    {
        id: uuidv4(),
        situation: "SAMANKE EN FACE DU COLLEGE LES ORCHIDES",
        coords: [5.414546034334895, -4.005044755373099],
        contact: "01 02 71 41 46",
        zone: "ABOBO",
    },

    {
        id: uuidv4(),
        situation: "A COTE DU LYCEE MERMOZ",
        coords: [5.341007837403063, -3.999496224405354],
        contact: "07 09 23 34 49",
        zone: "COCODY",
    },
];

export default Points;