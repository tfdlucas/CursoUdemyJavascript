function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    
    if (!data) { // Se não for uma data, vai gera uma automaticamente
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit', // Hora terá 2 digitos
        minute: '2-digit', // Minutos terá 2 digitos
        second: '2-digit', // Segundos terá 2 digitos
        hour12: false // Retorna no formato 24 horas
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.');
}