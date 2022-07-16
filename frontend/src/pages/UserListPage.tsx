import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetUserList } from "../api/reactQuery/useGetUser";
import UserListComponent from "../components/UserListPage/UserListComponent";

function UserListPage() {
  const { data, isLoading, refetch } = useGetUserList();

  return (
    <BoxContainer>
      {isLoading || !data ? (
        <>Is Loading</>
      ) : (
        <UserListComponent users={data} />
      )}
    </BoxContainer>
  );
}

export default UserListPage;

const BoxContainer = styled(Box)`
  padding: 16px;
`;
