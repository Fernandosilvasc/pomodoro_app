import { Play } from 'phosphor-react';

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

export function Home(): JSX.Element {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor='task'>Working on</label>
          <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='name of your project'
          />

          <datalist id='task-suggestions'>
            <option value='Project 1' />
            <option value='Project 2' />
            <option value='Project 3' />
            <option value='Project 4' />
          </datalist>

          <label htmlFor='minutesAmount'>during</label>
          <MinutesAmountInput
            type='number'
            id='minutesAmount'
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type='submit'>
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}