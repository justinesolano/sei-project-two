
function buttonNumberGenerator() {
  return Math.floor(Math.random() * 3)
}


export const randomButtonsOrder = () => {
  if (buttonNumberGenerator === 0){
    return (
      console.log('THIS ORDER') )
  } else if (buttonNumberGenerator === 1){
    return (
      console.log('THAT ORDER'))
  } else if (buttonNumberGenerator === 2){
    return (
      console.log('THATS THE ORDER'))
  } else if (buttonNumberGenerator === 3){
    return (
      console.log('THIS IS THE ORDER'))
  }
}

