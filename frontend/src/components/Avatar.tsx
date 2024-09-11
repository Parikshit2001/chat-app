
function Avatar({src}:{src: string}) {
  return (
    <div>
      <img className='w-10 h-10 bg-black rounded-full absolute' src={src} alt="" />
    </div>
  )
}

export default Avatar
