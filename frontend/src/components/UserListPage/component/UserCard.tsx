import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import { User } from "../../../types/userType";
import AvatarImageUpload from "../../Common/AvatarImageUpload";
import { config } from "../../../config/config";
import { dataFormatConvertor } from "../../../util/dateFormatter";

interface UserCardProps {
  onClick: (userId: number) => void;
  user: User;
  bottomRightComponent?: React.ReactNode;
}

function UserCard({ user, onClick, bottomRightComponent }: UserCardProps) {
  return (
    <StackContainer
      spacing={1}
      alignItems="center"
      direction="row"
      onClick={() => {
        onClick(user.id);
      }}
    >
      <StyledBottomRightBox>{bottomRightComponent}</StyledBottomRightBox>

      <AvatarImageUpload
        defaultImageUrl={
          user.profileImage?.path &&
          config.baseUrl + "/" + user.profileImage?.path
        }
        disabled={true}
      />
      <Stack>
        <Typography>name: {user.name}</Typography>
        <Typography>email: {user.email}</Typography>
      </Stack>
    </StackContainer>
  );
}

export default UserCard;

const StackContainer = styled(Stack)`
  padding: 12px 8px;
  position: relative;
  cursor: pointer;
  border: solid 1px ${(props) => props.theme.palette.grey[400]};
  border-radius: 8px;

  &:hover {
    background: ${(props) => props.theme.palette.primary.light};
  }
`;

const StyledBottomRightBox = styled(Box)`
  position: absolute;
  right: 8px;
  bottom: 0px;
`;
