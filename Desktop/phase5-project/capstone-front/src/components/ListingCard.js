import React from 'react';
import Reviews from './Reviews'

function ListingCard({ listing }){

    return(
        
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={listing.image} alt={listing.title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{listing.address}, {listing.city} {listing.bedroom}B/{listing.bathroom}B</h2>
    <h2><span class="material-symbols-outlined">star</span>4.5</h2>
    <p>{listing.description}</p>
    <p>1 month</p>
    <h4><strong>${listing.price}</strong> {listing.duration}</h4>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book</button>
    </div>
  </div>
</div>
    )
}

export default ListingCard;
