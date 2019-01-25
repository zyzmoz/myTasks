export const openModal = (Component) => {
  return {
    type: 'OPEN_MODAL',
    payload: {Component}
  }

}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'    
  }
}