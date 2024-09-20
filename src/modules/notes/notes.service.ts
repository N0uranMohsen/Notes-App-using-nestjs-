import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schema/notes.schema';
import { ParamDto } from './dto/notes.dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Notes.name) private notesModel :Model<Notes>){}
           //add note
        addNote =async(note:any)=>{
         const data=  await this.notesModel.insertMany(note);
            return {message:"sucess",data}
        }


        //get all notes 
        getNotes =async()=>{
           const notes=await this.notesModel.find();
            return {message:"sucess",data:notes}
        }

        //update note
        updateNote =async(id:any,note:any)=>{

           const  notes =  await this.notesModel.findByIdAndUpdate(id,note,{new :true});//{},null
           if(!notes)
            throw new HttpException('this note note found', HttpStatus.NOT_FOUND);
            return {message:"sucess",data:notes}
        }

        //delte note

     delteNote =async(id:any)=>{

           const  notes = await this.notesModel.findById(id)
           // this.notesModel.findOneAndDelete({_id:id});//{},nul
          
           if(!notes)
            throw new HttpException('this note note found', 404);

            return {message:"sucess",data:notes}
        }

}
