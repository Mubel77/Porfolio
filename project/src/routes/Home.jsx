import Hero from '../components/Hero';

const Home = ({ content }) => {
  return (
    <main className="pt-20">
      <Hero content={content.hero} />
    </main>
  );
};

export default Home;