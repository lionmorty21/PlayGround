/* Club and competition registry. New nations can be added as data without changing game systems. */
const COMPETITIONS = [
 {country:'Brasil',flag:'🇧🇷',confed:'América do Sul',leagues:['Série A','Série B','Série C','Série D']},
 {country:'Argentina',flag:'🇦🇷',confed:'América do Sul',leagues:['Primera División','Primera Nacional','Federal A']},
 {country:'Uruguai',flag:'🇺🇾',confed:'América do Sul',leagues:['Primera División','Segunda División']},
 {country:'Chile',flag:'🇨🇱',confed:'América do Sul',leagues:['Primera División','Primera B']},
 {country:'Colômbia',flag:'🇨🇴',confed:'América do Sul',leagues:['Primera A','Primera B']},
 {country:'Paraguai',flag:'🇵🇾',confed:'América do Sul',leagues:['Primera División','División Intermedia']},
 {country:'Equador',flag:'🇪🇨',confed:'América do Sul',leagues:['Serie A','Serie B']},
 {country:'Peru',flag:'🇵🇪',confed:'América do Sul',leagues:['Liga 1','Liga 2']},
 {country:'Inglaterra',flag:'🏴',confed:'Europa',leagues:['Premier League','Championship','League One','League Two']},
 {country:'Espanha',flag:'🇪🇸',confed:'Europa',leagues:['LaLiga','LaLiga 2','Primera Federación']},
 {country:'Alemanha',flag:'🇩🇪',confed:'Europa',leagues:['Bundesliga','2. Bundesliga','3. Liga']},
 {country:'Itália',flag:'🇮🇹',confed:'Europa',leagues:['Serie A','Serie B','Serie C']},
 {country:'França',flag:'🇫🇷',confed:'Europa',leagues:['Ligue 1','Ligue 2','Championnat National']},
 {country:'Portugal',flag:'🇵🇹',confed:'Europa',leagues:['Primeira Liga','Liga Portugal 2','Liga 3']},
 {country:'Holanda',flag:'🇳🇱',confed:'Europa',leagues:['Eredivisie','Eerste Divisie']},
 {country:'Bélgica',flag:'🇧🇪',confed:'Europa',leagues:['Primeira Divisão','Segunda Divisão']},
 {country:'Escócia',flag:'🏴',confed:'Europa',leagues:['Premiership','Championship']},
 {country:'Turquia',flag:'🇹🇷',confed:'Europa',leagues:['Süper Lig','1. Lig']},
 {country:'Suíça',flag:'🇨🇭',confed:'Europa',leagues:['Super League','Challenge League']},
 {country:'Áustria',flag:'🇦🇹',confed:'Europa',leagues:['Bundesliga','2. Liga']},
 {country:'Rússia',flag:'🇷🇺',confed:'Europa',leagues:['Primeira Divisão','Segunda Divisão']},
 {country:'Grécia',flag:'🇬🇷',confed:'Europa',leagues:['Super League','Super League 2']},
 {country:'Estados Unidos',flag:'🇺🇸',confed:'América do Norte',leagues:['MLS','USL Championship']},
 {country:'México',flag:'🇲🇽',confed:'América do Norte',leagues:['Liga MX','Liga de Expansión']},
 {country:'Canadá',flag:'🇨🇦',confed:'América do Norte',leagues:['Canadian Premier League']},
 {country:'Japão',flag:'🇯🇵',confed:'Ásia',leagues:['J1 League','J2 League','J3 League']},
 {country:'Coreia do Sul',flag:'🇰🇷',confed:'Ásia',leagues:['K League 1','K League 2']},
 {country:'Arábia Saudita',flag:'🇸🇦',confed:'Ásia',leagues:['Saudi Pro League','First Division']},
 {country:'China',flag:'🇨🇳',confed:'Ásia',leagues:['Chinese Super League','League One']},
 {country:'África do Sul',flag:'🇿🇦',confed:'África',leagues:['Premier Division']},
 {country:'Egito',flag:'🇪🇬',confed:'África',leagues:['Premier League']},
 {country:'Marrocos',flag:'🇲🇦',confed:'África',leagues:['Botola Pro']}
];
const CLUBS = [
 ['Flamengo','FLA','Brasil','Série A','Maracanã',78838,93,82],['Palmeiras','PAL','Brasil','Série A','Allianz Parque',43713,91,78],['São Paulo','SAO','Brasil','Série A','Morumbis',66795,86,62],['Corinthians','COR','Brasil','Série A','Neo Química Arena',49205,86,58],['Atlético Mineiro','CAM','Brasil','Série A','Arena MRV',46000,85,55],['Botafogo','BOT','Brasil','Série A','Nilton Santos',46631,82,47],['Grêmio','GRE','Brasil','Série A','Arena do Grêmio',55662,82,44],['Fluminense','FLU','Brasil','Série A','Maracanã',78838,83,47],['Santos','SAN','Brasil','Série B','Vila Belmiro',20000,79,31],['Coritiba','CFC','Brasil','Série B','Couto Pereira',40502,75,25],['Goiás','GOI','Brasil','Série B','Hailé Pinheiro',14525,73,22],['Ceará','CEA','Brasil','Série B','Arena Castelão',63903,76,27],['Vasco da Gama','VAS','Brasil','Série A','São Januário',21880,81,39],['Cruzeiro','CRU','Brasil','Série A','Mineirão',61846,81,40],
 ['Manchester City','MCI','Inglaterra','Premier League','Etihad Stadium',53400,96,125],['Liverpool','LIV','Inglaterra','Premier League','Anfield',61276,93,98],['Arsenal','ARS','Inglaterra','Premier League','Emirates Stadium',60704,92,95],['Manchester United','MUN','Inglaterra','Premier League','Old Trafford',74310,91,90],['Chelsea','CHE','Inglaterra','Premier League','Stamford Bridge',40341,89,80],['Tottenham','TOT','Inglaterra','Premier League','Tottenham Hotspur Stadium',62850,87,73],['Aston Villa','AVL','Inglaterra','Premier League','Villa Park',42657,82,55],['Newcastle United','NEW','Inglaterra','Premier League','St James’ Park',52305,84,66],
 ['Real Madrid','RMA','Espanha','LaLiga','Santiago Bernabéu',83186,98,150],['Barcelona','BAR','Espanha','LaLiga','Estadi Olímpic',55926,94,105],['Atlético de Madrid','ATM','Espanha','LaLiga','Metropolitano',70460,90,84],['Sevilla','SEV','Espanha','LaLiga','Ramón Sánchez-Pizjuán',43883,83,51],['Real Sociedad','RSO','Espanha','LaLiga','Reale Arena',39500,82,47],['Valencia','VAL','Espanha','LaLiga','Mestalla',49430,82,48],
 ['Benfica','BEN','Portugal','Primeira Liga','Estádio da Luz',64642,91,75],['Porto','POR','Portugal','Primeira Liga','Estádio do Dragão',50033,90,68],['Sporting CP','SCP','Portugal','Primeira Liga','Estádio José Alvalade',50095,88,58],['Braga','BRA','Portugal','Primeira Liga','Estádio Municipal de Braga',30286,82,36],
 ['Boca Juniors','BOC','Argentina','Primera División','La Bombonera',54000,88,52],['River Plate','RIV','Argentina','Primera División','Monumental',84567,92,70],['Racing Club','RAC','Argentina','Primera División','Presidente Perón',51389,81,31],['Independiente','IND','Argentina','Primera División','Libertadores de América',52000,82,34]
].map(([name,short,country,division,stadium,capacity,rep,budget])=>({id:short.toLowerCase(),name,short,country,division,stadium,capacity,reputation:rep,budget:budget*1000000,colors:clubColor(short)}));
function clubColor(code){const c={FLA:'#e84b42',PAL:'#67c974',SAO:'#f1efdf',COR:'#e7ece7',CAM:'#e9e9dc',BOT:'#eee8d8',GRE:'#7aafe8',FLU:'#8dd58a',SAN:'#eeeeeb',CFC:'#78a867',GOI:'#6cc476',CEA:'#eee',VAS:'#df4844',CRU:'#62a4ed',MCI:'#77b7e7',LIV:'#de5c52',ARS:'#e65353',MUN:'#e4534f',CHE:'#5ca1ec',TOT:'#e7eeed',AVL:'#e65c61',NEW:'#e6e9e8',RMA:'#ebede6',BAR:'#a86dca',ATM:'#df5852',SEV:'#e4e6df',RSO:'#79afe7',VAL:'#e98158',BEN:'#e34b43',POR:'#64a9e3',SCP:'#63c674',BRA:'#e85c53',BOC:'#e5bf45',RIV:'#e2e8e4',RAC:'#80b6e5',IND:'#e8524d'};return c[code]||'#c8ef62'}
const FIRST_NAMES=['Lucas','Mateus','Gabriel','Pedro','Rafael','João','Davi','Bruno','Caio','André','Thiago','Enzo','Marcos','Felipe','Nicolas','Diego','Gustavo','Vitor','Leonardo','Samuel','Antoine','Luca','Marco','Daniel','Álvaro','Hugo','Tomás','Ethan','Noah','Jack','Oliver','Oscar','Milan','Nico','Julián','Facundo','Santiago','Agustín','Benjamín','Matías'];
const LAST_NAMES=['Silva','Santos','Oliveira','Costa','Pereira','Souza','Almeida','Ribeiro','Carvalho','Ferreira','Gomes','Martins','Lima','Barbosa','Mendes','Moreira','Rossi','Bianchi','Torres','Moreno','Romero','Castro','Navarro','Ruiz','Lopez','Martin','Garcia','Walker','Taylor','Wilson','Murphy','Bennett','Morris','Duarte','Pinto','Azevedo','Farias','Vargas','Cabrera','Herrera'];
const POSITIONS=['GOL','ZAG','ZAG','LD','LE','VOL','MC','MC','MEI','PD','PE','ATA','ZAG','VOL','MC','ATA','LD','LE','GOL','MEI','PD','ATA'];
const FORMATIONS={'4-3-3':['GOL','LD','ZAG','ZAG','LE','VOL','MC','MEI','PD','ATA','PE'],'4-2-3-1':['GOL','LD','ZAG','ZAG','LE','VOL','MC','PD','MEI','PE','ATA'],'3-5-2':['GOL','ZAG','ZAG','ZAG','ALA','VOL','MC','MC','ALA','ATA','ATA']};
