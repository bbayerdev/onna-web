
import Header from './components/home/header';
import Section1 from './components/home/section1';
import Section2 from './components/home/section2';
import Section3 from './components/home/section3';
import Section4 from './components/home/section4';
import Section5 from './components/home/section5';
import Footer from './components/home/footer';

export default function Home() {
  return (
    <main className='antialiased'>
      <Header />

      <Section1 />
      
      <div className='space-y-64'>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <div></div>
      </div>

      <Footer/>
    </main>
  );
}
