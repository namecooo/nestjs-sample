import { IsNotEmpty } from 'class-validator';

// `POST` `/todo` が受け取るリクエストの定義
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;
}
