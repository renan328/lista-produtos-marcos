import Produto from './Compontents/Produto/Produto';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='container'>
        <header className='top'>
          <p>95's</p>
        </header>

        <section className='container2'>
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-nike-psg-21-22-16300650172001_570x570.jpg?webp"
          preco="89,99"
          preco1="89,99"
          preco2="75"
          nome="Camiseta Nike Psg I 2021/22 Torcedor Masculina"
          />
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-nike-tottenham-21-22-16300647697471_570x570.jpg?webp"
          preco="99,99"
          preco1="99,99"
          preco2="75"
          nome="Camisa Nike Tottenham I 2022/23 Torcedor Masculina"
          />
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-nike-inter-de-milao-away-21-22-16300643776279_1900x1900.jpg?webp"
          preco="89,99"
          preco1="89,99"
          preco2="75"
          nome="Camisa Nike Inter de Milão I 2022/23 Torcedor Masculina"
          />
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-nike-barcelonadf-stad-16249029231689_1900x1900.jpg?webp"
          preco="59,99"
          preco1="99,99"
          preco2="75"
          nome="Camisa Nike Barcelona I 2022/23 Torcedor Masculina"
          />
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-nike-liverpool-torcedor-21-22-16300632109736_1900x1900.jpg?webp"
          preco="59,99"
          preco1="89,99"
          preco2="75"
          nome="Camisa Nike Liverpool <br> I 2022/23 Torcedor Masculina"
          />
          <Produto img="https://static.dooca.com.br/gamaia/product/camisa-puma-manchester-city-replica-16268756959817_570x570.jpg?webp"
          preco="69,99"
          preco1="99,99"
          preco2="75"
          nome="Camisa Nike Manchester City I 2022/23 Torcedor Masculina"
          />
        </section>

      </main>
    </div>
  );
}

export default App;
