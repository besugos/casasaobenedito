const SHEET_ID = '1Uk91CZ_4bjEGsuqvw8t0cnsCHPZBOhQvbB53dia1DjE';
const API_KEY = 'AIzaSyCNDiGKtKLfBLtu1p3Te2JH8scf98mCamM';
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values`;

export async function addRecord(name, age, email) {
    const range = 'Sheet1!A:D'; // Supondo que a primeira folha seja usada
    const timestamp = Date.now();
    const date = new Date(timestamp).toLocaleString();

    const values = [
        [timestamp, name, age, email, date]
    ];

    const body = {
        "range": range,
        "majorDimension": "ROWS", // Explicitando a dimensão (opcional)
        "values": values
    };

    const response = await fetch(`${BASE_URL}/${range}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error('Erro ao salvar o registro');
    }

    return response.json();
}

export async function getRecords() {
    const range = 'Sheet1!A:E';
    const response = await fetch(`${BASE_URL}/${range}?key=${API_KEY}`);

    if (!response.ok) {
        // throw new Error('Erro ao obter os registros');
        const users = [
            { id: '1', name: 'Rodolfo', age: 33, email: 'rod@email.com' },
            { id: '2', name: 'Jorge', age: 25, email: 'jrg@email.com' },
            { id: '3', name: 'Aline', age: 28, email: 'aline@email.com' }
        ]

        return users; 
    }

    const data = await response.json();
    let result = data.values.map(([id, name, age, email, date]) => ({
        id,
        name,
        age,
        email,
        date
    }));

    if (result.length > 0) {
        return result
    } else {
        const users = [
            { id: '1', name: 'Rodolfo', age: 33, email: 'rod@email.com' },
            { id: '2', name: 'Jorge', age: 25, email: 'jrg@email.com' },
            { id: '3', name: 'Aline', age: 28, email: 'aline@email.com' }
        ]

        return users; 
    }
}
