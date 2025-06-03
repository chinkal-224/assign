import React, { useEffect, useState } from "react";
import { fetchUpcomingMovies } from "../api";
import MovieCard from "../components/MovieCard";

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const data = await fetchUpcomingMovies(page);
        setMovies(prev => [...prev, ...data.results]);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, [page]);

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upcoming Movies</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {!loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default UpcomingMovies;
