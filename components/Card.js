const Card = ({
  name,
  backgroundColor = '#000',
  items,
  multiplier = 1,
  onClickHandler = () => {},
}) => {
  return (
    <div
      className="card"
      onClick={() => onClickHandler(name)}
      style={{backgroundColor: backgroundColor}}
    >
      <div className="card__content">
        {items.map(({type, value, size}) => type === 'text'
          ? <Text size={size * multiplier} value={value} key={value} />
          : <Image value={value} key={value} />
        )}
      </div>
    </div>
  )
};
