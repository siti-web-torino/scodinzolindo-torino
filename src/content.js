// Scheda Google Maps e profilo Facebook consultati il 2 novembre 2026.
// Gli orari non sono indicati su Maps: non vengono ricavati da directory discordanti.
export const business={
  name:'Scodinzolindo di Marta Negri',shortName:'Scodinzolindo',
  phone:'+39 348 785 4716',phoneHref:'tel:+393487854716',
  address:'Via Valentino Carrera 5, 10146 Torino TO',street:'Via Valentino Carrera 5',postalCode:'10146',
  whatsapp:'https://wa.me/393487854716',whatsappVerified:true,
  maps:'https://maps.app.goo.gl/nLjqwgL1zv3qrfRs5?g_st=ic',
  facebook:'https://www.facebook.com/scodinzolindodinegrimarta/',
  siteUrl:'https://scodinzolindo-torino.modestknoll65.chatgpt.site/',
  latitude:45.0797739,longitude:7.6369223,
  rating:'4,4',reviewCount:62,verifiedOn:'2 novembre 2026',hours:[]
};
export const services=[
['Bagno e Asciugatura','Una pausa di freschezza per il tuo amico. Raccontaci le esigenze del suo mantello per scegliere insieme il trattamento.','care','water'],
['Taglio e Riassetto','Un look curato, dal musetto alle zampe. Chiedi a Marta quale taglio è più adatto al pelo e alle abitudini del tuo cane.','pup','scissors'],
['Spazzolatura e Cura del Mantello','Nodi e sottopelo richiedono attenzioni diverse. Parliamone insieme per valutare la cura più adatta.','dog','comb'],
['Attenzioni per i Gatti','Anche il mantello felino ha le sue esigenze. Contattaci per conoscere disponibilità e modalità per il tuo gatto.','cat','paw'],
['Cuccioli e Prime Esperienze','La prima volta si prepara insieme. Racconta a Marta il carattere, le abitudini e le sensibilità del tuo cucciolo.','happy','heart'],
['Unghie e Piccoli Gesti di Igiene','Dalle unghie alla pulizia delle orecchie: chiedici informazioni sulle attenzioni da abbinare alla toelettatura.','hero','spark']];
// Sintesi, non citazioni: recensioni di Scodinzolindo lette su Google Maps.
// Nomi con iniziale del cognome; nessuna recensione del progetto precedente.
export const reviews=[
{theme:'Dolcezza',author:'Lavinia G.',text:'Lavinia descrive Marta come dolce, gentile e disponibile. Racconta di averle affidato per la prima volta Sakura per il bagno e alcune cure di igiene.'},
{theme:'Professionalità',author:'Marzia P.',text:'Marzia è arrivata da Marta grazie al consiglio di una vicina. Apprezza la gentilezza, la dolcezza e la professionalità riservate al suo cagnolino Winnie e desidera tornare.'},
{theme:'Fiducia',author:'Gabriele A.',text:'Gabriele porta da anni il suo pastore svizzero da Scodinzolindo. Racconta di trovarsi sempre molto bene e sottolinea la gentilezza e la professionalità del servizio.'}];
export const faqs=[
['Posso portare il mio gatto?','Contattaci prima di passare: racconta a Marta le abitudini del tuo gatto e come vive la spazzolatura, così potrai conoscere disponibilità e modalità del servizio.'],
['Come scelgo il trattamento giusto?','Taglia, tipo di pelo, nodi e abitudini del tuo amico aiutano a capire da dove iniziare. Scegli un trattamento nel configuratore WhatsApp, oppure chiedi direttamente un consiglio a Marta.'],
['Come posso chiedere un appuntamento?','Scegli il tuo animale e il trattamento nel configuratore, poi apri WhatsApp: troverai un messaggio già pronto da completare e inviare. Disponibilità e appuntamento si concordano direttamente con Marta.'],
['Quanto dura e quanto costa una toelettatura?','Durata e costo dipendono dalla taglia, dal tipo di pelo, dalle condizioni del mantello e dal trattamento richiesto. Raccontaci le esigenze del tuo amico per chiedere un preventivo e organizzarti.'],
['Il mio cane è cucciolo o molto timido: cosa devo sapere?','Dillo a Marta prima dell’appuntamento. Racconta se è la sua prima volta, quali suoni lo preoccupano e cosa lo tranquillizza, così potrete valutare insieme come affrontare la toelettatura.'],
['Dove siete e quali sono gli orari?','Scodinzolindo di Marta Negri si trova in Via Valentino Carrera 5, 10146 Torino. Apri le indicazioni Google Maps nella sezione contatti. Per conoscere gli orari e le disponibilità aggiornate, scrivici o chiamaci.']];
export const petOptions=['Cane Taglia Piccola','Cane Taglia Media','Cane Taglia Grande','Gatto'];
export const treatmentOptions=['Bagno e Spazzolatura','Bagno + Taglio / Riassetto','Cura del Mantello','Prima Toelettatura Cucciolo','Taglio Unghie e Igiene'];
export function bookingMessage(pet,treatment){return 'Ciao Marta! Vorrei chiedere informazioni e disponibilità da Scodinzolindo per il mio '+pet+' per un trattamento di '+treatment+'. Grazie!'}
export function bookingHref(pet,treatment){return business.whatsapp+'?text='+encodeURIComponent(bookingMessage(pet,treatment))}
