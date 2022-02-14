import { Module } from "@nestjs/common";
import { ItemModule } from "./items/item.model";

@Module({
  imports: [ItemModule],
  providers: [],
  controllers: [],
  exports: []
})


export class apiModule { }