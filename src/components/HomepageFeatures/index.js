import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Organize your storage',
    Svg: require('@site/static/img/storage-svgrepo-com.svg').default,
    description: (
      <>
        Up to 8Tb for RAID5, software to manage storage
      </>
    ),
  },
  {
    title: 'Home, office, swimming pool',
    Svg: require('@site/static/img/office-suitcase-svgrepo-com.svg').default,
    description: (
      <>
        Small and portable as fuck
      </>
    ),
  },
  {
    title: 'Everything Everywhere All at Once',
    Svg: require('@site/static/img/web-svgrepo-com-2.svg').default,
    description: (
      <>
        Remote access and web UI
      </>
    ),
  },

  {
    title: 'Rely upon, not worry about',
    Svg: require('@site/static/img/infinite-svgrepo-com.svg').default,
    description: (
      <>
        Long lasting high performance
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
