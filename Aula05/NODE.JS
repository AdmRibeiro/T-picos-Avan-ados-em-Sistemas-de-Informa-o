// Ademir Caetano Ribeiro
// RGM 32528647

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 8080;
const API_URL = 'https://www.boredapi.com/api/activity';

app.get('/', async (req, res) => {
    try {
        
        const response = await fetch(API_URL);
        
        
        if (response.ok) {
            
            const data = await response.json();
            
            
            console.log(data);
            
            
            res.json(data);
        } else {
            
            throw new Error('Erro ao requisitar a API');
        }
    } catch (error) {
        
        console.error(error.message);
        res.status(500).json({ error: 'Erro ao processar a requisição' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});