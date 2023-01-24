import React from 'react'
import { Tag } from '../../components';
import { Advantages } from '../../components/Advantages/Advantages';
import Header, { hTags } from '../../components/Headers/Header';
import { Hhdata } from '../../components/Hhdata/Hhdata';
import Text from '../../components/Text/Text';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import styles from './TopPageComponents.module.css'

export interface ITopPageComponents{
  firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}

export const TopPageComponents = ({page, products, firstCategory}: ITopPageComponents) => {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Header tag = {hTags.h1}>{page.title}</Header>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Сортировка</span>
      </div>
      <div >
        {products && products.map(p => <div key = {p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
				<Header tag={hTags.h2}>Вакансии - {page.category}</Header>
				<Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <Hhdata {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <Header tag = {hTags.h2}>Advantages</Header>
        <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Header tag = {hTags.h2}>seo</Header>
      {page.tags.map(tag => <Tag key = {tag} color = 'primary'>{tag}</Tag>)}
    </div>
  )
}
