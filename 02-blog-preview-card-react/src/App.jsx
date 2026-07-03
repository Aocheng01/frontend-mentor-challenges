import './App.css'
import Image from './components/Image';
import LearningTag from './components/LearningTag';
import Content from './components/Content';
import Contact from './components/Contact';

function App() {
  return (
    <main className="blog-card">
      <Image />
      <LearningTag />
      <Content />
      <Contact />
    </main>
  );
}

export default App
