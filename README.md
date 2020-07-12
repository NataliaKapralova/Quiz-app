# Opdracht

Op basis van een aantal vragen wil ik als gebruiker weten na het beantwoorden van al deze vragen wat mijn score is.

## Requirements:

Graag wil ik als user...:

- voor elke vraag een nieuwe pagina.
- een knop waarbij ik naar de volgende vraag kan
  - Als ik geen antwoord heb gegeven, moet de knop disabled zijn
  - Als ik bij de laatste vraag ben, moet de knop ipv 'Volgende vraag' > 'Naar resultaat' zijn. In dat geval ga ik naar de resultaat-pagina
- Er moet ook een 'vorige' knop zijn, zodat ik mijn antwoord kan aanpassen.
- Bonus: De antwoord mogelijkheden per vraag moeten in een willekeurige volgorde komen te staan. Let op: de volgorde van antwoordmogelijkheden moet alleen in het begin ingesteld worden, dus niet als ik later naar de vraag terug navigeer en dat dan ineens alle mogelijkheden op een andere plek staan.
- Bonus: Als ik de hele pagina refresh, dan wil ik weer verder gaan, waar ik gebleven was (bijv bij vraag 3)
- Op de resultaten pagina wil ik graag zien hoeveel vragen ik goed en fout had. Als ik meer dan de helft goed heb beantwoord ben ik geslaagd.
- Qua vormgeving in layout ben je helemaal vrij.

Tip:

- Gebruik create-react-app
- Gebruik voor styling -> styled-components (https://styled-components.com/)
- Probeer voor nu even state-management libraries te vermijden (redux, etc...), dus 'gewone' hooks
- shortid op npm voor genereren van id's
