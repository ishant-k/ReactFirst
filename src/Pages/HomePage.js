import React from 'react';
export default function HomePage() {

return (
<>
<h1>Hey from HomePage</h1>
<p>This is your awesome HomePage subtitle</p>

<header class="w3-container w3-xlarge">
    <p class="w3-left">Jeans</p>
</header>

<div class="w3-display-container w3-container">
    <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans"></img>
    <div class="w3-display-topleft w3-text-white">
        <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
        <h1 class="w3-hide-small">COLLECTION 2016</h1>
        <p><a href="/contact" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
    </div>
</div>

</>
);
}