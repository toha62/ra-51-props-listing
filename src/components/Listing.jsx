import Item from './Item'

export default function Listing({ items = [] }) {
  // items.map(item => console.log(item.listing_id, item.url));
  // return (
  //   <div></div>
  // );
  return (
    <div className="item-list">
      {items.map(item =>
        <div key={item.listing_id} className="item">
          <Item
            url = {item.url}
            imageUrl = {item.MainImage?.url_570xN}
            title = {item.title}
            currencyCode = {item.currency_code}
            price = {item.price}
            quantity = {item.quantity}
          />
        </div>  
      )}
    </div>
  );
}