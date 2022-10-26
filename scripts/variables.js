const MODAL_STRUCTURE_SIGN_UP = {
  element: 'div',
  className: ['modal_conteiner'],
  children: [
    {
      element: 'div',
      className: ['modal__backdrop'],
      onclick: 'handleCloseModalWindow()',
    },

    {
      element: 'div',
      className: ['modal__content'],
      children: [
        {
          element: 'div',
          className: ['modal__body'],
          children: [
            {
              element: 'div',
              className: ['modal__close'],
              id: 'close-modal-sing-up',
              onclick: 'handleCloseModalWindow()',
              children: [
                {
                  element: 'span',
                  className: ['close__line'],
                },
              ],
            },
            {
              element: 'div',
              className: ['modal__block'],
              children: [
                {
                  element: 'h3',
                  className: ['modal__title'],
                  text: 'Sign up',
                },
                {
                  element: 'form',
                  className: ['form__block'],
                  action: '',
                  id: 'sign-up-form',
                  children: [
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input'],
                          type: 'text',
                          name: 'login',
                          placeholder: 'Enter your login...',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-email-sing-up'],
                          type: 'email',
                          name: 'email',
                          placeholder: 'Enter your e-mail...',
                          autocomplete: 'username email',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-password-check'],
                          id: 'first-password-input',
                          type: 'password',
                          name: 'password',
                          placeholder: 'Enter your Password...',
                          autocomplete: 'current-password',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',

                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-password-check'],
                          id: 'second-password-input',
                          type: 'password',
                          name: 'password',
                          placeholder: 'Enter your Password again...',
                          autocomplete: 'current-password',
                        },
                      ],
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['modal__enter'],
                  children: [
                    {
                      element: 'button',
                      className: ['modal__button', 'button-sign-up'],
                      type: 'enter',
                      text: 'Sign Up',
                    },
                  ],
                },
                {
                  element: 'p',
                  className: ['sign__link'],
                  text: 'or if you have an account',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};



const MODAL_STRUCTURE_LOGIN = {
  element: 'div',
  className: ['modal_conteiner'],
  children: [
    {
      element: 'div',
      className: ['modal__backdrop'],
      onclick: 'handleCloseModalWindow()',
    },

    {
      element: 'div',
      className: ['modal__content'],
      children: [
        {
          element: 'div',
          className: ['modal__body'],
          children: [
            {
              element: 'div',
              className: ['modal__close'],
              id: 'close-modal-login',
              onclick: 'handleCloseModalWindow()',
              children: [
                {
                  element: 'span',
                  className: ['close__line'],
                },
              ],
            },
            {
              element: 'div',
              className: ['modal__block'],
              children: [
                {
                  element: 'h3',
                  className: ['modal__title'],
                  text: 'Login',
                },
                {
                  element: 'form',
                  className: ['form__block'],
                  action: '',
                  id: 'login-form',
                  children: [
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input'],
                          type: 'text',
                          name: 'login',
                          placeholder: 'Enter your login...',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-email-sing-up'],
                          type: 'email',
                          name: 'email',
                          placeholder: 'Enter your e-mail...',
                          autocomplete: 'username email',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',
                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-password-check'],
                          id: 'first-password-input',
                          type: 'password',
                          name: 'password',
                          placeholder: 'Enter your Password...',
                          autocomplete: 'current-password',
                        },
                      ],
                    },
                    {
                      element: 'div',
                      className: ['input__item'],
                      tabindex: '0',

                      children: [
                        {
                          element: 'input',
                          className: ['input', 'form-input', 'form-input-password-check'],
                          id: 'second-password-input',
                          type: 'password',
                          name: 'password',
                          placeholder: 'Enter your Password again...',
                          autocomplete: 'current-password',
                        },
                      ],
                    },
                  ],
                },
                {
                  element: 'div',
                  className: ['modal__enter'],
                  children: [
                    {
                      element: 'button',
                      className: ['modal__button', 'button-sign-up'],
                      type: 'enter',
                      text: 'Login',
                    },
                  ],
                },
                {
                  element: 'p',
                  className: ['sign__link'],
                  text: 'or if you don`t have an account',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
