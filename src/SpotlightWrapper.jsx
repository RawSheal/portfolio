import React, { useRef} from 'react'

function SpotlightWrapper({children}) {
    const position = useRef(null);

    const positionHandler = (e) => {
       if (!position.current) return
        let currentPosition = {x : e.pageX, y:  e.pageY}
        position.current.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px) translate(-50%, -50%)`;
    }
  return (
    <>
    <div onMouseMove={positionHandler} className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Spotlight */}
      <div ref={position}
        className="pointer-events-none flex justify-center items-center absolute transition duration-150 ease-out blur-2xl mix-blend-screen"
        style={{
          background: `#c5e8f304`,
          width: "800px",
          height: "800px",
          borderRadius: "100%",
        }}
      >
       <div
        className="pointer-events-none absolute transition duration-150 ease-out blur-2xl mix-blend-screen"
        style={{
          background: `#ffffff06`,
          width: "500px",
          height: "500px",
          borderRadius: "100%",
        }}
      /> 
      </div>
      {children}
    </div>
    </>
  )
}

export default SpotlightWrapper