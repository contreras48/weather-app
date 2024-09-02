interface WeatherConditionProps {
  condition: string
}

function WeatherCondition({ condition } : WeatherConditionProps) {

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return(
    <h3 className="text-3xl font-bold text-primary mt-4">{capitalize(condition)}</h3>
  )
}

export default WeatherCondition;