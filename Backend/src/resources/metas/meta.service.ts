import { PrismaClient, Meta} from '@prisma/client';

const prisma = new PrismaClient();

export const jaExiste = async (nomeMeta: string): Promise<boolean> => {
    const meta = await prisma.meta.findUnique({ where: { nomeMeta } }); 
    if (meta){
        return true;
    }
    return false;
     }

export const createMeta = async (cpf: string, nome: string, valor: number, data: string): Promise<Meta> => {
  return await prisma.meta.create({
      data: {
            userId: cpf,
            nomeMeta: nome,
            meta: valor,
            dataMeta: data,
      },
  });
}

export const getMetas = async (cpf: string): Promise<Meta[] | null> => {
    return await prisma.meta.findMany({ 
      where:{
        User: {
            cpf: cpf
        }
      } 
    });
}
export const updateMeta = async (nome: string, valor: number, data: string): Promise<Meta> => {
  return await prisma.meta.update({
    where: {nomeMeta: nome },
    data: { meta: valor, dataMeta: data },
  });
}

export const deleteMeta = async ( nomeMeta: string): Promise<Meta> => {
  return await prisma.meta.delete({
    where: { nomeMeta: nomeMeta },
  });
}
