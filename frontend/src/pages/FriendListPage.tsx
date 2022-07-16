import { Box, styled } from "@mui/material";
import React from "react";
import { useGetUserFriendList } from "../api/reactQuery/useGetUser";
import FriendListComponent from "../components/UserListPage/FriendListComponent";
import { useAuth } from "../provider/AuthProvider";

function FriendListPage() {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useGetUserFriendList(user?.id || 0);

  if (isLoading || !data) return <>Is Loading</>;

  return (
    <BoxContainer>
      <FriendListComponent friends={data} />
    </BoxContainer>
  );
}

export default FriendListPage;

const BoxContainer = styled(Box)`
  padding: 16px;
`;
