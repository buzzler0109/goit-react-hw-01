import FriendsListItem from "../friends_list_item/FriendsListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
