import React from "react";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      <img src={imageUrl} alt={movie.title} className="w-full h-[400px] object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{movie.title}</h2>
        <p className="text-sm text-gray-600">Release: {movie.release_date}</p>
        <p className="text-sm text-gray-600">Language: {movie.original_language.toUpperCase()}</p>
        <p className="text-sm text-gray-600">⭐ {movie.vote_average}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
