import Layout from './componets/Layout/Layout'
import styles from '../styles/Home.module.css'
import Searchinput from './componets/Searchinput/Searchinput'
import CountryTable from './componets/CountryTable/CountryTable'

export default function Home({countries}) {
  return (
    <Layout>
      <div className={styles.counts}>
        Found countries {countries.length}
      </div>
      <Searchinput />
      <CountryTable countries={countries} />
    </Layout>
  )
}


export const getStaticProps =async()=>{
  const res =await fetch("https://restcountries.eu/rest/v2/all")
  const countries = await res.json()
  return{
    props:{
      countries
    }  
  }
}