import React from 'react';
import ListingCard from './ListingCard'

function ListingContainer({ listings }){

    return(
        <>
        <ul className="cards">
            {listings.map((listing) => (
                <ListingCard listing = {listing} />
            ))}
        </ul>

<div className="btn-group">
<button className="btn">1</button>
<button className="btn btn-active">2</button>
<button className="btn">3</button>
<button className="btn">4</button>
</div>
</>
    )
}

export default ListingContainer;