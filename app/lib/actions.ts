import { request } from "http";

export async function authenticate(username: string, password: string): Promise<string | null> {
    const url = 'http://localhost:8080/login'; 

    const body = JSON.stringify({ username, password });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body, // Corrigido para não fazer JSON.stringify duas vezes
    };
    
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            return data.accessToken;
        } else {
            console.log('Response status:', response.status);
            console.log('Response status text:', response.statusText);
            return null;
        }
    } catch (error) {
        console.log('Erro na requisição:', error);
        return null;
    }
}