import React from 'react'
import { useRouter } from "next/router";


export default function Another(props) {
  console.log(props);
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <div>Hello another - {locale}</div>
  )
}


export async function getServerSideProps() {
  // call sanity
  return {
    props: {
    }, // will be passed to the page component as props
  }
}