import { supabase } from '../supabaseClient';

export const addRecord = async (name, birthdate, reason) => {
    
    const { data, error } = await supabase
        .from('records')
        .insert([{ name, birthdate, reason }]);

    if (error) {
        throw new Error('Erro ao adicionar registro: ' + error.message);
    }

    return data;
};

export const getRecords = async () => {
    const { data, error } = await supabase
        .from('records')
        .select('*');

    if (error) {
        throw new Error('Erro ao obter registros: ' + error.message);
    }

    return data;
};
