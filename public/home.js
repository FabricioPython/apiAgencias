document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Impede o recarregamento da página
    
    const filtro = document.getElementById('filtro').value;
    const valor = document.getElementById('valor').value;
    
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsGrid = document.getElementById('resultsGrid');
    const noResults = document.getElementById('noResults');
    const loading = document.getElementById('loading');

    // Limpa a tela para a nova busca
    resultsContainer.classList.add('hidden');
    noResults.classList.add('hidden');
    resultsGrid.innerHTML = '';
    loading.classList.remove('hidden');

    try {
        let url = '';
        if (filtro === 'cgc') {
            url = `/agencia/${encodeURIComponent(valor)}`;
        } else if (filtro === 'uf') {
            url = `/agencia/uf/${encodeURIComponent(valor).toUpperCase()}`;
        } else if (filtro === 'municipio') {
            url = `/municipio/${encodeURIComponent(valor)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        
        const jsonRes = await response.json();
        // A rota de municipio retorna { "Municipios": [...] }, as outras retornam direto o array
        const agencias = jsonRes.Municipios ? jsonRes.Municipios : jsonRes;
        
        loading.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        
        // Se o array de agências voltar vazio ou nulo
        if (!agencias || agencias.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        
        // Cria os cards para cada agência retornada
        agencias.forEach(agencia => {
            const card = document.createElement('div');
            card.className = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2 relative';
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-2 border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-lg text-blue-900 leading-tight pr-4 capitalize">${agencia.Nome || 'Agência'}</h3>
                    <span class="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md shrink-0">CGC: ${agencia.CGC || 'N/A'}</span>
                </div>
                <div class="flex-grow space-y-3 mt-2">
                    <p class="text-sm text-slate-600 flex items-start gap-2">
                        <svg class="w-4 h-4 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span class="capitalize">${agencia.Logradouro || 'Endereço não informado'}</span>
                    </p>
                    <p class="text-sm text-slate-600 flex items-center gap-2">
                        <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                        <span class="capitalize">${agencia.Municipio || 'N/A'} - <span class="font-bold uppercase">${agencia.UF || 'N/A'}</span> <span class="text-slate-400 ml-1">CEP: ${agencia.CEP || 'N/A'}</span></span>
                    </p>
                    <p class="text-sm text-slate-600 flex items-center gap-2">
                        <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span>${agencia.Telefone || 'Telefone não informado'}</span>
                    </p>
                    <div class="mt-2 bg-slate-50 rounded-lg p-2 border border-slate-100">
                        <p class="text-xs text-slate-500 flex items-start gap-1.5">
                            <svg class="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span class="italic font-medium">${agencia.Atendimento || 'Horário de atendimento não informado'}</span>
                        </p>
                    </div>
                    
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${agencia.Logradouro}, ${agencia.Municipio} - ${agencia.UF}, ${agencia.CEP}`)}" target="_blank" rel="noopener noreferrer" class="mt-4 flex items-center justify-center gap-2 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-semibold py-2 px-4 rounded-lg transition-colors text-sm shadow-sm">
                        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                        Ver rotas no Google Maps
                    </a>
                </div>
            `;
            resultsGrid.appendChild(card);
        });
        
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        loading.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        noResults.classList.remove('hidden');
        
        noResults.innerHTML = `
            <p class="font-bold text-red-700">Ocorreu um erro ao consultar os dados.</p>
            <p class="text-sm text-red-600 mt-1">Verifique se o backend está rodando e se a rota está correta.</p>
        `;
        noResults.className = 'bg-red-50 border border-red-200 px-5 py-4 rounded-lg text-center shadow-sm';
    }
});
