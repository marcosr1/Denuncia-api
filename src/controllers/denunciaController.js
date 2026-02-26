import { Denuncia } from "../models/Index.js";
import { poligono } from "../data/cep63488000.js";
import { pontoDentroDoPoligono } from "../utils/validarCEP.js";

export const criarDenuncia = async ( req, res ) => {
    try {
        const { tipo, descricao, latitude, longitude, imagem } = req.body;

        const permitido = pontoDentroDoPoligono({ latitude, longitude, poligono });

        if (!permitido) return res.status(400).json({ error: "Localização fora da área permitida" });

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

export const updateDenuncia = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) return res.status(400).json({ error: "Status é obrigatório" });

        const denuncia = await Denuncia.update({ status }, {where: {id} } );
        return res.status(200).json({ message: "Denúncia atualizada com sucesso" });
    } catch ( error ) {
        return res.status(500).json({ error: "Erro ao atualizar denúncia" });
    }
};

export const votarDenuncia = async ( req, res ) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "ID é obrigatório" });
        
        const denuncia = await Denuncia.findByPk(id);
  
        await denuncia.increment("votos");
        return res.status(200).json({ message: "Voto registrado com sucesso" });
    } catch ( error ) {
        return res.status(500).json({ error: "Erro ao votar na denúncia" });
    }
};