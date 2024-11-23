import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('chats');
  }
}
