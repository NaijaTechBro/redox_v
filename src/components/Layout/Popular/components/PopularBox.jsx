import { BiDotsHorizontalRounded } from "react-icons/bi"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import popularBox from "../../../../assets/popular-box.png"
import PopularUser from "../../../../assets/popular-user.png"

const PopularBox = () => {
  return (
    <div className="popular-box">
      <div className="popular-box__info">
        <div className="popular-box__info--top">
          <img src={PopularUser} alt="Popular" className="popular-box__info--profile" />
          <h6 className="popular-box__info--heading">Amit Das</h6>
          <h6 className="popular-box__info--heading popular-box__info--heading--dimmed">4 days ago</h6>
        </div>
        <div className="popular-box__info--body">
          <h4 className="popular-box__info--title">Your portfolio is stopping you from geting that job</h4>
          <p className="popular-box__info--text">
            An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior
            UX designer. As my portfolio...
          </p>
        </div>
        <div className="popular-box__info--bottom">
          <div className="popular-box__info--meta meta">
            <span className="meta__category">Portfolio</span>
            <span className="meta__time">3 min read</span>
            <span className="meta__selected">Selected for you</span>
          </div>
          <div className="popular-box__info--cta">
            <span>
              <MdOutlineBookmarkAdd size={20} />
            </span>
            <span>
              <BiDotsHorizontalRounded size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="popular-box--img">
        <img src={popularBox} alt="" />
      </div>
    </div>
  )
}

export default PopularBox
