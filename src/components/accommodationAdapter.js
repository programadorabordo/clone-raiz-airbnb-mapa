export default function accommodationAdapter(accommodation) {
  return {
    pretitle: accommodation.listing?.kickerContent?.messages[0],
    title: accommodation.listing.name,
    image: accommodation.listing.contextualPictures[0].picture,
    priceString: accommodation.pricingQuote.priceString,
    priceTotal: accommodation.pricingQuote.price.total.amountFormatted,
    avgRating: accommodation.listing.avgRating,
    reviewsCount: accommodation.listing.reviewsCount,
    details: accommodation.listing.homeDetails,
    amenities: accommodation.listing.previewAmenityNames.map(amenity => ({
      title: amenity
    }))
  }
}