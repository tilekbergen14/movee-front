async function getMovies() {
    const response = await fetch("http://localhost:4000/movies");
    return await response.json();
}

export {getMovies}