import React, { useMemo } from 'react';
import { useFavorites } from '../../contexts/FavoritesContext';
import { beaches } from '../../data/beachesData';
import BeachCard from '../../components/Features/BeachCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  const favoriteBeaches = useMemo(() => {
    const set = new Set(favorites);
    return beaches.filter((b) => set.has(b.id));
  }, [favorites]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-40 flex-1">
        <h1 className="text-4xl text-center text-[var(--color-primary-700)] ">Favoritos</h1>

        {favoriteBeaches.length === 0 ? (
          <div className="pb-16">
            <p className="text-center text-[var(--color-error)] pt-5">
              Você ainda não favoritou nenhuma praia.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center p-20">
            {favoriteBeaches.map((beach) => (
              <BeachCard
                key={beach.id}
                beach={beach}
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Favorites;
