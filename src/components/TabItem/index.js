import './index.css'

const TabItem = props => {
  const {tabItem} = props
  const {displayText} = tabItem
  return (
    <div>
      <button type="button" className="btn">
        <li>
          <p>{displayText}</p>
        </li>
      </button>
    </div>
  )
}
export default TabItem
