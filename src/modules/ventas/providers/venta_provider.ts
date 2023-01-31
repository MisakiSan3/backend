/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { DataSourceEnum, RepositoryEnum } from '../../../shared/enums/index';
import { ProductEntity } from '../models/product.entity';
import { CategoryEntity } from '../models/category.entity';

export const ventasProviders = [
  {
    // eslint-disable-next-line prettier/prettier
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];
