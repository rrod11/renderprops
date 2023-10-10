import "./BaseStats.css";
function BaseStats({ baseStats, clicker }) {
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <table>
        <button onClick={clicker} className="sp-stats">
          Check Special Stats
        </button>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{baseStats.hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{baseStats.attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{baseStats.defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{baseStats.speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStats;
