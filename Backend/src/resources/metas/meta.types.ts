import { Meta } from '@prisma/client';


export type metaDTO = Pick<Meta, 'nomeMeta' | 'meta' | 'dataMeta'>;

export type deleteMetaDTO = Pick<Meta, 'nomeMeta'>;

export type getMetaDTO = Pick<Meta, 'nomeMeta'>;