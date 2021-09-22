function ItemsInline(items) {
  return items.map((item, itemIndex) => (`
    <span>${item.title}</span>
    ${itemIndex < items.length - 1 ? `
      <span>·</span>
    ` : ''}
  `)).join('')
}

export default function AccommodationComponent(props) {
  const $accommodation = document.createElement('div');
  $accommodation.classList.add('accommodation');

  $accommodation.addEventListener('mouseover', props.onMouseover);

  $accommodation.addEventListener('mouseout', props.onMouseout);

  $accommodation.innerHTML = `
    <a class="accommodation-link" href="#" title=""></a>
      <div class="accommodation-gallery">
        <div class="accommodation-gallery__img">
          <img src="${props.image}" alt="Imagem da casa">
        </div>
      </div><!-- .accommodation-gallery -->
      <div class="accommodation-infos">
        <div>
          <div class="accommodation-infos__header">
            <div>
              <span class="accommodation-infos__pretitle">
                ${props.pretitle}
              </span>
              <h3 class="accommodation-infos__title">${props.title}</h3>
            </div>
            <button class="btn-like" type="button">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
            </button>
          </div>
          <hr class="accommodation-divider">
          <div class="accommodation-infos__body">
            <div class="accommodation-infos__details">
              ${ItemsInline(props.details)}
            </div>
            <div class="accommodation-infos__amenities">
              ${ItemsInline(props.amenities)}
            </div>
          </div>
        </div>
        <div class="accommodation-footer">
          <div class="accommodation-rating">
            ${props.avgRating ? `
              <span class="accommodation-rating__star">
                <svg style="height: 14px; width: 14px;" fill="#FF385C" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
              </span>
              <span class="accommodation-rating__score">${props.avgRating}</span>
              <div class="accommodation-rating__total-reviews">(${props.reviewsCount} review${props.reviewsCount > 1 ? 's' : ''})</div>
            `: ''}
          </div>
          <div class="accommodation-price">
            <span class="accommodation-price__period">
              <strong>${props.priceString}</strong> / night
            </span>
            <span class="accommodation-price__total">${props.priceTotal} total</span>
          </div>
        </div>
      </div>
  `;

  return $accommodation;
}