import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { MealItem } from '../MealItem';

interface Meal {
  id: string;
  time: string;
  name: string;
  status: 'within' | 'outside';
}

interface Props {
  date: string;
  meals: Meal[];
}

export function MealSection({ date, meals }: Props) {
  return (
    <>
      <SectionHeader date={date} />
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          time={meal.time}
          meal={meal.name}
          status={meal.status}
        />
      ))}
    </>
  );
}