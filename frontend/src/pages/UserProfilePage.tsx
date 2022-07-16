import { Box, styled } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../api/reactQuery/useGetUser";
import UserDetailComponent from "../components/UserListPage/UserDetailComponent";

function UserProfilePage() {
  const { userId } = useParams();

  const { data, isLoading, refetch } = useGetUser(Number(userId));

  if (isLoading || !data) {
    return <>Is Loading</>;
  }

  return (
    <BoxContainer>
      <UserDetailComponent user={data} refetch={refetch} />
    </BoxContainer>
  );
}

export default UserProfilePage;

const BoxContainer = styled(Box)`
  padding: 16px;
`;
