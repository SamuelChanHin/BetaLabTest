import { Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { addFriendApi } from "../../api/userApi";
import { config } from "../../config/config";
import { useAuth } from "../../provider/AuthProvider";
import { FriendStatus, User } from "../../types/userType";
import AvatarImageUpload from "../Common/AvatarImageUpload";
import { toast } from "react-toastify";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

interface UserDetailComponentProps {
  user: User;
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<User, Error>>;
}

function UserDetailComponent({ user, refetch }: UserDetailComponentProps) {
  const { user: clientUser } = useAuth(); // clientUser is login user
  const { email, name, phone, address, companyName, profileImage, friend } =
    user; // user is viewing user
  const isAlreadyFriend = Boolean(friend);

  const addFriend = async () => {
    if (!clientUser) return;
    try {
      await addFriendApi(clientUser?.id, {
        responderUserId: user.id,
      });
      toast.success("Successfully add new friend");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add friend");
    }
  };

  if (!clientUser) return null;

  return (
    <StackContainer>
      <AvatarImageUpload
        defaultImageUrl={
          profileImage?.path && config.baseUrl + "/" + profileImage?.path
        }
        disabled={true}
      />
      <Typography>email: {email}</Typography>
      <Typography>name: {name}</Typography>
      <Typography>phone number: {phone}</Typography>
      <Typography>address: {address}</Typography>
      <Typography>company name: {companyName}</Typography>

      {user.id !== clientUser.id && ( // user.id === clientUser.id mean the login user viewing own profile
        <Button
          variant="contained"
          disabled={isAlreadyFriend}
          onClick={addFriend}
        >
          {isAlreadyFriend ? "Added" : "Add Friend"}
        </Button>
      )}
    </StackContainer>
  );
}

export default UserDetailComponent;

const StackContainer = styled(Stack)`
  padding: 30px;
  border: solid 1px ${(props) => props.theme.palette.grey[400]};
  border-radius: 8px;
`;
