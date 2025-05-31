import { PrismaClient, StatusAnimal, UsuarioTipo } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Populando base de dados...');

  // --- TIPOS DE ANIMAIS ---
  await prisma.tipoAnimal.createMany({
    data: [
      { nome: 'Cachorro' },
      { nome: 'Gato' },
      { nome: 'Coelho' },
      { nome: 'Papagaio' },
      { nome: 'Hamster' },
      { nome: 'Cavalo' },
      { nome: 'Tartaruga' },
      { nome: 'Porquinho-da-índia' },
      { nome: 'Arara' },
      { nome: 'Pombo' },
    ],
  });

  const tiposCriados = await prisma.tipoAnimal.findMany();

  // --- RAÇAS ---
  const racasData = tiposCriados.flatMap((tipo) => {
    return Array.from({ length: 1 }, (_, i) => ({
      nome: `${tipo.nome} Raça ${i + 1}`,
      tipoAnimalId: tipo.id,
    }));
  });

  await prisma.racaAnimal.createMany({ data: racasData });
  const racasCriadas = await prisma.racaAnimal.findMany();

  // --- FILIAIS ---
  await prisma.filial.createMany({
    data: [
      { nome: 'Jaraguá do Sul', cidade: 'Jaraguá do Sul', estado: 'SC' },
      { nome: 'Joinville', cidade: 'Joinville', estado: 'SC' },
      { nome: 'Blumenau', cidade: 'Blumenau', estado: 'SC' },
      { nome: 'Itajaí', cidade: 'Itajaí', estado: 'SC' },
      { nome: 'São Paulo', cidade: 'São Paulo', estado: 'SP' },
    ],
  });

  const filiaisCriadas = await prisma.filial.findMany();

  // --- USUÁRIOS ---
  await prisma.usuario.createMany({
    data: filiaisCriadas.map((filial, i) => ({
      nome: `Usuário ONG ${i + 1}`,
      email: `usuario${i + 1}@helpet.org`,
      senhaHash: `senha${i + 1}`,
      tipo: UsuarioTipo.ONG,
      filialId: filial.id,
    })),
  });

  // --- TUTORES ---
  await prisma.tutor.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      nome: `Tutor ${i + 1}`,
      cpf: `0000000000${i + 1}`,
      email: `tutor${i + 1}@email.com`,
      telefone: `(47) 9999-000${i}`,
      endereco: `Rua dos Bichinhos, nº ${i + 1}`,
    })),
  });

  const tutoresCriados = await prisma.tutor.findMany();

  // --- ANIMAIS ---
  const animais: any[] = [];

  for (let i = 0; i < 10; i++) {
    const tipo = tiposCriados[i % tiposCriados.length];
    const raca = racasCriadas.find((r) => r.tipoAnimalId === tipo.id)!;
    const filial = filiaisCriadas[i % filiaisCriadas.length];
    const tutor =
      i % 2 === 0 ? tutoresCriados[i % tutoresCriados.length] : null;

    const animal = await prisma.animal.create({
      data: {
        nome: `Animal ${i + 1}`,
        idade: `${1 + (i % 5)} anos`,
        genero: i % 2 === 0 ? 'Macho' : 'Fêmea',
        localResgate: `Bairro ${i + 1}`,
        estadoSaude: i % 3 === 0 ? 'Doente' : 'Saudável',
        dataResgate: new Date(),
        status:
          i % 3 === 0
            ? StatusAnimal.FALECIDO
            : i % 2 === 0
              ? StatusAnimal.ADOTADO
              : StatusAnimal.EM_ADOCAO,
        tipoAnimalId: tipo.id,
        racaAnimalId: raca.id,
        filialId: filial.id,
        tutorId: tutor?.id,
      },
    });

    // --- IMAGENS ---
    await prisma.imagemAnimal.createMany({
      data: [
        {
          url: `/images/${animal.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          animalId: animal.id,
        },
        {
          url: `/images/${animal.nome.toLowerCase().replace(/\s+/g, '-')}-2.jpg`,
          animalId: animal.id,
        },
      ],
    });

    animais.push(animal);
  }

  console.log('✅ Dados populados com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
