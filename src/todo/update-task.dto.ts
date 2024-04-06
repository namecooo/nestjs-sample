import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
