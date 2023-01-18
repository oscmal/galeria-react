import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = [
    { 
      title : "San pedro",
      desc: "San Pedro de Atacama es una ciudad ubicada en una alta meseta árida en la Cordillera de los Andes del noreste chileno.",
      photo: "https://www.vuelabarato.cl/wp-content/uploads/2021/09/D4716F47-CCB4-4416-8AA0-7D1BEC9E5328.jpeg"
    },
    { 
      title : "Rapa Nui ",
      desc: "Isla de Pascua, es una remota isla volcánica en la Polinesia. Es famosa por sus sitios arqueológicos y mas de 900 Moais.",
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/40/85/07/ahu-tongariki.jpg?w=300&h=300&s=1"
    },
    { 
      title : "Salto de Huilo-Huilo",
      desc: "Cascada impresionante sobre una cima volcánica cubierta con bosque a la que se accede por un sendero corto.",
      photo: "https://chileestuyo.cl/wp-content/uploads/2021/10/parque-nacional-tolhuaca-300x300.jpg"
    },
    { 
      title : "Torres del Paine",
      desc: "El Parque Torres del Paine, en la región de la Patagonia Chile, es conocido por sus altas montañas y témpanos de azul brillante.",
      photo: "https://chileestuyo.cl/wp-content/uploads/2021/03/parque-nacional-torres-del-paine-300x300.jpg"
    },
  ];
  return (
    <>
    <div className="App">
      <Header/>
        <div className='row w-100 justify-content-center align-items-center'>
          {data.map((item) => (
            <Card
              key= {item.title}
              title={item.title}
              desc= {item.desc}
              photo= {item.photo}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
