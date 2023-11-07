import { useContext, useEffect, useState } from "react"
import Footer from "../../../components/Layout/Footer/Footer"
import Navbar from "../../../components/Layout/Navbar/Navbar"
import axios from "axios"
import { URL } from "../../../url"
import { UserContext } from "../../../context/UserContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./profile.scss"
import { useTheme } from "../../../context/ThemeContext"
import PopularBoxes from "../../../components/Layout/Popular/components/PopularBoxes"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { postDate, truncate } from "../../../helpers"

const Profile = () => {
  const param = useParams().id
  const [username, setUsername] = useState("")
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const { user } = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [analysisState, setAnalysisState] = useState(true)
  // console.log(user)

  const toggleAnalysisState = () => setAnalysisState((prev) => !prev)

  const fetchProfile = async (param) => {
    try {
      const res = await axios.get(`${URL}/api/users/${param}`)
      setUsername(res.data.username)
      setFollowers(res.data.followers)
      setFollowing(res.data.following)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchUserPosts = async (param) => {
    try {
      const res = await axios.get(`${URL}/api/posts/user/${param}`)
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (param !== undefined) {
      fetchProfile(param)
      fetchUserPosts(param)
    }
  }, [param])

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="container">
          <div className="profile">
            <h4 className="profile-details__heading">Profile</h4>
            <div className="profile-details__section">
              <div className="profile-details__photo">
                <img src={user.photo} alt={username} />
              </div>
              <div className="profile-details__info">
                <h3 className="profile-details__title">@{username}</h3>
                <div className="profile-details__content">
                  <span className="profile-details__info--box">{posts.length} Posts</span>
                  <span className="profile-details__info--box">{followers.length} Followers</span>
                  <span className="profile-details__info--box">{following.length} Following</span>
                </div>
                <div className="profile-details__cta">
                  <Link to={`/profile/edit/${user._id}`}>
                    <button className="cta__btn">Edit Profile</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="profile-details__toggler">
              <span className={`profile-details__toggle ${analysisState ? `active` : ``}`} onClick={toggleAnalysisState}>
                My Analysis
              </span>
              <span className={`profile-details__toggle ${!analysisState ? `active` : ``}`} onClick={toggleAnalysisState}>
                Bookmark
              </span>
            </div>
            {analysisState ? (
              <div className="profile-details__grid">
                {posts.map((post) => (
                  <Link to={`/posts/post/${post._id}`} key={post._id}>
                    <div className="profile-box">
                      <h4 className="profile-box__info--title title--mobile desktop--hidden text--center">{post.title}</h4>
                      <div className="profile-box__info--top mobile--top desktop--hidden">
                        <div>
                          <img src={user.photo} alt="Popular" className="profile-box__info--profile" />
                          <h6 className="profile-box__info--heading">{post.username}</h6>
                        </div>
                        <h6 className="profile-box__info--heading profile-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
                      </div>
                      <div className="profile-box__info">
                        <div className="profile-box__info--top mobile--hidden">
                          <img src={user.photo} alt="Popular" className="profile-box__info--profile" />
                          <h6 className="profile-box__info--heading">{post.username}</h6>
                          <h6 className="profile-box__info--heading profile-box__info--heading--dimmed">{postDate(post.createdAt)}</h6>
                        </div>
                        <div className="profile-box__info--body">
                          <h4 className="profile-box__info--title mobile--hidden">{post.title}</h4>
                          <p className="profile-box__info--text">{truncate(post.desc, 300)}</p>
                        </div>
                        <div className="profile-box__info--bottom">
                          <div className="profile-box__info--meta meta">
                            {post.categories.map((category) => (
                              <span className="meta__category" key={category}>
                                {category}
                              </span>
                            ))}
                            <span className="meta__time mobile--hidden">3 min read</span>
                            <span className="meta__selected mobile--hidden">Selected for you</span>
                          </div>
                          <div className="profile-box__info--cta mobile--hidden">
                            <span>
                              <MdOutlineBookmarkAdd size={20} />
                            </span>
                            <span>
                              <BiDotsHorizontalRounded size={20} />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="profile-box--img">
                        <img src={post.image} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="profile-details__bookmarks">
                <h4 className="profile-details__heading">No Bookmark Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
