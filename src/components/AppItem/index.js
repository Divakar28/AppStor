import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <div>
      <li className="apps-lists">
        <img src={imageUrl} alt={appName} className="appImage" />
        <p>{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
