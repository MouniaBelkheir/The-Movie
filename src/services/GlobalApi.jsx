//   tutorial version:
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4853d5000ad671f1d994a0457a34a9b6";

const movieByGenreBaseURL =
	"https://api.themoviedb.org/3/discover/movie?api_key=4853d5000ad671f1d994a0457a34a9b6";

const getTrendingVideos = axios.get(
	movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
	axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
	getTrendingVideos,
	getMovieByGenreId,
};

// // Tmdb version:
// import axios from "axios";

// const getTrendingVideos = {
// 	method: "GET",
// 	url: "https://api.themoviedb.org/3/trending/movie/day",
// 	params: { language: "en-US" },
// 	headers: {
// 		accept: "application/json",
// 		Authorization:
// 			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODUzZDUwMDBhZDY3MWYxZDk5NGEwNDU3YTM0YTliNiIsInN1YiI6IjY2MTFlN2M1YjA5YmRlMDE3ZWJkNTA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O3I0Xwi0pLI1Flq964rGhchp-iWb6tWgXeEjZaTWMzA",
// 	},
// };

// axios
// 	.request(getTrendingVideos)
// 	.then(function (response) {
// 		console.log(response.data);
// 	})
// 	.catch(function (error) {
// 		console.error(error);
// 	});
// export default getTrendingVideos;
