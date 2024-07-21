
import Header from './components/header';
import RoundedButom from './components/roundedButom';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

export default function Home() {
  return (
    <main className='antialiased'>
      <Header />
      <Section1 />
      
      <div className='space-y-64'>
        <Section2 />
        <Section3/>
        
        <section>
 
        </section>
      </div>

    </main>
  );
}
