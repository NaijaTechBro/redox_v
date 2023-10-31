import PopularUser from "../../../../assets/popular-user.png"

const ReadingBox = () => {
  return (
    <div className="reading-box">
      <div className="reading-box__header">
        <img src={PopularUser} alt="Reading" className="reading-box__img" />
        <h6 className="reading-box__heading">Amit Das</h6>
      </div>
      <div className="reading-box__body">
        <p className="reading-box__text">Your portfolio is stopping you from geting that job</p>
      </div>
    </div>
  )
}

export default ReadingBox
