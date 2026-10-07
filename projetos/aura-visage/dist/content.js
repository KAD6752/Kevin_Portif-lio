// Substitua os campos null somente por informações oficiais verificadas.
export const brand = { name: 'Aura Visage Spa', whatsapp: '5511933016741', whatsappLabel: '(11) 93301-6741', address: 'Rua Pascoal Souza, 66 — Vila Maria Luísa, Bairro do Limão', hours: 'De terça a sábado, das 09h às 18h', instagram: 'https://www.instagram.com/auravisagespa/', officialAssets: true };
export const needs = [
 {name:'Rosto',label:'Estética facial',text:'Limpeza de pele, hidratação e cuidado facial.',detail:'Conheça os serviços faciais e converse sobre a indicação adequada para você.'},
 {name:'Corpo',label:'Estética corporal',text:'Drenagem e cuidado corporal no seu ritmo.',detail:'Explore as opções de cuidado corporal. A indicação é individual e depende de avaliação.'},
 {name:'Cabelos',label:'Cabelos e terapia capilar',text:'Corte, escova, tratamentos e atenção aos fios.',detail:'Do cuidado cotidiano aos tratamentos capilares, consulte as opções no Trinks.'},
 {name:'Relaxamento',label:'Massagens e bem-estar',text:'Uma pausa para desacelerar e estar presente.',detail:'Massagens em diferentes durações e experiências de spa para seu momento de pausa.'},
 {name:'Quiropraxia',label:'Quiropraxia',text:'Combinações com liberação miofascial ou ventosa.',detail:'Consulte a disponibilidade com Lucas e converse sobre a adequação do atendimento.'},
 {name:'Mãos e pés',label:'Manicure e pedicure',text:'Tempo para os detalhes do seu autocuidado.',detail:'Encontre serviços de manicure e pedicure no catálogo de agendamento.'},
 {name:'Depilação',label:'Depilação',text:'Opções de cuidado para diferentes regiões.',detail:'Consulte regiões atendidas, valores e disponibilidade no Trinks.'},
 {name:'Olhar',label:'Sobrancelhas e beleza',text:'Cuidados que acompanham sua expressão.',detail:'Conheça as opções para sobrancelhas e outros serviços de beleza no catálogo completo.'},
 {name:'Autocuidado',label:'Seu momento AURA',text:'Ainda não sabe por onde começar? Vamos conversar.',detail:'A recepção pode ajudar você a conhecer os serviços e escolher o próximo passo.'}
];
// Cada campanha usa o mesmo componente. Não há ofertas ou procedimentos presumidos.
export const campaigns = {
 'dia-das-maes': { name:'Dia das Mães', title:'Hoje, o cuidado é para ela.', text:'Um convite para dedicar tempo a quem faz parte da sua história.', interest:'Autocuidado' },
 'dia-dos-pais': { name:'Dia dos Pais', title:'Cuidar de si também faz parte.', text:'Um momento para desacelerar e abrir espaço para o bem-estar.', interest:'Relaxamento' },
 'outubro-rosa': { name:'Outubro Rosa', title:'Cuidado começa com acolhimento.', text:'Um espaço de respeito, escuta e autocuidado. Bem-estar não substitui acompanhamento médico nem ações de prevenção.', interest:'Autocuidado' },
 natal: { name:'Natal', title:'Presença. Tempo. Cuidado.', text:'Inspire-se em um presente que abre espaço para uma pausa.', interest:'Autocuidado' },
 verao: { name:'Verão', title:'Seu corpo, seu ritmo.', text:'Viva a estação com cuidado consciente e respeito à sua individualidade.', interest:'Corpo' },
 inverno: { name:'Inverno', title:'Uma estação para acolher-se.', text:'Encontre tempo para desacelerar e cuidar de você.', interest:'Relaxamento' },
 noivas: { name:'Noivas', title:'Um tempo seu, antes do sim.', text:'Autocuidado e bem-estar para viver cada etapa no seu ritmo.', interest:'Autocuidado' },
 recovery: { name:'Recovery', title:'Respeite o seu tempo.', text:'Converse com a equipe sobre seu momento e as possibilidades de cuidado.', interest:'Recuperação' }
};

