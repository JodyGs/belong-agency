import React from 'react'
import { useRouter } from "next/router";


export default function Another(props) {
  console.log(props);
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <div>Hello another - {locale}</div>
  )
}


export async function getStaticProps(context) {
  // call sanity
  return {
    props: {
      toto: "prout",
      context
    }, // will be passed to the page component as props
  }
}