import RecomendedBadge from "./RecomendedBadge"

const Recomended = () => {
  const badgeData = ["Fundamentals", "Money", "Business", "Productivity", "USD", "Trading Strategy", "Yada Yada"]

  return (
    <div className="popular__recomended">
      <h4 className="popular__recomended--heading">Recommended Topics</h4>
      <div className="popular__recomended--badges">
        {badgeData.map((data) => (
          <RecomendedBadge text={data} key={data} />
        ))}
      </div>
    </div>
  )
}

export default Recomended
