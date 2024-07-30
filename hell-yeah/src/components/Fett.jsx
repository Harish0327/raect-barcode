export default function Add(props) {

  const her = (e) => {
    e.preventDefault()
    document.getElementsByClassName("link")[0].style.display = "block"


  }
  return (
    <>
      <div className="nerd">
        <nav>
          <ul>
            <li ><a href=""> Home</a></li>
            <li className="he" onClick={(e) => her(e)}><a href="">Products</a> </li>
            <li><a href=""> New Arrivals</a></li>
            <li> <a href="">About us</a></li>
          </ul>
        </nav>
      </div>
      <div className="link">
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Chocalte coffee</li>
          <li>Boost</li>
        </ul>
      </div>
    </>
  )
}