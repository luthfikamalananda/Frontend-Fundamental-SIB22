import './searched-movie-item.js'
class SearchedMovieList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render() 
    }

    set btnRanking(event) {
        this._clickEventRank = event;
    }

    set btnComedy(event) {
        this._clickEventCom = event;
    }

    set btnAction(event) {
        this._clickEventAct = event;
    }

    set btnRomance(event) {
        this._clickEventRom = event;
    }

    
    renderError(message) { 
        this.innerHTML = ` <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>`
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    
    render(){
        this.innerHTML ='';
        const category = document.createElement('nav-category');
        category.innerHTML = `<nav class="navbar navbar-light bg-mains">
        <span class="navbar-brand mb-0 h1">Kategori</span>
        <div class="btn-group" role="group">
            <button type="search" class="btn btn-outline-dark" id='btnRanking' value="Ranking">Ranking</button>
            <button type="search" class="btn btn-outline-dark" id='btnComedy' value="Comedy">Comedy</button>
            <button type="button" class="btn btn-outline-dark" id='btnAction' value="Action">Action</button>
            <button type="button" class="btn btn-outline-dark" id='btnRomance' value="Romance">Romance</button>
        </div>
    </nav>`;
    
    
        const containerGrid = document.createElement('div');
        containerGrid.setAttribute('class', 'container');
        const row = document.createElement('row');
        row.setAttribute('class', 'row');
        containerGrid.appendChild(category);
        containerGrid.appendChild(row);
        this.appendChild(containerGrid);
        console.log(this._movies);
        this._movies.forEach(movie => {
            const searchedMovieElement = document.createElement('searched-movie-item');
            searchedMovieElement.setAttribute('class', 'col-lg-2')
            searchedMovieElement.movie = movie;
            row.appendChild(searchedMovieElement);
        });

        this.querySelector('#btnRanking').addEventListener('click', this._clickEventRank);
        this.querySelector('#btnComedy').addEventListener('click', this._clickEventCom);
        this.querySelector('#btnAction').addEventListener('click', this._clickEventAct);
        this.querySelector('#btnRomance').addEventListener('click', this._clickEventRom);
    }
    
}

customElements.define('searched-movie-list', SearchedMovieList);