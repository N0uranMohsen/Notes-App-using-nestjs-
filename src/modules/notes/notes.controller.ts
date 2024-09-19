import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { AddNoteDto, ParamDto, UpdateNoteDto } from './dto/notes.dto';
import { AuthGuard } from 'src/core/Guard/auth.guard';

@Controller('note')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private noteService:NotesService){}
    @Post()
    addNote(@Body() body:AddNoteDto,@Req() req:any){
      body.user=req.user._id
    return this.noteService.addNote(body)
    }

    @Get()
    getNotes(){
    return this.noteService.getNotes()
    }
    @Delete(':id')
    dleteNote(@Param() params :ParamDto){
    return this.noteService.delteNote(params.id)
    }

    @Put('/:id')
    updateNote(@Param() params :ParamDto,@Body() body:UpdateNoteDto){
    return this.noteService.updateNote(params.id,body)
    }

}
