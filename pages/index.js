import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Streamer from '@components/Streamer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const urls = ["/.netlify/functions/streams", "/.netlify/functions/users",];

    Promise.all(urls.map(url => fetch(url).then(r => r.json())))
        .then(([streams, users]) => {
          let data = [];

          const mergeById = (a1, a2) =>
            a1.map(itm => ({
              ...a2.find((item) => (item.display_name === itm.user_name) && item),
            ...itm
          }));

          data = mergeById(streams.streams, users.users)
          setData(data);
          console.log({data})
        })
        .catch(error => console.log(error));
}, []);
  
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Rust In Peace" />
        <div className='stream-grid'>
          { data && data.map((streamer) => 
            <Streamer
              game={streamer.game_name}
              started_at={streamer.started_at}
              title={streamer.title}
              user_name={streamer.user_name}
              thumbnail_url={streamer.thumbnail_url}
              profile_image_url={streamer.profile_image_url}
            />
          )}
        </div>
        <Footer />
      </main>
    </div>
  )
}
