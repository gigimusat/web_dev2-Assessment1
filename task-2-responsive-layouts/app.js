const h = React.createElement;

const movies = [
  {
    title: "Who Framed Roger Rabbit (1988)",
    image: "assets/who-framed-roger-rabbit.jpg",
    description: "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!"
  },
  {
    title: "Hook (1991)",
    image: "assets/hook.jpg",
    description: "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rescue his kids from Captain Hook. Adventure, magic, and nostalgia make this a family classic."
  },
  {
    title: "La La Land (2016)",
    image: "assets/la-la-land.jpg",
    description: "Love, dreams, and the magic of LA take centre stage. Two starry-eyed artists navigate passion and ambition in this musical where every moment feels like a movie."
  },
  {
    title: "Hidden Figures (2016)",
    image: "assets/hidden-figures.jpg",
    description: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Their intelligence, perseverance, and teamwork help change history."
  },
  {
    title: "Palm Springs (2020)",
    image: "assets/palm-springs.jpg",
    description: "A never-ending wedding day turns into an unforgettable time-loop romance. Two strangers find love, chaos, and meaning in the most unexpected ways."
  },
  {
    title: "Barbie (2023)",
    image: "assets/barbie.jpg",
    description: "Step into Barbie's dazzling world as she leaves her perfect doll life for an unexpected journey in the real world, full of humour, heart, and big dreams."
  }
];

function WatchButton() {
  return h("button", { type: "button" }, "Watch now");
}

function MovieCard({ movie, featured = false, horizontal = false }) {
  const className = ["movie", featured && "featured", horizontal && "horizontal"].filter(Boolean).join(" ");
  const Heading = featured ? "h1" : "h2";
  return h("article", { className },
    h("img", { src: movie.image, alt: movie.title + " poster" }),
    h("div", { className: "movie-info" },
      h(Heading, null, movie.title),
      h("p", null, movie.description),
      h(WatchButton)
    )
  );
}

function App() {
  const layoutClass = document.body.className;
  return h(React.Fragment, null,
    h("header", { className: "site-header" },
      h("a", { className: "brand", href: "#" }, "watch.it"),
      h("nav", { "aria-label": "Genres" },
        ["Action", "Comedy", "Romance", "Drama"].map(genre => h("a", { href: "#movies", key: genre }, genre))
      ),
      h("button", { className: "search", type: "button" }, "Search")
    ),
    h("main", { id: "movies" },
      h(MovieCard, { movie: movies[0], featured: true }),
      h("section", { className: "two-up", "aria-label": "More movies" },
        movies.slice(1, 3).map(movie => h(MovieCard, { movie, key: movie.title }))
      ),
      h("section", { className: "movie-list", "aria-label": "More films" },
        movies.slice(3).map(movie => h(MovieCard, { movie, horizontal: true, key: movie.title }))
      )
    ),
    h("footer", null, "watch.it — pick a film and get comfy.")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
