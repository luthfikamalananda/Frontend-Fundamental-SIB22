class NavBarSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render(); 
    }

    set clickEventForm(event) {
        this._clickEventForm = event;
        this.render(); 
    }

    get value() {
        return this.querySelector('#searchElement').value
    }

    render() {
        this.innerHTML = '';
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-nav sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand "><img src="https://art.pixilart.com/67d67ac72c779ee.png" width="30" height="30"
                    class="d-inline-block align-top" alt="">
                KANDANG ANIME</a>
            <div class="navbar-collapse  container-fluid" id="navbarCollapse">
      
                    <input id="searchElement" class="form-control d-flex" type="search" placeholder="Judul Anime" autocomplete="off" name="judulanime">
                    <button id='searchButtonElement' class="btn btn-outline-light" type="submit">Search</button>

            </div>
        </div>
    </nav>`;
        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
        // const check = (e) => {
        //     const form = new FormData(e.target);
        //     const formula = form.get("judulanime");
        //     console.log(formula);
        //     return false
        // };
        // this.querySelector('#form-search').addEventListener('submit', check(event));
        

    }
}

customElements.define('navbar-search', NavBarSearch);
