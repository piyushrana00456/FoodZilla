function searchBox(){
    return ` <div id="navbar">
    <div id="option">
        <h3><a href="homePage.html">Search Your Dishes</a></h3>
        <h3><a href="latest.html">Latest Meals</a></h3>
        <h3><a href="receipe.html">Receipe Of The Day</a></h3>
    </div>
    <div id="acc">
      <h3><a href="/">SignUp</a></h3>
      <h3><a href="/">Login</a></h3>
    </div>
</div>
<div id="search">
    <input oninput="throtle()" type="text" id="searchDish">
    <span><img src="loupe.png" alt=""></a></span>
    <div id="list"></div>
</div>
`
}
export {searchBox}