$(document).ready(function(){
    $('#searchForm').on('submit'.function(event){
        let searchText = $('#searchText').val();
        getMovies(searchText);
        event.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s='+searchText);
}