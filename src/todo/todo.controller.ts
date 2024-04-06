import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('todo') // コントローラークラスの宣言とパスの宣言
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list') // HTTPメソッドとパスの指定
  async getList() {
    const result = await this.prisma.task.findMany();

    return [...result];
  }

  @Post('')
  // ルートに送信されたリクエスト情報を @Body デコレータで受け取ることが可能
  // create-task.dto.ts で定義した方を使用することで、処理内でも型の情報が利用できる
  async add(@Body() task: CreateTaskDto) {
    // create で insert 処理
    // createMany: 複数行の格納
    // upsert: update or insert
    await this.prisma.task.create({
      data: task,
    });

    return {
      status: 'OK',
    };
  }
}
