import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const profileImageStore = {
  limits: {
    fileSize: 3000000, // only allow 3MB
  },
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      // Generating a 32 random chars long string
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      //Calling the callback passing the random name generated with the original extension name
      cb(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
};
