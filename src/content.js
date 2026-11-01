// Recapito, indirizzo e orari letti direttamente su Google Maps il 1 novembre 2026.
// WhatsApp attivato su richiesta esplicita dell’utente il 1 novembre 2026.
export const business={name:'Lulù Bolle&Coccole',phone:'+39 320 486 1180',phoneHref:'tel:+393204861180',address:'Via Testona 4, 10127 Torino TO',whatsappVerified:true,whatsapp:'https://wa.me/393204861180',maps:'https://maps.app.goo.gl/vseyC8BnQ2AJwHuL9',rating:'4,9',reviewCount:30,verifiedOn:'1 novembre 2026',hours:[['Lunedì e martedì','09:00 – 19:30'],['Mercoledì','15:30 – 19:30'],['Giovedì, venerdì e sabato','09:00 – 19:30'],['Domenica','Chiuso']]};
export const services=[
['Bagno Dermocosmetico e Asciugatura Dolce','Prodotti delicati scelti in base al pH e al tipo di mantello, con asciugatura a temperatura controllata e senza mai usare gabbie chiuse.','care','water'],
['Taglio a Forbice, Tosatura e Styling','Tagli personalizzati per valorizzare ogni musetto, con particolare cura per manti ricci e lunghi (Barboncini, Maltipoo, Maltesi, Shih Tzu, Yorkshire).','pup','scissors'],
['Slanatura, Stripping e Cura Sottopelo','Rimozione delicata del pelo morto e dei nodi per far respirare la cute, ideale per manti voluminosi e doppi (Volpini di Pomerania, Chow Chow, Golden Retriever).','dog','comb'],
['Toelettatura Delicata per Gatti','Un approccio silenzioso, paziente e rispettoso dei tempi felini per spazzolatura, rimozione nodi, bagno e taglio unghie dei gatti.','cat','paw'],
['Prima Toelettatura Cuccioli & Cani Ansiosi','Percorso di avvicinamento gentile per abituare i cuccioli o rassicurare gli animali più timorosi ai suoni e al contatto, passo dopo passo.','happy','heart'],
['Igiene Completa e Piccoli Rituali','Cura delle unghie, pulizia delicata di orecchie e contorno occhi, rasatura igienica dei polpastrelli e pulizia delle pieghe cutanee.','hero','spark']];
// Sintesi di recensioni lette direttamente su Google Maps, non citazioni.
// Nomi abbreviati; nessuna data o valutazione ricostruita.
export const reviews=[
{theme:'Gentilezza',author:'Emanuela H.',text:'Emanuela racconta la prima toelettatura del suo chow chow, apprezzando la gentilezza e la competenza del personale.'},
{theme:'Delicatezza',author:'Jennylou P.',text:'Jennylou descrive la cura delicata riservata a Coco, la sua volpina di Pomerania, e si dice molto soddisfatta del risultato.'},
{theme:'Attenzione',author:'Rosaria Anna G.',text:'Rosaria Anna racconta che il suo maltipoo ansioso è stato rassicurato durante il trattamento e ha ricevuto un bel taglio.'}];
export const faqs=[
['Posso portare il mio gatto?','Certo, anche i gatti meritano una coccola su misura. Raccontaci come vive la spazzolatura e il contatto: valuteremo insieme il trattamento e i tempi più adatti, con pazienza e rispetto delle sue abitudini. Scrivici su WhatsApp o chiamaci al +39 320 486 1180 prima di passare.'],
['Come scelgo il trattamento giusto?','Non devi saperlo già: siamo qui per aiutarti. Taglia, tipo di pelo, nodi e abitudini del tuo amico ci aiutano a capire da dove iniziare. Usa il configuratore WhatsApp per indicarci chi porti e cosa stai cercando, oppure chiamaci al +39 320 486 1180: ne parliamo insieme.'],
['Come posso prenotare una coccola?','Scegli il tuo animale e il trattamento nel configuratore, poi apri WhatsApp: troverai un messaggio già pronto, che puoi completare e inviare quando vuoi. Il negozio ti risponderà per concordare disponibilità e appuntamento. Se preferisci parlare a voce, chiama il +39 320 486 1180.'],
['Quanto dura e quanto costa una toelettatura?','Ogni mantello ha la sua storia. Durata e costo dipendono da taglia, pelo, condizioni del mantello e trattamento richiesto. Scrivici su WhatsApp, anche raccontandoci le esigenze del tuo amico, oppure chiama il +39 320 486 1180: ti aiutiamo a capire come organizzarti.'],
['Il mio cane è cucciolo o molto ansioso: come lo accogliete?','Partiamo dalla conoscenza, con calma. Dicci se è la sua prima volta, quali suoni lo preoccupano e cosa lo tranquillizza: potremo concordare un avvicinamento graduale e rispettoso dei suoi tempi. Prima dell’appuntamento scrivici su WhatsApp o chiamaci al +39 320 486 1180, così ci prepariamo ad accoglierlo.'],
['Dove siete e come vi raggiungo?','Ci trovi in Via Testona 4, a Torino, nella zona Lingotto e Nizza Millefonti, vicino a piazza Bengasi. Puoi raggiungerci anche dalle fermate della metro Lingotto o Bengasi. Apri le indicazioni Google Maps nei contatti e, se hai bisogno di una mano, scrivici su WhatsApp o chiama il +39 320 486 1180.']];
export const petOptions=['Cane Taglia Piccola','Cane Taglia Media','Cane Taglia Grande','Gatto'];
export const treatmentOptions=['Bagno e Spazzolatura','Bagno + Taglio a forbice / Tosatura','Slanatura Sottopelo','Prima Toelettatura Cucciolo','Taglio Unghie e Igiene'];
export function bookingMessage(pet,treatment){return 'Ciao Lulù! Vorrei chiedere informazioni e disponibilità per il mio '+pet+' per un trattamento di '+treatment+'. Grazie!'}
export function bookingHref(pet,treatment){return business.whatsapp+'?text='+encodeURIComponent(bookingMessage(pet,treatment))}
