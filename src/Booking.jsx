import React,{useState} from 'react';
import {business,petOptions,treatmentOptions,bookingHref,bookingMessage} from './content';

export default function Booking({Icon}){
  const [pet,setPet]=useState('');
  const [treatment,setTreatment]=useState('');
  const ready=Boolean(pet&&treatment);
  return <section id="prenota" className="booking section-pad" aria-labelledby="booking-title">
    <div className="shell">
      <div className="booking-heading">
        <span className="eyebrow">LA PROSSIMA COCCOLA, INSIEME</span>
        <h2 id="booking-title">Prenota la coccola<br/>su WhatsApp <em>in 3 clic.</em></h2>
        <p>Scegli chi porti e di cosa ha bisogno. Ti aiutiamo a trovare il momento giusto: l’appuntamento si concorda in chat.</p>
      </div>
      <div className="booking-layout">
        <div className="booking-choices">
          <fieldset><legend><span>01</span> Chi porti da Lulù?</legend><div className="booking-chips">{petOptions.map(option=><button type="button" key={option} aria-pressed={pet===option} onClick={()=>setPet(option)}><Icon name="paw" size={19}/>{option}</button>)}</div></fieldset>
          <fieldset><legend><span>02</span> Di cosa ha bisogno?</legend><div className="booking-chips">{treatmentOptions.map(option=><button type="button" key={option} aria-pressed={treatment===option} onClick={()=>setTreatment(option)}>{option}</button>)}</div></fieldset>
        </div>
        <div className="booking-summary">
          <span className="eyebrow">03 / SCRIVIAMOCI</span>
          <h3>Una coccola su misura.</h3>
          <div className="booking-selection" aria-live="polite" aria-atomic="true"><p>{pet||'Scegli il tuo amico'}<br/><strong>{treatment||'e il suo trattamento.'}</strong></p></div>
          {ready&&<p className="message-preview">{bookingMessage(pet,treatment)}</p>}
          <a className="btn dark booking-send" href={ready?bookingHref(pet,treatment):'#prenota'} target={ready?'_blank':undefined} rel={ready?'noopener noreferrer':undefined} aria-disabled={!ready} onClick={event=>{if(!ready)event.preventDefault()}}><Icon name="wa" size={21}/>Verifica disponibilità su WhatsApp <span aria-hidden="true">↗</span></a>
          <p className="booking-help" aria-live="polite">{ready?'Apri la chat e invia il messaggio quando vuoi.':'Seleziona un animale e un trattamento per preparare il messaggio.'}</p>
          <a className="text-link" href={business.phoneHref}><Icon name="phone" size={18}/>Preferisci chiamare? {business.phone}</a>
        </div>
      </div>
      <p className="booking-nojs">Per usare le scelte interattive attiva JavaScript, oppure <a href={business.whatsapp}>scrivici direttamente su WhatsApp</a> o <a href={business.phoneHref}>chiama {business.phone}</a>.</p>
    </div>
  </section>
}
