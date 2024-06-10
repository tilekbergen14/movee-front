async function storeGetMovies() {
    const response = await fetch("http://localhost:4000/movies");
    return await response.json();
}

async function storeCreateMovie(fd) {
    return await fetch("http://localhost:4000/movies", {
        method: "POST",
        body: fd,
      });
}

async function storeDeleteMovie(id) {
    return await fetch(`http://localhost:4000/movies/${id}`, {
        method: "DELETE",
      });
}

async function storeGetMovieById(id) {
    return await fetch(`http://localhost:4000/movies/${id}`, {
        method: "GET",
      });
}

export {storeGetMovies, storeCreateMovie, storeDeleteMovie, storeGetMovieById}