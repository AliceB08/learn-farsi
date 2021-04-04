import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Word } from "../../components";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

const WordList = (props) => {
  const classes = useStyles();

  const words = [
    { french: "Homme", persian: "Mard", arabic: "مرد", nature: "nom" },
    { french: "Eau", persian: "Âb", arabic: "اب", nature: "nom" },
    { french: "Marché", persian: "Bâzâr", arabic: "بازار", nature: "nom" },
    { french: "Garçon", persian: "Pesar", arabic: "پسر", nature: "nom" },
    { french: "Fils", persian: "Pesar", arabic: "پسر", nature: "nom" },
    { french: "Père", persian: "Pedar", arabic: "پدر", nature: "nom" },
    { french: "Pain", persian: "Nân", arabic: "نان", nature: "nom" },
    { french: "Ami", persian: "Doust", arabic: "دوست", nature: "nom" },
    { french: "Boutique", persian: "Dokkân", arabic: "دکان", nature: "nom" },
    { french: "Femme", persian: "Zan", arabic: "زن", nature: "nom" },
    { french: "Pomme", persian: "Sib", arabic: "سیب", nature: "nom" },
    { french: "Maison", persian: "Manzel", arabic: "منزل", nature: "nom" },
    { french: "Porte", persian: "Dar", arabic: "در", nature: "nom" },
    { french: "Chaud", persian: "Garm", arabic: "گرم", nature: "adjectif" },
    { french: "Froid", persian: "Sard", arabic: "سرد", nature: "adjectif" },
    { french: "Peu", persian: "Kam", arabic: "کم", nature: "adverbe" },
    { french: "Où", persian: "Kodjâ", arabic: "کجا", nature: "adverbe" },
    { french: "À", persian: "Bé", arabic: "به", nature: "préposition" },
    { french: "Dans", persian: "Dar", arabic: "در", nature: "préposition" },
    { french: "Avec", persian: "Bâ", arabic: "با", nature: "préposition" },
    { french: "Et", persian: "Va / o", arabic: "و", nature: "conjonction" },
    { french: "Un", persian: "Yek", arabic: "یک", nature: "nombre" },
    { french: "Deux", persian: "Do", arabic: "دو", nature: "nombre" },
    { french: "Trois", persian: "Sé", arabic: "سه", nature: "nombre" },
    { french: "Quatre", persian: "Chahâr", arabic: "چهار", nature: "nombre" },
    { french: "Cinq", persian: "Panj", arabic: "پنج", nature: "nombre" },
    { french: "Six", persian: "Chéch", arabic: "شش", nature: "nombre" },
    { french: "Sept", persian: "Haft", arabic: "هفت", nature: "nombre" },
    { french: "Huit", persian: "Hacht", arabic: "هشت", nature: "nombre" },
    { french: "Neuf", persian: "Noh", arabic: "نه", nature: "nombre" },
    { french: "Dix", persian: "Noh", arabic: "ده", nature: "nombre" },
    { french: "Moi/Je", persian: "Man", arabic: "من", nature: "pronom" },
    { french: "Toi/Tu", persian: "To", arabic: "تو", nature: "pronom" },
    {
      french: "Venir",
      persian: "Âmadan/Ây",
      arabic: "آی/آمدن",
      nature: "verbe",
    },
    {
      french: "Donner",
      persian: "Dâdan/Dah",
      arabic: "دﻩ/دادن",
      nature: "verbe",
    },
    {
      french: "Aller",
      persian: "Raftan/Rav",
      arabic: "رو/رفتن",
      nature: "verbe",
    },
    {
      french: "Dire",
      persian: "Goftan/gou(y)",
      arabic: "گو(اﺵ/گفتن",
      nature: "verbe",
    },
  ];

  return (
    <div>
      {words ? (
        <Grid className={classes.container}>
          {words.map((currentWord) => (
            <Box className={classes.box}>
              <Word
                main={currentWord.french}
                translation={currentWord.persian}
                written={currentWord.arabic}
                nature={currentWord.nature}
              />
            </Box>
          ))}
        </Grid>
      ) : (
        "No words found in dictionary"
      )}
    </div>
  );
};

export default WordList;
