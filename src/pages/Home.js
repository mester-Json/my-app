import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Index from '../Home/Index'

function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Index />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
