import { Request, Response } from "express";
import Usuario from '../models/usuario';


export const getUsuarios=async(req:Request,res:Response)=>{

    const usuarios=await Usuario.findAll();

    res.json(usuarios);
}


export const getUsuario=async(req:Request,res:Response)=>{
    
    const {id}=req.params;

    res.json({
        msg:'getUsuario',
        id
    })
}

export const postUsuario=(req:Request,res:Response)=>{
    
    const {body}=req.params;

    res.json({
        msg:'pustUsuario',
        body
    })
}


export const putUsuario=(req:Request,res:Response)=>{
    const {id}=req.params;
    const {body}=req.params;

    res.json({
        msg:'pustUsuario',
        body,
        id
    })
}

export const deleteUsuario=(req:Request,res:Response)=>{
    const {id}=req.params;

    res.json({
        msg:'deletetUsuario',
        id
    })
}