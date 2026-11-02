# Scodinzolindo di Marta Negri

Sito vetrina dimostrativo per la toelettatura in Via Valentino Carrera 5, Torino. Adattamento del progetto precedente nella stessa repository, con cronologia Git conservata.

La struttura, la galleria e le sei fotografie illustrative sono riutilizzate. Nome, marchio tipografico, palette, contatti, mappa, recensioni, FAQ, messaggi WhatsApp, metadati e dati strutturati descrivono Scodinzolindo.

## Sorgenti e compilazione

React 19, Tailwind CSS 4 ed esbuild. Node.js 22 consigliato.

```bash
npm ci
npm run build
```

`src/content.js` contiene i dati dell'attività, i servizi, le recensioni e le FAQ; `src/App.jsx` e `src/Booking.jsx` gestiscono l'interfaccia. Il documento iniziale viene renderizzato durante la compilazione e salvato in `index.html`, `dist/index.html` e `docs/index.html`. I percorsi delle risorse sono relativi e i bundle hanno nomi con hash.

Il workflow `.github/workflows/` compila e pubblica su GitHub Pages a ogni aggiornamento di `main`. Per altri hosting statici la cartella pubblica è `dist`.

## WhatsApp

Le CTA aprono il numero pubblico `+39 348 785 4716`. Il configuratore prepara un messaggio indirizzato a Marta solo quando sono stati scelti animale e trattamento. L'invio del messaggio e l'appuntamento si concordano su WhatsApp; il sito non registra prenotazioni né conserva le selezioni. Il numero è verificato sulla scheda Maps, mentre la disponibilità del relativo account WhatsApp resta da confermare con l'attività.

## Fonti consultate il 2 novembre 2026

- Google Maps fornito: https://maps.app.goo.gl/nLjqwgL1zv3qrfRs5?g_st=ic
- Facebook: https://www.facebook.com/scodinzolindodinegrimarta/

Maps riporta Via Valentino Carrera 5, Torino; telefono 348 785 4716; valutazione 4,4/5 su 62 recensioni. La sezione recensioni contiene sintesi attribuite a Lavinia G., Marzia P. e Gabriele A., con cognomi abbreviati. Sono sintesi, non citazioni letterali. Le recensioni del progetto precedente sono state sostituite.

Gli orari non sono disponibili sulla scheda Maps: il sito invita a contattare Marta senza riportare gli orari discordanti delle directory. La palette bianco/nero, avorio e toni legno riprende l'immagine di copertina pubblica Facebook. Il marchio del sito è una proposta tipografica, non una riproduzione del logo originale.

## Demo

Il sito mantiene `noindex,nofollow`. Le foto sono illustrative e non mostrano ambienti, clienti o risultati di Scodinzolindo; le fonti sono in `ASSETS.md`. Servizi specifici, WhatsApp, orari e informativa definitiva devono essere confermati dall'attività prima di una consegna ufficiale. La mappa Google si carica soltanto dopo la scelta del visitatore. Non ci sono analytics, pagamenti o account.
