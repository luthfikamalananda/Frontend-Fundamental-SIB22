import '../components/searched-movie-list.js';
import '../components/navbar-search.js';

function main() {
    
    const searchElement = document.querySelector('navbar-search');
    const baseUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=30';
    const searchedMovies = document.querySelector('searched-movie-list');
  
    const getPopularMovies = async () => {
        console.log('kode populer jalan');
        try {
            const response = await fetch(`${baseUrl}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7b56ecf3f9mshcdc13c5d6032330p1e6d9cjsn9f83916988dd',
                    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
                }
            })
            const responseJson = await response.json();
            console.log(responseJson);
            renderAll(responseJson);
            let cont = document.querySelector('#btnRanking');
            cont.setAttribute('class', 'btn btn-outline-dark active')
        } catch (error) {
            console.log(error);
        }
    }

    

    const searchMov = () => { // jangan pakai form di indexnya karena hanya butuh buttonnya
        let key = searchElement.value;
        console.log(key);
        fetch(`${baseUrl}&search=${key}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b56ecf3f9mshcdc13c5d6032330p1e6d9cjsn9f83916988dd',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
        })
        .then(response => response.json())
        .then(response => renderAll(response))
        .catch(err => console.error(err));
    }

    const filterCategoryComedy = () => {
        console.log('kode filter jalan');
        fetch(`${baseUrl}&genres=Comedy`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b56ecf3f9mshcdc13c5d6032330p1e6d9cjsn9f83916988dd',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response); renderAll(response)
            let cont = document.querySelector('#btnComedy');
            cont.setAttribute('class', 'btn btn-outline-dark active')})
        .catch(err => console.error(err))
    }

    const filterCategoryAction = () => {
        console.log('kode filter jalan');
        fetch(`${baseUrl}&genres=Action`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b56ecf3f9mshcdc13c5d6032330p1e6d9cjsn9f83916988dd',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response); renderAll(response)
            let cont = document.querySelector('#btnAction');
            cont.setAttribute('class', 'btn btn-outline-dark active')})
        .catch(err => console.error(err))
    }

    const filterCategoryRomance = () => {
        console.log('kode filter jalan');
        fetch(`${baseUrl}&genres=Romance`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b56ecf3f9mshcdc13c5d6032330p1e6d9cjsn9f83916988dd',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response); renderAll(response)
            let cont = document.querySelector('#btnRomance');
            cont.setAttribute('class', 'btn btn-outline-dark active')})
        .catch(err => console.error(err))
    }

    const test = () => {
        console.log('test kode ini jalan');
    }

    const renderAll = movies => {
        searchedMovies.movies = movies.data;
        // console.log(movies)
    }

    window.addEventListener('DOMContentLoaded', getPopularMovies);
    searchElement.clickEvent = searchMov;
    // searchElement.clickEventForm = searchMov;
    searchedMovies.btnRanking = getPopularMovies;
    searchedMovies.btnComedy = filterCategoryComedy;
    searchedMovies.btnAction = filterCategoryAction;
    searchedMovies.btnRomance = filterCategoryRomance;
    searchElement.clickPopulerNav = getPopularMovies;
}

export default main;