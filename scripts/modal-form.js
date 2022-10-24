function renderModalForm() {
  const modalBlockSignUp = document.getElementById('modal-sign-up');

  const handleRenderMenu = (elem) => {
    const element = document.createElement(elem.element);

    if (elem.className?.length) {
      element.classList.add(...elem.className);
      element.textContent = elem.text;
    }

    if (elem.element === 'input') {
      elem?.placeholder ? element.setAttribute('placeholder', elem.placeholder) : '';
      elem?.id ? (element.id = elem.id) : '';
      elem?.autocomplete ? element.setAttribute('autocomplete', elem.autocomplete) : '';
      elem?.type ? element.setAttribute('type', elem.type) : '';
      elem?.name ? element.setAttribute('name', elem.name) : '';
    }

    if (elem.element === 'div') {
      elem?.tabindex ? element.setAttribute('tabindex', elem.tabindex) : '';
    }

    if (elem?.onclick) {
      element.setAttribute('onclick', elem.onclick);
    }

    if (elem.element === 'form') {
      element.setAttribute('action', elem.action);
      element.setAttribute('id', elem.id);
    }

    if (elem?.id ? elem.element === 'div' : '') {
      element.id = elem.id;
    }

    // Recursion

    if (elem.children?.length) {
      console.log(elem.children);
      elem.children.forEach((it) => {
        const childElem = handleRenderMenu(it);
        element.append(childElem);
      });
    }
    return element;
  };

  const modalContentSignUp = handleRenderMenu(MODAL_STRUCTURE_SIGN_UP);
  modalBlockSignUp.append(modalContentSignUp);
}

renderModalForm();

// Open modal window

const modalWindow = document.querySelector('.modal');
const modalBackDrop = document.querySelector('.modal__backdrop');
const modalClose = document.querySelector('.modal__close');

function handleModalWindow() {
  modalWindow.classList.add('active');
  document.body.classList.add('lock');

  if (modalWindow.classList.contains('active')) {
    modalBackDrop.classList.add('shown');
    setTimeout(() => {
      modalBackDrop.classList.add('active');
    }, 700);
  } else {
    setTimeout(() => {
      modalBackDrop.classList.remove('shown');
      modalBackDrop.classList.remove('active');
    }, );
  }
}

function handleCloseModalWindow() {
  modalWindow.classList.remove('active');
  document.body.classList.remove('lock');
  modalBackDrop.classList.remove('active');
  modalBackDrop.classList.remove('shown');
}
