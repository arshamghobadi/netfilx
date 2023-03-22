import type { NextPage, NextPageContext } from 'next';

import { getSession, signOut } from 'next-auth/react';
import Billboard from '../components/Billboard';
import InfoModal from '../components/InfoModal';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import useFavorites from '../hooks/useFavorites';
import useInfoModalStore from '../hooks/useInfoModalStore';
import useMovies from '../hooks/useMovieList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
};

export default Home;
