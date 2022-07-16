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

  React.useEffect(() => {
    if (imageUrl && setImageFile) {
      if (
        !inputFile ||
        !inputFile.current ||
        !inputFile.current.files ||
        inputFile.current.files.length === 0
      ) {
        return;
      }

      setImageFile(inputFile.current.files[0]);
    }
  }, [imageUrl]);

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
