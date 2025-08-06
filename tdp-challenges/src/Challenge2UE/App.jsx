import { useEffect, useState } from "react";
function App({ url = "https://openlibrary.org/search.json?q=movie&limit=40" }) {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // console.log('Hello from UE')
        // fetch('https://openlibrary.org/search.json?q=movie&limit=40')
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(res);
        //         const sgMovies = Object.values(res.docs)
        //         setMovies(sgMovies)
        //     })
        async function fetchMovies() {
            let response = await fetch(url);
            response = await response.json()
            setMovies(Object.values(response.docs))
        }
        fetchMovies();
    }, [url])

    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer);
        }
        // setInterval(() => {
        //     setTime(new Date())
        // }, 1000);
    }, [])

    useEffect(() => {
        function getScroll() {
            const currentScroll = document.documentElement.scrollTop;
            console.log(currentScroll)
        }

        document.addEventListener('scroll', getScroll)

        return () => {
            document.removeEventListener('scroll', getScroll)
        }
    }, [])



    return (
        <div>
            <h1>
                Triggered on every re-render
            </h1>
            <button onClick={() => setCount(count + 1)}>Plus 1</button>
            <p>{count}</p>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.title}>{movie.title}: {movie.first_publish_year}</li>
                )
                )}
            </ul>
            <h1>Time</h1>
            <time>{time.toTimeString()}</time>
        </div>
    )
}

export default App;