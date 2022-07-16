import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/userType";
import { dataFormatConvertor } from "../../util/dateFormatter";
import UserCard from "./component/UserCard";

interface UserListComponentProps {
  users: User[];
}

function UserListComponent({ users }: UserListComponentProps) {
  const navigate = useNavigate();

  const userCardOnClick = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  return (
    <StackContainer spacing={1}>
      {users.map((user) => {
        const DateComponent = () => {
          return (
            <Typography>
              Updated at: {dataFormatConvertor(user.updatedAt)}
            </Typography>
          );
        };
        return (
          <UserCard
            onClick={userCardOnClick}
            user={user}
            bottomRightComponent={<DateComponent />}
          />
        );
      })}
    </StackContainer>
  );
}

export default UserListComponent;

const StackContainer = styled(Stack)``;
