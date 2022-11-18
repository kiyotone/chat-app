import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ContactList from '../components/ContactList'
import MainBody from '../components/MainBody'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Macondo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap" rel="stylesheet" />

      </Head>    
    
    <Navbar />
    <div className="flex ">
          <div className="">
            <Sidebar />
          </div>
          
        <div className="pt-[.5rem]">
          <MainBody />
        </div>
    </div>

    </div>
  )
}
