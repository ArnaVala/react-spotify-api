import { useSession } from "next-auth/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { useState, useEffect } from 'react'
import { shuffle } from 'lodash' //for randomizing/shuffling colors
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom'

/* using randomized colors for the header component from the color array
and use useEffect
using string-interpolation in the className ${color} in the section
*/
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500"
];

function Center() {
  const { data: session } = useSession(); // using the useSession hook for getting data
  const [color, setColor] = useState(null); // creating a state for the changing colors in header
  //initial state is none - as soon as we mount a random color will be rendered.
  //const [playlistId, setPlaylistId] = useRecoilState(playlistIdState); // use this to render the playlist data to the dom
  
  // instead of the above we can create a variable with useRecoilValue(), and pass the variable into the useEffect
  const playlistId = useRecoilValue(playlistIdState); 

  useEffect(() => {
    setColor(shuffle(colors).pop()) //setColor on mount - shuffle colors and 'pop' one in
  }, [playlistId]); //

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center  bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            src={session?.user.image}
            alt={session?.user.name}
            className="rounded-full w-10 h-10"
          />
           <h2 className="text-black">{session?.user.name}</h2>
           <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
        <h3>hello</h3>
      </section>
    </div>
  )
};

export default Center
