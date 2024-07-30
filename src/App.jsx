import { client } from 'node-shikimori';
import AnimeCard from './componens/AnimeCard/AnimeCard';
import './styles/App.css';

const shikimori = client();

const test = await shikimori.animes.list({limit:10});

const data = test;

function App() {
  return (
    <div className='container'>
      {data.map((card)=>(
        <AnimeCard data={card}/>
      ))}
    </div>
  );
}

export default App;
