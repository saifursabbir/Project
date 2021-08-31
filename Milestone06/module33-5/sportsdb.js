const searchTeam = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}
    `;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.teams))

}

const displaySearchResult = teams => {
    const searchResult = document.getElementById('search-result')
    teams.forEach(team => {
        console.log(team)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div)
    })
}