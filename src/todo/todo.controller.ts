import { Controller, Get } from '@nestjs/common';

@Controller('todo') // コントローラークラスの宣言とパスの宣言
export class TodoController {
  @Get('list') // HTTPメソッドとパスの指定
  getList() {
    return [
      {
        title: '牛乳を買いに行く',
        due_on: '2022-12-24',
        done: false,
      },
    ];
  }
}
