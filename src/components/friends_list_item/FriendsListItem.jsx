const FriendsListItem = ({ avatar, name, status }) => {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {status ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </li>
  );
};

export default FriendsListItem;
