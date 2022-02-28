import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Prismic from "prismic-javascript";!
import * as Prismic from "@prismicio/client";
import {
  Client,
  PRISMIC_background,
  PRISMIC_image,
  PRISMIC_logo,
  PRISMIC_link,
  PRISMIC_link_text,
  PRISMIC_text,
  PRISMIC_heading,
  PRISMIC_button_text,
  PRISMIC_category,
  PRISMIC_icon,
  PRISMIC_image2,
  PRISMIC_image3,
  PRISMIC_heading2,
  PRISMIC_text2,
  PRISMIC_second_text,
  PRISMIC_footer_section_title,
} from "../prismic-configuration";
import {
  AboutUsDiv,
  Button,
  ContactDiv,
  ContactInput,
  ContactTextarea,
  DividingLine,
  HeaderDiv,
  Hero,
  Navbar,
  PartnerDiv,
  ServicesDiv,
  TextHeader1,
  TextHeader2,
  TextHeader3,
  TextHeader4,
  TextParagraphLarge,
  TextParagraphSmall,
} from "../components/Components";
import Link from "next/link";
import { useState } from "react";

type PrismicBody = {
  primary: any;
  items: any[];
};

interface LandingProps {
  navigation: PrismicBody;
  header: PrismicBody;
  about: PrismicBody;
  services: PrismicBody;
  partners: PrismicBody;
  footer: PrismicBody[];
}

const Home: NextPage<LandingProps> = ({
  navigation,
  header,
  about,
  services,
  partners,
  footer,
}) => {
  const [dropdown,setDropdown] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {console.log(footer)}
      <Head>
        <title>Eu Tech</title>
        <meta name="description" content="A next-gen tech solutions company" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Navbar>
          <Link href="/">
            <a>
              <img
                src={PRISMIC_logo(navigation.primary)}
                height="60px"
                alt=""
              />
            </a>
          </Link>
          <button style={!dropdown?{display:"none"}:undefined} onClick={()=>setDropdown(false)} id="close">
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5001 3.34985C9.4355 3.34985 2.91675 9.8686 2.91675 17.9332C2.91675 25.9978 9.4355 32.5165 17.5001 32.5165C25.5647 32.5165 32.0834 25.9978 32.0834 17.9332C32.0834 9.8686 25.5647 3.34985 17.5001 3.34985ZM17.5001 29.5999C11.0688 29.5999 5.83342 24.3644 5.83342 17.9332C5.83342 11.5019 11.0688 6.26652 17.5001 6.26652C23.9313 6.26652 29.1668 11.5019 29.1668 17.9332C29.1668 24.3644 23.9313 29.5999 17.5001 29.5999ZM22.7355 10.6415L17.5001 15.8769L12.2647 10.6415L10.2084 12.6978L15.4438 17.9332L10.2084 23.1686L12.2647 25.2249L17.5001 19.9894L22.7355 25.2249L24.7918 23.1686L19.5563 17.9332L24.7918 12.6978L22.7355 10.6415Z"
                fill="black"
              />
            </svg>
          </button>
          <button style={dropdown?{display:"none"}:undefined} onClick={()=>setDropdown(true)} id="open">
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.375 26.6831H30.625V23.7664H4.375V26.6831ZM4.375 19.3914H30.625V16.4748H4.375V19.3914ZM4.375 9.18311V12.0998H30.625V9.18311H4.375Z"
                fill="black"
              />
            </svg>
          </button>
          <a href=""></a>
          <section style={dropdown?{display:"grid"}:undefined}>
            {navigation.items.map((each, index) => (
              <a
                href={`#${String(PRISMIC_link_text(each)).toLowerCase()}`}
                key={Math.random() + index}
              >
                <TextParagraphSmall>
                {PRISMIC_link_text(each)}
                </TextParagraphSmall>
              </a>
            ))}
          </section>
        </Navbar>

        <HeaderDiv background={PRISMIC_background(header.primary)}>
          <Hero gap="24px">
            <TextHeader1 center>{PRISMIC_heading(header.primary)}</TextHeader1>
            <TextParagraphLarge center>
              {PRISMIC_text(header.primary)}
            </TextParagraphLarge>
            <section>
              <Button color="#f7f7f7">
                <a href="#our services">
                <TextParagraphLarge>
                  {PRISMIC_button_text(header.items[0])}
                </TextParagraphLarge>
                </a>
              </Button>
              <Button color="#4784B0" background="#f5">
                <a href="#contact us">
                <TextParagraphLarge>
                  {PRISMIC_button_text(header.items[1])}
                </TextParagraphLarge>
                </a>
              </Button>
            </section>
          </Hero>
        </HeaderDiv>

        <AboutUsDiv id="about us">
          {about.items.map((each, index) => (
            <Hero key={index + Math.random()} gap="15px">
              <TextHeader4 center>{PRISMIC_heading(each)}</TextHeader4>
              <TextParagraphSmall center>
                {PRISMIC_text(each)}
              </TextParagraphSmall>
            </Hero>
          ))}
        </AboutUsDiv>

        <ServicesDiv id="our services">
          <Hero gap="24px">
            <TextHeader2 center>
              {PRISMIC_heading(services.primary)}
            </TextHeader2>
            <TextParagraphSmall center>
              {PRISMIC_text(services.primary)}
            </TextParagraphSmall>
          </Hero>
          <section>
            {services.items.map((each, index) => (
              <Hero key={index + Math.random()} gap="20px">
                <i>
                  <img src={PRISMIC_icon(each)} alt={PRISMIC_heading(each)} />
                </i>
                <TextHeader4 center>{PRISMIC_heading(each)}</TextHeader4>
                <TextParagraphSmall center>
                  {PRISMIC_text(each)}
                </TextParagraphSmall>
              </Hero>
            ))}
          </section>
        </ServicesDiv>
        <PartnerDiv id="our partners">
          <div>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[0])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[0])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image3(partners.items[0])} alt="" />
              </div>
            </section>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[1])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[1])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image3(partners.items[1])} alt="" />
              </div>
            </section>
          </div>
          <TextHeader2>{PRISMIC_text(partners.primary)}</TextHeader2>
          <div>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[2])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[2])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image3(partners.items[2])} alt="" />
              </div>
            </section>
            <section>
              <div>
                <img src={PRISMIC_image(partners.items[3])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image2(partners.items[3])} alt="" />
              </div>
              <div>
                <img src={PRISMIC_image3(partners.items[3])} alt="" />
              </div>
            </section>{" "}
          </div>
          <DividingLine />
          <section>
            <TextHeader3>{PRISMIC_heading2(partners.primary)}</TextHeader3>
            <TextParagraphLarge>
              {PRISMIC_second_text(partners.primary)}
            </TextParagraphLarge>
          </section>
        </PartnerDiv>
      </main>

      <ContactDiv id="contact us">
        <section>
          <TextHeader2>
            {PRISMIC_footer_section_title(footer[0].primary)}
          </TextHeader2>
        </section>
        <div>
          <div>
            {footer[0].items.map((each, index) => (
              <a href={`#${String(PRISMIC_link_text(each)).toLowerCase()}`} key={index + Math.random()}>
                <TextParagraphLarge>
                  {PRISMIC_link_text(each)}
                </TextParagraphLarge>
              </a>
            ))}
          </div>
          <div>
            {footer[1].items.map((each, index) => (
              <section key={index + Math.random()}>
                <i>
                  <img src={PRISMIC_icon(each)} />
                </i>
                  <TextParagraphLarge>
                    {PRISMIC_link_text(each)}
                  </TextParagraphLarge>
              </section>
            ))}
          </div>
          <form>
            <section>
              <ContactInput placeholder="First Name" />
              <ContactInput placeholder="Last Name" />
            </section>
            <ContactInput type="email" placeholder="Email" />
            <ContactTextarea
              rows={6}
              placeholder="Additional Message (optional)"
            />
            <Button color="#f7f7f7" type="submit">
              <TextParagraphLarge>
                {PRISMIC_button_text(footer[0].primary)}
              </TextParagraphLarge>
            </Button>
          </form>
        </div>
      </ContactDiv>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const landing = await Client.getByType("landing");
  // console.log(landing.results[0].data.body[0].primary);

  return {
    props: {
      navigation: landing.results[0].data.body[0],
      header: landing.results[0].data.body[1],
      about: landing.results[0].data.body[2],
      services: landing.results[0].data.body[3],
      partners: landing.results[0].data.body[4],
      footer: landing.results[0].data.body.filter(
        (each: any) => each["slice_type"] === "footer_section"
      ),
    },
  };
}
