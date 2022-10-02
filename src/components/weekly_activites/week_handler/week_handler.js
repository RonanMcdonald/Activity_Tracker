import styled from 'styled-components';

import ArrowLeft from '../../../assets/images/ArrowLeft.svg';
import ArrowRight from '../../../assets/images/ArrowRight.svg';

const Week__Handler__Container = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 20px 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 20px;
  width: 130px;
  color: #113654;

  border: none;
  cursor: pointer;
`;

const Form = styled.form``;

const Label = styled.label`
  display: block;
  max-width: 131px;
  min-width: 129px;
  font-weight: 600;
  color: #643fdb;

  cursor: pointer;
  position: relative;

  select {
    font-size: 24px;
    color: #643fdb;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background: transparent;
    outline: transparent;
    border: none;

    font-size: 24px;
    font-weight: 600;
  }
`;

const WeekHandler = ({ weekNumber, setWeekNumber }) => {
  const handleWeekIncrement = () => weekNumber != 52 && setWeekNumber((weekNumber += 1));
  const handleWeekDecrement = () => weekNumber != 1 && setWeekNumber((weekNumber -= 1));
  const handleWeekChange = (e) => setWeekNumber((weekNumber = parseInt(e.target.value)));

  return (
    <Week__Handler__Container>
      <Button onClick={handleWeekDecrement} style={{ flexDirection: 'row' }}>
        <img src={ArrowLeft} alt='' />
        <span>Previous</span>
      </Button>
      <Form>
        <Label htmlFor='week'>
          <select name='week' id='week_dropdown' onChange={(e) => handleWeekChange(e)}>
            {Array.from({ length: 52 }, (_, i) =>
              weekNumber != i + 1 ? (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ) : (
                <option key={i + 1} selected={i + 1} value={i + 1} hidden>
                  Week {i + 1}
                </option>
              )
            )}
          </select>
        </Label>
      </Form>
      <Button onClick={handleWeekIncrement} style={{ flexDirection: 'row-reverse' }}>
        <img src={ArrowRight} alt='' />
        <span>Next</span>
      </Button>
    </Week__Handler__Container>
  );
};

export default WeekHandler;
