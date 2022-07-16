import { Avatar, styled, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

interface ImageUploadProps {
  size?: number | string;
  defaultImageUrl?: string;
  setImageFile?: React.Dispatch<React.SetStateAction<any>>;
  disabled?: boolean;
}

function AvatarImageUpload({
  size = "100px",
  defaultImageUrl,
  setImageFile,
  disabled = false,
}: ImageUploadProps) {
  const inputFile = React.useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = React.useState<any>(defaultImageUrl);

  const onChange = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setImageUrl([reader.result]);
    };
  };

  return (
    <>
      <input
        ref={inputFile}
        onChange={onChange}
        disabled={disabled}
        style={{ display: "none" }}
        accept="image/*"
        id="icon-button-file"
        type="file"
      />
      <StyledAvatar
        disabled={disabled}
        style={{ width: size, height: size }}
        onClick={() => {
          if (inputFile.current) {
            inputFile.current?.click();
          }
        }}
        src={imageUrl}
      >
        {imageUrl && <PersonIcon />}
      </StyledAvatar>
    </>
  );
}

export default AvatarImageUpload;

const StyledAvatar = styled(Avatar)<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
