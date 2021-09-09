
import logo from './logo.svg'
import React ,{useRef , useEffect} from 'react';
import './App.css';
//import { useEffect } from 'react/cjs/react.production.min';
import useWebAnimations , {bounce}from "@wellyshen/use-web-animations";
function App() {
  //const elem = useRef(null)


  // {transform: 'translate(0 , 0)'},
  // {transform: 'translate(600px , 0)'}

  const { ref, playState  , getAnimation} = useWebAnimations({...bounce})
//     {
//     keyframes: {
//      // transform: "translateX(500px)",
      
// transform: 'translate(0 , 0)',
//   transform: 'translate(600px , 0)' ,// Move by 500px
//       background: ["red", "blue", "green"], // Go through three colors
//     },
//     animationOptions: {
//     //  delay: 500, // Start with a 500ms delay
//       duration: 1000, // Run for 1000ms
//       iterations: Infinity, // Repeat once
//       direction: "alternate", // Run the animation forwards and then backwards
//       easing: "ease-in-out", // Use a fancy timing function
//     },
//     onReady: ({ playState, animate, animation }) => {
//       // Triggered when the animation is ready to play
//     },
//     onUpdate: ({ playState, animate, animation }) => {
//       // Triggered when the animation enters the running state or changes state
//     },
//     onFinish: ({ playState, animate, animation }) => {
//       // Triggered when the animation enters the finished state
//     },
//     // // More useful options...
//   });

  // return (
  //   <div className="container">
  //     <p>🍿 Animation is {playState}</p>
  //     <div className="target" ref={ref} />
  //   </div>
  // );
  return (
    <div>
    <div ref={ref}  className='target'/>
 current animation {playState} 
 <button onClick={()=> getAnimation().pause()} >pause</button>
 <button onClick={()=> getAnimation().play()} >Play</button>

    </div>
  );
}

export default App;
