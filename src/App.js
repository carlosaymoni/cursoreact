import logo from './logo.svg';
import './App.css';

const AvatarJSX = (props) => {
  const src = `https://randomuser.me/api/portraits/lego/${props.id}.jpg`

  return (
      <picture>
          <img src={src} alt='Lego 1' className='img1'/>
          { props.name}
      </picture>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AvatarJSX id={2} name={"CarlosA"}/>
        <AvatarJSX id={3} name={"Lucas"}/>
        <AvatarJSX id={4} name={"Leandro"}/>

      </header>
    </div>
  );
}

export default App;
