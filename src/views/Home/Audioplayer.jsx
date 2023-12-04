import { useState, useEffect } from "react";
import axios from "axios";

const AudioPlayer = () => {
  const [audioplayer, setAudioplayer] = useState([]);

  useEffect(() => {
    getAudioplayer();
    return () => {};
  }, []);

  async function getAudioplayer() {
    const options = {
      headers: {
        "X-RapidAPI-Key": "7bbf2d3475msh4946f20725615d2p12e534jsna30c90b33bca",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    data.forEach((items) => {
      console.log(items);
    });
    setAudioplayer(data);
  }

  return (
    <section id="audiopalyer">
      <h2 className="text-center mt-4">
        Exercises to start your fitness journey
      </h2>
      <Carousel>
        <Carousel.Item>
          {audioplayer.map((AudioPlayer, index) => {
            return (
              <div className="d-flex justify-content-center" key={index}>
                <img
                  className="d-block w-25"
                  src={AudioPlayer.gifUrl}
                  alt="First slide"
                />
              </div>
            );
          })}
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default WorkOut;
