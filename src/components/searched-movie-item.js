class SearchedMovieItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set movie(movie) {
        this._movie = movie;
        if (!this._movie.episodes) {
            this._movie.episodes = 'Ongoing'
        }
        this.render()
    }

    render() {
        this.innerHTML = '';
        this.innerHTML += `
    <div class="card">
        <img class="img-fluid img-thumbnail"
            src="${this._movie.image}"
            width="140" height="140">
        <h2>${this._movie.title}</h2>
        <p>Rank     : ${this._movie.ranking}</p>
        <p>Episode  : ${this._movie.episodes}</p>
        <p>Status   : ${this._movie.status}</p>
        <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
    </div>`
    }
}

customElements.define('searched-movie-item', SearchedMovieItem);