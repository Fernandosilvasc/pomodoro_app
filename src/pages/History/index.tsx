import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CyclesContext';
import { formatDistanceToNow, parseISO } from 'date-fns';

import { HistoryContainer, HistoryList, Status } from './styles';

export function History(): JSX.Element {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Timer</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              console.log(cycle.startDate);
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} min</td>
                  <td>
                    {formatDistanceToNow(parseISO(cycle.startDate.toString()), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor='green'>Finished</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor='red'>Stopped</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor='yellow'>In progress</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
