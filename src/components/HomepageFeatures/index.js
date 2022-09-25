import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'We are FREE!',
    Svg: require('/static/img/features/we_are_free.png').default,
    description: (
      <>
        The integration of the Chargily ePay gateway is entirely FREE of charge, we just take small fees.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/features/easy_to_use.png').default,
    description: (
      <>
        Easily setup e-payment in your application and in minutes.
      </>
    ),
  },
  {
    title: 'Edahabia and CIB are supported',
    Svg: require('@site/static/img/features/Edahabia_CIB_supported.png').default,
    description: (
      <>
        No matter which card the client has, we support it, and guess what, VISA and Mastercards will soon be supported too!
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    Svg: require('@site/static/img/features/focus_on_what_matters.png').default,
    description: (
      <>
        We provide add-ons for every famous programming language and framework to make the integration easy for you, which makes focus more on the essential things.
      </>
    ),
  },
  {
    title: 'We are opensource',
    Svg: require('@site/static/img/features/we_are_opensource.png').default,
    description: (
      <>
        All the add-ons for the programming languages and frameworks are open source.
      </>
    ),
  },
  {
    title: 'We support all of them',
    Svg: require('@site/static/img/features/we_support_all_of_them.png').default,
    description: (
      <>
        For every famous programming language or framework, we have an add-on for it that makes the integration very easy: PHP, Laravel, Python, Django, Javascript, React...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ rowGap: 50}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
