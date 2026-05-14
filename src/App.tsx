import Header from './components/Header';
import Hero from './components/Hero';
import Insight from './components/Insight';
import Brand from './components/Brand';
import Model from './components/Model';
import Solution from './components/Solution';
import Cases from './components/Cases';
import Value from './components/Value';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Insight />
        <Brand />
        <Model />
        <Solution />
        <Cases />
        <Value />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
