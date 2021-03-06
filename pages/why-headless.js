import React from 'react';
import { compose } from 'recompose';
import variables from '../styles/variables';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';

const Platform = ({ platform }) => (
  <PageLayout title={platform.meta_title} metaDescription={platform.meta_description}>

    <div className="wrap wrap--vertical-padding">
      <h2>
Why is headless technology so important?
      </h2>

      <div className="advantage">
        <img alt="digital-cash-payment" className="advantage-img" src="../static/img/11- digital-cash-payment.svg" />
        <div>
          <h3>
Omnichannel readiness
          </h3>
          <p>
The content created in a headless
          system like unchained is “pure” and can
          be repurposed across multiple channels, including website,
          mobile app, digital assistant, virtual reality,
          smart watches, etc. anywhere and at any time through the customer journey.
          </p>
        </div>
      </div>
      <div className="advantage">
        <img alt="currency-money-hand" className="advantage-img" src="../static/img/01- currency-money-hand-1.svg" />
        <div>
          <h3>
Low operating costs
          </h3>
          <p>
Headless Software is usually cheaper to install
          and run than their monolith counterparts,
          especially as they are typically built on a cloud model where
          multi-tenant options keep the running costs low.
          All parts of the system come with docker images per default.
          And if you don&apos;t want to host the shop engine yourself, we do it for you in our
          containerized cloud platform.
          </p>
        </div>
      </div>

      <div className="advantage">
        <img alt="business-balance-time-income" className="advantage-img" src="../static/img/28- business-balance-time-income-2.svg" />
        <div>
          <h3>
Reduces time to market
          </h3>
          <p>
Unchained promotes an agile way of working
           because content creators and developers can work simultaneously in
           completely separated modules.
           And with the help of GraphQL, building front- and backend in parallel is also doable.
           That way projects can be finished much faster.
          </p>
        </div>
      </div>

      <div className="advantage">
        <img alt="easy-to-use-cake" className="advantage-img" src="../static/img/38- easy-to-use-cake.svg" />
        <div>
          <h3>
Easy to use
          </h3>
          <p>
Traditional digital commerce systems tend to be cumbersome and
          complex* as vendors attempt to offer every available feature in one box and force you to
          read &quot;how to theme X?&quot; documentation.
          Headless systems focus on content management; keeping things simple for those
          who use it on a daily basis. The entire user experience can usually
          be managed from within one backend.
          </p>
        </div>
      </div>

      <div className="advantage">
        <img alt="program-setting" className="advantage-img" src="../static/img/45- program-setting-1.svg" />
        <div>
          <h3>
Flexibility
          </h3>
          <p>
Content editors can work in whichever headless CMS
          they like and developers can build any kind of frontend they want in their
          preferred language (e.g. Ruby, PHP, Java, or Swift) and then simply integrate
          the two via APIs (Unchained & CMS) with GraphQL. This allows
          for polyglot programming where multiple programming paradigms can be used to
          deliver content to multiple channels, and enables a company to benefit from
          the latest developments in language frameworks, promoting a microservices architecture.
          </p>
        </div>
      </div>

      <div className="advantage">
        <img alt="cloud-server-network" className="advantage-img" src="../static/img/03- cloud-server-network.svg" />
        <div>
          <h3>
Cloud Scalability
          </h3>
          <p>
The content purity and stateless APIs of headless
           CMSs enable high scalability, especially as the architecture fully leverages
           the elasticity of a cloud platform. Unchained uses a NoSQL database to
           do auto-sharding and is able to store all assets in a block storage.
          </p>
        </div>
      </div>

      <div className="advantage">
        <img alt="security-system-shield-lock" className="advantage-img" src="../static/img/22- security-system-shield-lock.svg" />
        <div>
          <h3>
System Security
          </h3>
          <p>
Since the content is typically provided through
           a high-performance Content Delivery Network (rather than directly from the database)
           and can be cached at different edges of the microservice architecture,
           the risk of distributed denial-of-service attacks (DDOS) is reduced.
          </p>
        </div>
      </div>
    </div>


    <style jsx>
      {`
      .advantages {
        padding-bottom: 2em;
      }
      @media (min-width: 768px) {
        .advantages {
          display: flex;
        }
        .advantage {
          display: flex;
          justify-content: space-between;
        }
      }


      .advantage {
        margin-top: 2.5em;
        padding: 2em 1.5em;
        background-image: linear-gradient(to top left, ${variables.grayColor}, white);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 90%;
        box-shadow: 0 2px 8px rgba(0,0,0,.05), 0 4px 14px rgba(0,0,0,.1);
      }

      .advantage h2 {
        margin-top: 0;
        margin-bottom: 0;
      }

      .advantage h3 {
        margin-top: 0;
      }


      .advantage p {
        margin-top: .25em;
        margin-bottom: 0;
      }

      .advantage-img {
        width: 120px;
        height: 120px;
        margin-right: .5em;
      }

      @media (min-width: 768px) {
        .advantage p {
          max-width: 80%;
        }
      }
    `}
    </style>

  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('platform'),
)(Platform));
