import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Notes, NotesSchema } from 'src/core/schema/notes.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: Notes.name, schema: NotesSchema }])],
    providers: [NotesService,JwtService],
    controllers: [NotesController]
})
export class NotesModule {}
