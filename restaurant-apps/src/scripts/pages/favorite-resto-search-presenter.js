class FavoriteRestoSearchPresenter {
    constructor({favoriteResto}) {
        this._listenToSearchRequestByUser();
        this._favoriteResto = favoriteResto;
    }

    _listenToSearchRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
            this._searchResto(event.target.value);
        });
    }

    _searchResto(latestQuery) {
        this._latestQuery = event.target.value;
        this._favoriteResto.searchResto(this._latestQuery);
    }
   
    get latestQuery() {
        return this._latestQuery;
    }

    _showFoundResto(restos) {
        const html = restos.reduce(
          (carry, resto) => carry.concat(`<li class="resto"><span class="resto__title">${resto.title || '-'}</span></li>`),
          '',
        );
       
        document.querySelector('.restos').innerHTML = html;
    }
}
   
export default FavoriteRestoSearchPresenter;