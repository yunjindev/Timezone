document.addEventListener('DOMContentLoaded', () => {
  MicroModal.init({
    onClose: () => { console.log('close') }
  })

  MicroModal.show('modal-1')
  MicroModal.close('modal-1')
});