import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  to: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '课程地图',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    to: '/docs/category/课程笔记',
    description: (
      <>
        微专业每门课的通关攻略：教材、考核、实验避坑、推荐资源，
        老带新少绕弯。
      </>
    ),
  },
  {
    title: '比赛沙盒',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    to: '/docs/category/比赛经验',
    description: (
      <>
        RoboMaster、电赛、数模等赛事的标准三件套：入坑指引、技术栈、
        历届踩坑合集。
      </>
    ),
  },
  {
    title: '升学攻略',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    to: '/docs/category/升学就业',
    description: (
      <>
        保研、考研、留学、就业的方向地图与时间线，配 AI 工具链
        让学习与求职更省力。
      </>
    ),
  },
];

function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={to}>
          进入板块
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
