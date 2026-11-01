# Lulù Bolle&Coccole — proposta di sito

Sito dimostrativo non ufficiale, aggiornato il 1 novembre 2026 per la presentazione al negozio.

## Contenuti

- Contatti, orari, servizi, FAQ e sintesi delle recensioni: `src/content.js`.
- Interfaccia e interazioni: `src/main.jsx`.
- Stile principale e correzioni responsive: `src/style.css`, `src/refinements.css`.
- Sito compilato: `dist/`.
- Configurazione interna di Sites gestita separatamente dalla copia GitHub.

## Avvio e compilazione

Con Node.js 20 o successivo: `npm ci`, poi `npm run build`. Servire `dist/` tramite HTTP.
Il comando di compilazione funziona su Windows e Linux. Le dipendenze installate non sono versionate.

## Correzioni del 1 novembre 2026

- I contatti principali aprono il telefono tramite `tel:+393204861180`. Il precedente invito a scrivere su WhatsApp portava a un avviso senza contatto diretto.
- WhatsApp resta disattivato fino alla conferma del negozio. Non è stato aggiunto un sistema di prenotazione.
- Orari e recapiti riportano Google Maps come fonte.
- Le vecchie sintesi da una directory, con nomi completi e date non riscontrate direttamente, sono state sostituite con sintesi di tre recensioni lette su Google Maps. Non sono citazioni letterali, non riportano punteggi e usano nomi abbreviati.
- Menu mobile chiudibile con Esc e clic esterno. La galleria rispetta il filtro e restituisce il focus alla foto di partenza dopo la chiusura.
- Testi e controlli più leggibili sui telefoni piccoli; nessuno scorrimento orizzontale nei formati verificati.
- Indicazione visibile della natura dimostrativa del sito e contatti essenziali anche senza JavaScript.
- Bolle di sapone in apertura, piccole impronte che compaiono in sequenza e microanimazioni sulle schede. I movimenti iniziali terminano entro cinque secondi e rispettano `prefers-reduced-motion`.
- File compilati con nomi legati al contenuto per evitare versioni precedenti nella cache. Percorsi relativi e copia `docs/` compatibili con l’hosting già presente nella repository GitHub.

## Fonti

[Google Maps](https://maps.app.goo.gl/vseyC8BnQ2AJwHuL9), consultato il 1 novembre 2026: indirizzo, telefono, orari e recensioni di Emanuela Hulpasu, Jennylou Pistorale e Rosaria Anna Ganci. Le sintesi conservano il senso dei testi osservati; non ricostruiscono date.

Le foto presenti sono immagini illustrative Unsplash già incluse nel progetto. Non rappresentano il negozio, i suoi clienti o i risultati dei trattamenti. Marchio tipografico e palette sono proposte. Prima della versione ufficiale servono conferma di servizi e contenuti, foto e logo autorizzati, dati dell’attività e documenti definitivi.

Gli indirizzi delle immagini originali sono conservati in `ASSETS.md`.

## Verifiche

- Compilazione di produzione completata.
- Anteprima HTTP funzionante e controlli nel browser a 320, 390, 768 e 1280 px: nessun overflow orizzontale o immagine non caricata.
- Verificati menu mobile con Esc, filtri della galleria, navigazione con frecce, chiusura con ritorno del focus, FAQ, collegamenti telefonici e caricamento della mappa su richiesta.
- Nessuna telefonata, prenotazione o richiesta reale è stata effettuata durante i controlli.

## Pubblicazione

Demo aggiornata: https://lulu-bolle-coccole-torino.modestknoll65.chatgpt.site/

Il workflow GitHub Pages esistente resta invariato. La compilazione produce `dist/` e una copia `docs/`, con percorsi relativi e nomi dei bundle legati al contenuto.
