const Tweet = ({ username, name, date, msg }) => {
  return (
    <div className="tweet">
      <span className="name">{name}</span>
      <span className="username">({username})</span>
      <span className="date">{date}</span>
      <p className="msg">{msg}</p>
    </div>
  );
};
