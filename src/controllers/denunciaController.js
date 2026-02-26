import { Denuncia } from "../models/Index.js";

export const criarDenuncia = async ( req, res ) => {
    try {
        const { tipo, descricao, latitude, longitude, imagem } = req.body;

        console.log(req.body);

        if ( !tipo || !descricao || !latitude || !longitude ) return res.status(400).json({ error: "Tipo, descrição e localização são obrigatórios" });


        const novaDenuncia = await Denuncia.create({ tipo, descricao, latitude, longitude, imagem });
        res.status(201).json(novaDenuncia);
    } catch ( error ) {
        console.log(error);
        return res.status(500).json({ error: "Erro ao criar denúncia" });
    }
};

export const listarDenuncias = async ( req, res ) => {
    try {
        const denuncias = await Denuncia.findAll();
        res.status(200).json(denuncias);
    } catch ( error ) {
        return res.status(500).json({ error: "Erro ao listar denúncias" });
    }
};