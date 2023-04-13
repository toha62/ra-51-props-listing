import Star from "./Star";

export default function Stars({ count = 0 }) {
  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return;
  }

  const starArr = new Array(count);

  return (
    <ul className="card-body-stars u-clearfix">
      {starArr.fill(<Star />).map(star => (<li>{star}</li>))}     
    </ul>
  );
}