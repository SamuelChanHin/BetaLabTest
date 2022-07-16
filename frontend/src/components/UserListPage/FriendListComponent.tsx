import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { Friend, User } from "../../types/userType";
import { dataFormatConvertor } from "../../util/dateFormatter";
import UserCard from "./component/UserCard";

interface FriendListComponentProps {
  friends: Friend[];
}

function FriendListComponent({ friends }: FriendListComponentProps) {
  const { user: loginUser } = useAuth();
  const navigate = useNavigate();

  const userCardOnClick = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  return (
    <StackContainer spacing={1}>
      {friends.map((friend) => {
        const { requesterUserId, requesterUser, responderUser } = friend;

        const DateComponent = () => {
          return (
            <Typography>
              Started at: {dataFormatConvertor(friend.createdAt)}
            </Typography>
          );
        };

        if (loginUser?.id === requesterUserId) {
          return (
            <UserCard
              onClick={userCardOnClick}
              user={responderUser}
              bottomRightComponent={<DateComponent />}
            />
          );
        } else {
          return <UserCard onClick={userCardOnClick} user={requesterUser} />;
        }
      })}
    </StackContainer>
  );
}

export default FriendListComponent;

const StackContainer = styled(Stack)``;
