import React from "react";

// Images
import entreprenadImg from "./images/entreprenad.jpeg";
import mobilkranImg from "./images/mobilkran.jpg";
import designImg from "./images/design.jpeg";
import ditthusImg from "./images/ditthus.jpeg";
import ansokanImg from "./images/ansokan.jpg";
import leveransImg from "./images/leverans.jpg";

// Icons
import BuildIcon from "@material-ui/icons/Build";

function importProjectSpecificPhotos(r) {
  return r.keys().map(r);
}

const images = importProjectSpecificPhotos(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);

const GO_TO_REPOSITORY = "Go to repository",
  GO_TO_WEBSITE = "Go to website",
  GO_TO_REPOSITORY_FRONT_END = "Go to repository (Front End)",
  GO_TO_REPOSITORY_BACK_END = "Go to repository (Back End)",
  GO_TO_SOURCE_CODE = "Gå till källkod";

export const photosByTtitle = {
  vallby: [
    {
      src: leveransImg,
      width: 4,
      height: 4,
    },
    {
      src: leveransImg,
      width: 5,
      height: 4,
    },
  ],
};

const populateWorkWithPhotos = (numberOfPhotos, workTitle) => {
  const photos = [];
  for (let i = 1; i <= numberOfPhotos; i++) {
    const photo = {
      src: require(`./images/${workTitle}/${workTitle}_${i}.jpg`),
      width: 4,
      height: 4,
    };
    photos.push(photo);
  }

  return photos;
};

export const previousWork = [
  {
    title: "Billdal",
    href: "billdal",
    subheader: "Lorem ipsum",
    text: "10 rader text",
    listItems: ["Slutpris: 400 000 kr"],
    image: ansokanImg,
    photos: populateWorkWithPhotos(20, "Billdal"),
  },
  {
    title: "Ramsdal",
    href: "ramsdal",
    subheader: "Lorem ipsum",
    text: "10 rader text",
    listItems: ["Slutpris: 400 000 kr"],
    image: ansokanImg,
    photos: populateWorkWithPhotos(20, "Ramsdal"),
  },
];

export const competenceAreas = {
  design: {
    image: designImg,
    title: "Ditt behov",
    text:
      "Genom vårt erbjudande på attefallsfabrik.se tar vi fram en modell som passar dina behov och er miljö. Jag hjälper er att rita upp huset tills ni är nöjda med vår arkitekt och tar fram samtliga dokument du som kund behöver för att göra ett tryggt val. Konstruktionsritning, planritning, fasadritning, grundritning och specifikation i komplement till din offert.",
    Icon: BuildIcon,
    order: 1,
  },
  ansökan: {
    image: ansokanImg,
    title: "Ansökan",
    text:
      "Genom ett möte tillsammans med dig som kund vid din tomt kan jag lättare se vad din unika miljö kring konstruktion, placering och utförande av grundarbete hade varit mest komfortabelt att projektera. Hjälper dig sedan att ta fram alla handlingar entreprenadfirman behöver och ser till så att alla steg i processen blir korrekt utförda.",
    Icon: BuildIcon,
    order: 2,
  },
  entreprenad: {
    image: entreprenadImg,
    title: "Entreprenad",
    text:
      "Genom ett möte tillsammans med dig som kund vid din tomt kan jag lättare se vad din unika miljö kring konstruktion, placering och utförande av grundarbete hade varit mest komfortabelt att projektera. Hjälper dig sedan att ta fram alla handlingar entreprenadfirman behöver och ser till så att alla steg i processen blir korrekt utförda.",
    Icon: BuildIcon,
    order: 3,
  },
  mobilkran: {
    image: mobilkranImg,
    title: "Mobilkran",
    text:
      "Med många kontakter i branschen och ett flertal leveranser i ryggen kan jag hjälpa dig att se över placering av vilken mobilkran som passar bäst och genom förhandling och även  kunna erbjuda ett attraktivt slutpris till dig som slutkund.",
    Icon: BuildIcon,
    order: 4,
  },
  leverans: {
    image: leveransImg,
    title: "Leverans",
    text:
      "Genom vårt erbjudande på attefallsfabrik.se tar vi fram en modell som passar dina behov och er miljö. Jag hjälper er att rita upp huset tills ni är nöjda med vår arkitekt och tar fram samtliga dokument du som kund behöver för att göra ett tryggt val. Konstruktionsritning, planritning, fasadritning, grundritning och specifikation i komplement till din offert.",
    Icon: BuildIcon,
    order: 5,
  },
  ditthus: {
    image: ditthusImg,
    title: "Ditt hus",
    text:
      "Genom vårt erbjudande på attefallsfabrik.se tar vi fram en modell som passar dina behov och er miljö. Jag hjälper er att rita upp huset tills ni är nöjda med vår arkitekt och tar fram samtliga dokument du som kund behöver för att göra ett tryggt val. Konstruktionsritning, planritning, fasadritning, grundritning och specifikation i komplement till din offert.",
    Icon: BuildIcon,
    order: 6,
  },
};

export const about = {
  introduction: `
  I develop front- and back end services with mainly JavaScript, HTML5 and CSS3 together with it's belonging frameworks and libraries.
  I enjoy every aspect of delivering a runtime efficient application in combination with beautiful, smooth UI/UX.`,
  text: (
    <>
      <span>
        &nbsp;Mitt namn är Hannes Nauber och jag har en bred kompetens inom
        affärsutveckling och olika försäljnings ärenden från olika
        anställningar.
      </span>
      <br />
      <br />

      <span>
        Jag är är oerhört glad att få arbeta med fastighetsutveckling inom olika
        områden och att tillsammans med min vän Lars Dyrendahl driva
        Attefallsfabrik.se. Genom vårt varumärke och vår fabrik levererar vi
        nyckelfärdiga Attefallshus, Fritidshus och Modulhus runt om i hela
        Sverige.
      </span>
    </>
  ),
};
