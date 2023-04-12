import { HistoryContainer, HistoryList, Status } from './styles';

export function History(): JSX.Element {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='yellow'>In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='red'>Stopped</Status>
              </td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 5</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 6</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 7</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor='green'>Done</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
