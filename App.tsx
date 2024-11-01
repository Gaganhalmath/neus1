
import Header from './components/Header.tsx';
import Content from './components/Content.tsx';
import Footer from './components/Footer.tsx';
import './index.css'; // Import TailwindCSS

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
