function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-white p-10 shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;