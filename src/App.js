import './App.css';
import { Editable } from './components/Editable'
import { Hyphenated } from './hyphenate';
import TextField from '@material-ui/core/TextField';

function TextArea({text, onChange}) {
  console.log(onChange);
  return (
    <TextField value={text} onChange={onChange} multiline={true} fullWidth={true} />
  )
}

function App() {
  return (
    <div className="App">
      <Editable text={`Nazywam się Lisa. Jestem dziewczynką, to chyba od razu widać z imienia. Mam siedem lat i wkrótce skończę osiem. Czasem mama mówi:

– Jesteś dużą córeczką mamy, możesz więc chyba dzisiaj wytrzeć naczynia...

Czasem zaś Lasse i Bosse mówią:

– Takie brzdące nie mogą się z nami bawić w Indian. Jesteś za mała!

Dlatego też zastanawiam się, czy właściwie jestem mała, czy duża. Jeśli jedni uważają, że jestem duża, a drudzy, że jestem mała, to pewno jestem w sam raz.

Lasse i Bosse to moi bracia. Lasse ma dziewięć lat, a Bosse osiem. Lasse jest bardzo silny i umie biegać o wiele szybciej ode mnie. Lecz ja umiem biegać tak szybko jak Bosse. Czasem, gdy chłopcy nie chcą, żebym szła z nimi, Lasse przytrzymuje mnie przez chwilę, gdy tymczasem Bosse biegnie naprzód. Potem Lasse puszcza mnie i leci jak strzała.

Siostry nie mam. To wielka szkoda. Chłopcy są tacy nieznośni! Mieszkamy w zagrodzie, która nazywa się Środkowa. Nazywa się tak dlatego, że leży pomiędzy dwiema innymi. Tamte zagrody nazywają się Północna i Południowa. Wszystkie trzy położone są obok siebie. Jak na rysunku.

To niezupełnie tak wygląda w rzeczywistości, ale to dlatego, że nie umiem zbyt dobrze rysować.

W Zagrodzie Południowej mieszka chłopiec, który ma na imię Olle. On nie ma wcale rodzeństwa. Lecz bawi się z Lassem i Bossem. Ma osiem lat i też bardzo prędko biega. Natomiast w Zagrodzie Północnej mieszkają dziewczynki. Dwie. Co za szczęście, że i one nie są chłopcami! Nazywają się Britta i Anna. Britta ma dziewięć lat, a Anna tyle co ja. Obie lubię jednakowo. Może tylko trochę bardziej Annę.

Więcej dzieci nie ma już w Bullerbyn. Tak się nazywa ta wioska. Jest to bardzo mała wioska, tylko trzy zagrody: Północna, Środkowa i Południowa. I tylko sześcioro dzieci: Lasse i Bosse, i ja, i Olle, i Britta, i Anna.`}
  editComponent={TextArea}
  displayComponent={Hyphenated}
/>
    </div>
  );
}

export default App;
